const router = require('express').Router();
const { Vents } = require('../../db/conection.js');
// const {indexDB } = require('../../models/indexDB.js');
const { check, validationResult } = require('express-validator');


router.get('/', async (req, res)=> {
    // res.send('Funciona, entra correctamente');
    
    const prods = await Prods.findAll();
    res.json(prods);


});
 const validacion = [
    check('id', 'Es obligatorio el id').not().isEmpty(),
    check('descVenta', 'Es obligatorio el descVenta').not().isEmpty(),
    check('fechaVenta', 'Es obligatorio el fechaVenta').not().isEmpty(),
    check('subValVenta', 'Es obligatorio el subValVenta').not().isEmpty(),//Si se quiere colocar otra validacion
    check('totalVenta', 'Es obligatorio el totalVenta').not().isEmpty(),
    check('idUserFk', 'Es obligatorio el idUserFk').not().isEmpty(),
    check('idVentFK', 'Es obligatorio el idVentFK').not().isEmpty(),
];

router.post('/register', validacion,  async (req, res)=> {

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(422).json({ errores:  errors.array() })
    } 

        const vents = await Vents.create(req.body);
        res.json(vents);
    
});



router.put('/:ventId', async (req, res) => {

    
    await Vents.update(req.body, {
        where: { id: req.params.ventId}
    });
    res.json({ succes: `Se ha modificado correctamente el producto ${req.params.ventId}`});


});


router.delete('/:ventId', async (req, res)=> {
    await Vents.destroy({
        where: { id: req.params.ventId}
    })
    res.json({ succes: `Se ha borrado el producto ${req.params.ventId}` });
});

module.exports = router;