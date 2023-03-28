import express from 'express'
import {getAllBlog,getBlog,createBlog,updateBlog,deleteBlog} from '../controller/Blogcontroller.js'
const router = express.Router()


router.get('/',getAllBlog)
router.get('/:id',getBlog);
router.post('/',createBlog);
router.put('/:id',updateBlog)
router.delete('/:id',deleteBlog)

export default router