const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { Users } = require('../../db/conection.js');
const { check, validationResult} = require('express-validator');

router.get('/', async (req, res)=> {
    res.send('Funciona, entra correctamente');
    const users = await Users.findAll();
    res.json(users);
});

router.post('/register', [
    check('name', 'El name de usuario es obligatorio'),
    check('pass', 'La password es obligatoria'),

], async (req, res)=> {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ err:  errors.array() })
    }
    req.body.pass = bcrypt.hashSync(req.body.pass, 10);
    const users = await Users.create(req.body);
    res.json(users);
});

router.put('/:userdId', async (req, res) => {

    
    await Users.update(req.body, {
        where: { id: req.params.userdId}
    });
    res.json({ succes: 'Se ha modificado correctamente'});


});

router.delete('/:userdId', async (req, res)=> {
    await Users.destroy({
        where: { id: req.params.userdId}
    })
    res.json({ succes: 'Se ha Borrado la pelicula' });
});


module.exports = router;