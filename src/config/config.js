import Sequelize from "sequelize";
import createDataBase from "./createDB.js";

const DB = "estoque_autopecas";
const usuario = "useradmin";
const senha = "admin@123";

const sequelize = new Sequelize(DB, usuario, senha, {
  host: "serverestoquecar.mysql.database.azure.com",
  //host: "localhost",
  dialect: "mysql",
});


let dbStatusCreate = false;
console.log(dbStatusCreate);

if (dbStatusCreate) {
  await createDataBase(DB,usuario,senha);
  dbStatusCreate = false; 
  console.log(dbStatusCreate);
 
}


export default sequelize;


