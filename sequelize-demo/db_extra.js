import { DataTypes } from "sequelize";
import { sequelize_db } from "./db.js";

export const User = sequelize_db.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export const Post = sequelize_db.define('Post' , {
    title: {
        type:DataTypes.STRING ,
        allowNull: false
    } ,
    content : {
        type :DataTypes.STRING, 
        allowNull:false
    }
})