const Sequelize = require('sequelize');

const UsersModel =  require('../models/users.js') //Instancia de los users
const ProdsModel = require('../models/product.js');
const VentsModel = require('../models/venta.js');


const seque = new Sequelize('examen','root', 'Jeancarlos17', {
    host: 'localhost',
    dialect: 'mysql',
});


const Users = UsersModel(seque, Sequelize);
const Prods = ProdsModel(seque, Sequelize);
const Vents = VentsModel(seque, Sequelize);



seque.sync({ force: false })
.then( () => {
    console.log('Tablas Sincronizadas');
})


module.exports = {
    Users,
    Prods,
    Vents
}