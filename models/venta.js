module.exports = (sequelize, type) => {
    return sequelize.define('venta', {

        id: {
            type: type.INTEGER, 
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        descVenta:{
            type: type.STRING,
            allowNull: false,
        },
        fechaVenta:{
            type: type.DATE,
            allowNull: false,
        },
        subValVenta: {
            type: type.INTEGER,
            allowNull: false,
        },
        totalVenta:{
            type: type.INTEGER,
            allowNull: false,
        },
        idUserFk: { //llave foranea
            type: type.INTEGER,
            allowNull: false,
        }, 
        idVentFK:{ //llave foranea
            type: type.INTEGER,
            allowNull: false,
        }

    })
}