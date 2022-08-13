const Sequelize = require('sequelize');

// const FilmModel = require('./models/films.js');
const UsersModel =  require('../models/users.js') //Instancia de los users

const seque = new Sequelize('examen','root', 'Jeancarlos17', {
    host: 'localhost',
    dialect: 'mysql',
});


const Users = UsersModel(seque, Sequelize);
// const Film = FilmModel(seque, Sequelize);

seque.sync({ force: false })
.then( () => {
    console.log('Tablas Sincronizadas');
})


module.exports = {
    Users
}