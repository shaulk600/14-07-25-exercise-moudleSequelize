import { Sequelize, DataTypes } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();


export const sequelize_db = new Sequelize('sequelize_db_test', 'root', '', {   // פה אני רושם את [nameDataBase , nameUser , password]
    host: 'localhost',
    dialect: "mysql",      //איזה סוג טבלה אנחנו משתמשים 
    logging: false, // האם לייצא איזשהם לוגרים החוצה - פה בחרנו שלא
    //לא לרשום פה PORT בשום אופן!!!
});

export const UserActivity = sequelize_db.define('user_activity', { //פה זה השם של הטבלה ושל המופע הנוכחי של define
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    activity: {
        type: DataTypes.STRING,
        allowNull: false
    }
    
});
















