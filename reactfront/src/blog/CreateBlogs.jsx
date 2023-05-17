import axios from "axios";
import { useForm } from 'react-hook-form';

import react,{Component} from "react";

import { useState } from "react";

import { useNavigate } from "react-router-dom";
const URI ='http://localhost:8000/blogs/'


const CopiaaPrueba =()=>{

         
//usesate devuelve el valor  y una funcion para actualizarlo
     const [nombre,setNombre]=useState('')
     

  
     const [ficha,setFicha]=useState('')
     const [telefono,setTelefono]=useState('')
     const [fecha,setFecha]=useState('')

     const navigate =useNavigate()
     
     //procedimiento guardar

     const store =async (e) =>
     {
               
{ e.preventDefault() 

        //envia datos
         await axios.post(URI,{nombre: nombre,
ficha:ficha,telefono:telefono,fecha:fecha })
     navigate('/tablita')
         }
        }


return(
    <div  className='w-25 m-auto  mt-lg-4  '>
        
      <h3>solicitar acompañamiento</h3>
<center>

     {/*evita que un formulario sea enviado si determinadas condiciones no son cumplidas.*/}
     
     <form onSubmit={store} > 
      
      <div className="mb-3" >
       
        <input
      
        
        id="NOMBRE"
      
        value={nombre}
onChange={(e)=>setNombre(e.target.value)}//capturando el valor que se encuentra en el input        
        type="text"
        placeholder="nombre y apellidos completos"
        className="form-control"
        required 
        
        
        />
      </div>
      
      
     <div className="mb-3" >
      
        <input id="FICHA"
        
        value={ficha}
onChange={(e)=>setFicha(e.target.value)}//capturando el valor que se encuentra en el input        
        type="text"
        placeholder="ficha"
        className="form-control"
        required 
        
        
        />
     </div>  
      {/* <label className="form-label" htmlFor="FICHA">ficha</label> */}
     <div className="mb-3" >
        
        <input id="phone"
        
        value={telefono}
onChange={(e)=>setTelefono(e.target.value)}//capturando el valor que se encuentra en el input        
        type="tel"
        placeholder="telefono"
        className="form-control"
        required 
        
        />
     </div> 
     {/* <label className="form-label" htmlFor="phone">telefono</label> */}
     <label className="form-label" htmlFor="FECHA" >fecha para agwndar la solicitud</label>
     
     <div className="mb-3" >
      
        <input
        id="FECHA"
        placeholder="FECHA"
        
onChange={(e)=>setFecha(e.target.value)}//capturando el valor que se encuentra en el input        
        type="date"
        className="form-control"
    
        
        required 
        />  
     </div> 
    
     <div>

     </div>
     <button type="submit" className='btn btn-primary' >store</button>

      </form>
      </center>
  
    </div>
    


)


}
export default CopiaaPrueba