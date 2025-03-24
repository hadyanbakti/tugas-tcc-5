import {Sequelize} from "sequelize";

const db = new Sequelize('crud_db', 'root', '', {
    host: '34.60.33.158',
    dialect: 'mysql'
});

export default db;