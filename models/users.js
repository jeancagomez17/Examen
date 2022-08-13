module.exports = (sequelize, type) => {
    return sequelize.define('users', {
        id:{
            type: type.INTEGER, 
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        last_name: type.STRING,
        pass: type.STRING,
        date:type.DATE,
    });
};

