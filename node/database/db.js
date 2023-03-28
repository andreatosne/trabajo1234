import { Sequelize } from "sequelize"
const db= new Sequelize('agendar_cita','root','',{
    host:'localhost',
    dialect:'mysql'

})
export default db