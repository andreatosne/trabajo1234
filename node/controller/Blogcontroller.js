
import  BlogModel  from '../models/BlogModel.js'


//muestra todos los registros 


 export const getAllBlog =  async(req,res ) =>{

try {
    
    const blogs =  await BlogModel.findAll()
res.json(blogs)
} catch (error) {

    res.json({message:error.message})
    
}
}
//muestra un registo


export const getBlog = async(req,res)=>{

try {
    const blog = await BlogModel.findAll({where:{id:req.params.id}})
    res.json(blog[0])
} catch (error) {
    res.json({message:error.message})
    
}


}

//crear un registro

export const createBlog= async(req,res)=>{
try {
     await BlogModel.create(req.body)//como le va a enviar respuesta no va atener una constante
    
     res.json({
        "message":"registro creado corectamente"
     })

} catch (error) {
    res.json({message:error.message})
    
}



}
//actualizar un registro

export const updateBlog =async(req,res) =>{
    try {
        
 await  BlogModel.update(req.body,{
    where: { id:req.params.id}})
    res.json({
        "message":"registro actualizado corectamente"
     })

    } catch (error) {
        res.json ({message:  error.message})
    }


}
//eliminar un dato

export const deleteBlog =(req,res)=>{
    try {
        BlogModel.destroy({
            where:{ id : req.params.id}
        })
        res.json({
            "message":"registro eliminado corectamente"
         })
    } catch (error) {
        res.json ({message:error.message})
        
    }

}