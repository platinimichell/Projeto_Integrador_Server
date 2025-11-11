import Sequelize from "sequelize";
import createDataBase from "./createDB.js";

const DB = "estoque_autopecas";
const usuario = "root";
const senha = "root";

const sequelize = new Sequelize(DB, usuario, senha, {
  host: "localhost",
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


