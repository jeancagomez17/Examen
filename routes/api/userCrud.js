const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { Users } = require('../../db/conection.js');
const { check, validationResult } = require('express-validator');

const moment = require('moment');
const jwt = require('jwt-simple');

router.get('/', async (req, res)=> {
    // res.send('Funciona, entra correctamente');
    const users = await Users.findAll();
    res.json(users);
});

router.post('/register', [
    check('id', 'Es obligatorio el id').not().isEmpty(),
    check('name', 'Es obligatorio el name').not().isEmpty(),
    check('pass', 'Es obligatorio el pass').not().isEmpty() //isEmail para cuando sea necesario
],  async (req, res)=> {

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(422).json({ errores:  errors.array() })
    } 

        req.body.pass = bcrypt.hashSync(req.body.pass, 10);
        const users = await Users.create(req.body);
        res.json(users);
    
    
});

router.put('/:userdId', async (req, res) => {

    
    await Users.update(req.body, {
        where: { id: req.params.userdId}
    });
    res.json({ succes: `Se ha modificado correctamente el userid ${req.params.userdId}`});


});

router.delete('/:userdId', async (req, res)=> {
    await Users.destroy({
        where: { id: req.params.userdId}
    })
    res.json({ succes: `Se ha borrado el usuario ${req.params.userdId}` });
});


router.post('/login', async () => {

    const user = await Users.findOne({ where: { id: req.body.id}});
    if(user){
        const iguales = bcrypt.compareSync(req.body.pass, user.pass); //compara si las dos contraseñas son iguales
        if(iguales){
            res.json({ sucess: createTok(user)});
        }else {
            res.json({error : 'Error en usuario o contraseña'});
        }
    }else {
        res.json({error : 'Error en usuario o contraseña'});
    }

})

const createTok = (user) => {
    const payload = {
        id: user.id,
        createAt: moment().unix(),
        expiredAt: moment().add(5, 'minutes').unix()
    }
    return jwt.encode(payload, 'Token fras');
}

module.exports = router;