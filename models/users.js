module.exports = (sequelize, type) => {
    return sequelize.define('users', {
        id:{
            type: type.INTEGER, 
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: { 
            type: type.STRING,
            allowNull: false,
        },
        last:{ 
            type: type.STRING,
            allowNull: false,
        },
        pass:{ 
            type: type.STRING,
            allowNull: false,
        }
    });
};

