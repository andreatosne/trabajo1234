import axios from 'axios';
import { useEffect,useState } from 'react';
import { useNavigate,useParams } from 'react-router-dom';

const URI =' http://localhost:8000/blogs/'

const CompEditBlog=()=>{
    const [nombre,setNombre]=useState('')
   
    const [ficha,setFicha]=useState('')
    const [telefono,setTelefono]=useState('')
    const [fecha,setFecha]=useState('')
    const navigate =useNavigate()

     const id=useParams()

     //procedimiento para actualizar
     const update =async(e)=>{
        e.preventDefault()
         await axios.put(URI+id,{
            nombre:nombre,
    
        ficha:ficha,
            telefono:telefono,
            fecha:fecha})
        navigate('/')
     }
useEffect(()=>{

    getBlogById()
},[])
 const getBlogById = async()=>{
     const res= await axios.get(URI+id)
     setNombre(res.data.nombre)
 setFicha(res.data.ficha)
     setTelefono(res.data.telefono)
     setFecha(res.data.fecha)

 }
 return(
    <div> className

         <h3>editar</h3>
<form onSubmit={update} > 
<div className="mb-3" >
  <label className="form-label">nombre completo</label>
  <input
  
  value={nombre}
onChange={(e)=>setNombre(e.target.value)}//capturando el valor que se encuentra en el input        
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
<button type="submit" className='btn btn-primary'>editar</button>
</form>



    </div>


 )
}
export  default CompEditBlog