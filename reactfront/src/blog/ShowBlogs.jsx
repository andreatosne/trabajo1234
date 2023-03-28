import axios from 'axios'
import { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'

const URI =' http://localhost:8000/blogs/'

//usesate devuelve el valor conectado y una funcion para actualizarlo
//devuelve un valor con estado por ejemplo const[blogs,setBlog]=useState([])
//estado con valor=blogs  y la funcion es setBlog
//blogs va a traer todo y setBlog es para actualizarlo

//useEffect es utilizar efecto 

const CompShowBlogs = () =>{
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
<main className="container-portafolio">
      <div className="container">
        <div className="row">
          <div className="container-psico">
            <h3>Nuestros Psicologos</h3>
            <hr />
            <p>
              Encuentra tu psicológo y recibe el apoyo que necesitas, sin salir
              de casa. ¡Te ayudamos! Tratamientos. Especialistas.
              Recomendaciones. Reserva hora. Pide cita online.
            </p>
          </div>

          <div className="container d-flex justify-content-around">
            <div className="card bg-card col-lg-5">
              <section className="row py-lg-4">
                <div className="col-md-6">
                  <img src="images/psicologa.jpg" className="img-fluid" />
                </div>
                <div className="col-md-6">
                  <h4>Psicologa Diana paola</h4>
                  <p>Contactos: 3127383940</p>
                  <p>email:</p>
                </div>
              </section>
            </div>
            <div className="card bg-card col-lg-5">
              <section className="row py-lg-4">
                <div className="col-md-6">
                  <img src="images/psicologo.jpg" className="img-fluid" />
                </div>
                <div className="col-md-6">
                  <h4>Psicologo Henry hurtado</h4>
                  <p>Contactos: 3127383940</p>
                  <p>email:</p>
                </div>
              </section>
            </div>
          </div>
          <div className="btn-cita">
          
           
          </div>
        </div>
       
      </div>
      </main>
<div className="btn-cita">
<Link to="/validator2" className='btn-solid-lg'>solicitar cita</Link>
</div>  </div>
 
    

)

}

export default CompShowBlogs