import Sequelize from "sequelize";

export default new Sequelize('users', 'postgres', 'nikuze', {
    host: 'localhost',
    dialect: 'postgres',
    port: 12345,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

