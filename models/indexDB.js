// const { User } = require('./users');
const { Product } = require('./product');
const { Venta } = require('./venta.js');

Venta.belongsTo(Product, {
    foreignKey:'idVentFK'
});
Product.hasMany(Venta, {
    foreignKey:'idVentFK'
});




module.exports = {
    // User,
    Product, 
    Venta
}