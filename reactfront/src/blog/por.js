// import { useForm } from 'react-hook-form';
// import axios from "axios";
// import CompVale from "./validator"
// import { useState } from "react";

// import { useNavigate } from "react-router-dom";
// const URI =' http://localhost:8000/blogs/'


// const CompCreateBlo =()=>{
//         const {nombre,setNombre, formState: { errors }}=useForm()
//         const [ficha,setFicha]=useState('')
//         const [telefono,setTelefono]=useState('')
//         const [fecha,setFecha]=useState('')
//         const navigate =useNavigate()
        

  
//      //procedimiento guardar

//      const store =async (e) =>{
//         e.preventDefault()
//          await axios.post(URI,{nombre: nombre,
// ficha:ficha,telefono:telefono,fecha:fecha,formState: { errors } = useForm()})

//      navigate('/tablita')
     
//         }


// return(
//     <div  className='w-25 m-auto  mt-lg-4  '>
//       <h3>solicitar acompañamiento</h3>
// <center>
//       <form onSubmit={store ((data) => console.log(data))} > 
      
//       <div className="mb-3" >
//         <label className="form-label mt-4" htmlFor="nombre">nombre completo </label>
//         <input
//       {...nombre('firstName',{ required: true})}

//         value={nombre}
// onChange={(e)=>setNombre(e.target.value)}//capturando el valor que se encuentra en el input        
//         type="text"
//         className="form-control"
        
        
//         />
//       </div>
      
//      <div className="mb-3" >
//         <label className="form-label" htmlFor="FICHA">ficha</label>
//         <input id="FICHA"
     
//         value={ficha}
// onChange={(e)=>setFicha(e.target.value)}//capturando el valor que se encuentra en el input        
//         type="text"
//         className="form-control"
        
        
//         />
//      </div> 
//      <div className="mb-3" >
//         <label className="form-label" htmlFor="phone">telefono</label>
//         <input id="phone"
        
//         value={telefono}
// onChange={(e)=>setTelefono(e.target.value)}//capturando el valor que se encuentra en el input        
//         type="tel"
//         className="form-control"
     
//         />
//      </div> 
//      <div className="mb-3" >
//         <label className="form-label" htmlFor="FECHA" >fecha</label>
//         <input
//         id="FECHA"
        
//         value={fecha}
// onChange={(e)=>setFecha(e.target.value)}//capturando el valor que se encuentra en el input        
//         type="date"
//         className="form-control"
    
        
        
//         />  
//      </div> 
//      <div>

//      </div>
//      <button type="" className='btn btn-primary' >store</button>

//       </form>
//       </center>
  
//     </div>
    


// )


// }
// export default CompCreateBlo