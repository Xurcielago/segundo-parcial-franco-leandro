import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

const bookModel = sequelize.define("book", {
    title: {type: DataTypes.STRING(50), allowNull: false},
    author: {type: DataTypes.STRING(50), allowNull: false},
    pages: {type: DataTypes.INTEGER(50), allowNull: false},
    genre: {type: DataTypes.STRING(30), allowNull:false},
    description: {type: DataTypes.STRING(250)}
})

export default bookModel