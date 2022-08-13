module.exports = (sequelize, type) => {
    return sequelize.define('product', {
        id:{
            type: type.INTEGER, 
            primaryKey: true,
            autoIncrement: true
        },
        nameProd: type.STRING,
        precioProd: type.INTEGER,
        ivaProd: type.INTEGER,
        date:type.DATE,
        stock: type.INTEGER,
    });
};