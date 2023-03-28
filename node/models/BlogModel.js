//importa la coeccion a la base de datos 
import db from '../database/db.js';
//importar sequelize
import { DataTypes } from 'sequelize';
import cors from 'cors';

 const BlogModel = db.define('citas',{
    nombre:{type: DataTypes.STRING},

    ficha:{type: DataTypes.NUMBER},
    telefono:{type: DataTypes.NUMBER},
    fecha:{type: DataTypes.DATE},

})
export default BlogModel;
