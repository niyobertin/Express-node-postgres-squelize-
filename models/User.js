import Sequelize from "sequelize";
import db from '../config/config.js'

const User = db.define('User', {
    name: {
        type: Sequelize.STRING,
        unique: true,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: Sequelize.STRING,
        unique: true,

    }
})
await User.sync();

export default User;
