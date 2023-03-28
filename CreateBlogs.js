import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
const URI =' http://localhost:8000/blogs/'

const CompCreateBlog =()=>{
     const [nombre,setNombre]=useState('')
     const [apellido,setApellido]=useState('')
     const [ficha,setFicha]=useState('')
     const [telefono,setTelefono]=useState('')
     const [fecha,setFecha]=useState('')
     const navigate =useNavigate()
     
     //procedimiento guardar

     const store =async (e) =>{
        e.preventDefault()
         await axios.post(URI,{nombre: nombre, apellido:apellido,ficha:ficha,telefono:telefono,fecha:fecha})
     navigate('/')
     
        }


return(
    <div>
      <h3>create post</h3>

      <form onSubmit={store} > 
      <div className="mb-3" >
        <label className="form-label">nombre</label>
        <input
        
        value={nombre}
onChange={(e)=>setNombre(e.target.value)}//capturando el valor que se encuentra en el input        
        type="text"
        className="form-control"
        
        
        />
      </div>
      <div className="mb-3" >
        <label className="form-label">apellido</label>
        <input
        
        value={apellido}
onChange={(e)=>setApellido(e.target.value)}//capturando el valor que se encuentra en el input        
        type="text"
        className="form-control"
        
        
        />
     </div> 
     <div className="mb-3" >
        <label className="form-label">ficha</label>
        <input
        
        value={ficha}
onChange={(e)=>setFicha(e.target.value)}//capturando el valor que se encuentra en el input        
        type="text"
        className="form-control"
        
        
        />
     </div> 
     <div className="mb-3" >
        <label className="form-label">telefono</label>
        <input
        
        value={telefono}
onChange={(e)=>setTelefono(e.target.value)}//capturando el valor que se encuentra en el input        
        type="text"
        className="form-control"
        
        
        />
     </div> 
     <div className="mb-3" >
        <label className="form-label">fecha</label>
        <input
        
        value={fecha}
onChange={(e)=>setFecha(e.target.value)}//capturando el valor que se encuentra en el input        
        type="text"
        className="form-control"
        
        
        />
     </div> 
<button type="submit" className='btn btn-primary'>store</button>
      </form>

    </div>


)


}
export default CompCreateBlog