const router = require('express').Router();
const { Prods } = require('../../db/conection.js');
const { check, validationResult } = require('express-validator');


router.get('/', async (req, res)=> {
    // res.send('Funciona, entra correctamente');
    
    const prods = await Prods.findAll();
    res.json(prods);


});
 const validacion = [
    check('id', 'Es obligatorio el id').not().isEmpty(),
    check('nameProd', 'Es obligatorio el nameProd').not().isEmpty(),
    check('precioProd', 'Es obligatorio el precioProd').not().isEmpty(),
    check('ivaProd', 'Es obligatorio el ivaProd').not().isEmpty(),//Si se quiere colocar otra validacion
    check('date', 'Es obligatorio el date').not().isEmpty(),
    check('stock', 'Es obligatorio el stok').not().isEmpty(),
];

router.post('/register', validacion,  async (req, res)=> {

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(422).json({ errores:  errors.array() })
    } 

        const prods = await Prods.create(req.body);
        res.json(prods);
    
});



router.put('/:prodId', async (req, res) => {

    
    await Prods.update(req.body, {
        where: { id: req.params.prodId}
    });
    res.json({ succes: `Se ha modificado correctamente el producto ${req.params.prodId}`});


});


router.delete('/:prodId', async (req, res)=> {
    await Prods.destroy({
        where: { id: req.params.prodId}
    })
    res.json({ succes: `Se ha borrado el producto ${req.params.prodId}` });
});







module.exports = router;