module.exports = (sequelize, type) => {
    return sequelize.define('product', {
        id:{
            type: type.INTEGER, 
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nameProd:{ 
            type: type.STRING,
            allowNull: false,
        },
        precioProd: {
           type: type.INTEGER,
           allowNull: false,
        },

        ivaProd: {
          type:  type.INTEGER,
          allowNull: false,

        }, 
        date: { 
            type: type.DATE,
            allowNull: false, },
        stock: {
            type: type.INTEGER,
            allowNull: false,
        } 
    });
};