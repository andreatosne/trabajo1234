import axios from 'axios'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

const URI =' http://localhost:8000/blogs/'

//usesate devuelve el valor conectado y una funcion para actualizarlo
//devuelve un valor con estado por ejemplo const[blogs,setBlog]=useState([])
//estado con valor=blogs  y la funcion es setBlog
//blogs va a traer todo y setBlog es para actualizarlo

//useEffect es utilizar efecto 

const Comppsicologo = () =>{
    const [blogs,setBlog] = useState([])
    useEffect ( () => {
    getBlogs()
},[])


//procedimiento para mostrar todos los blogs 
const getBlogs = async ()=>{

const res = await axios.get(URI)
setBlog(res.data)//se obtiene una respuesta 
}

//procedimiento para eliminar  un blog

const deleteBlog= async(id) =>{

 await axios.delete(`${URI}${id}`)
getBlogs()//una vez se elimina muestra todos los registros para ver como quedaron

}

return(
<div>
    <h1>solicitar acompañamiento</h1>
    <div className='container mt-20'>
<div className='row'>
<div className='col'>
   
    <table className='table mt-20'>
<thead className='table table-danger mt 20'>

<tr>

<th>nombre completo</th>
<th>ficha</th>
<th>telefono</th>
<th>fecha</th>

</tr>
</thead>
<tbody> {blogs.map((blog)=>(

    <tr key= {blog.id }>
<td>{blog.nombre}</td>    

<td>{blog.ficha}</td>
<td>{blog.telefono}</td>
<td>{blog.fecha}</td>
<td>

{/* <Link to={`/edit/${blog.id}`} className='btn btn-info'>editar</Link> */}
{/* <button onClick={()=>deleteBlog(blog.id)}    className='btn btn-danger'> delete</button> */}
<select className="form-select" aria-label="Default select example">
  <option selected>estado</option>
  <option value="1">pendiente</option>
  <option value="2">cancelada</option>
  <option value="3">aprobada</option>
</select>
</td>
    </tr>
))}   </tbody>

    </table>
</div>
</div>

{/* <Link to="/create" className='btn btn-primary mt-1 mb-2'>crear</Link> */}
    
<Link to="/" className='btn btn-primary mt-1 mb-2'>volver</Link> 
    </div>
</div>
    

)

}

export default  Comppsicologo