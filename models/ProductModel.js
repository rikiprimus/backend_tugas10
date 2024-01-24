import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Product = db.define('products',{
    product: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
},{
    freezeTableName:true
});

export default Product;

(async()=>{
    await db.sync();
})();