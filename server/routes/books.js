const express=require("express")
const router=express.Router()
const {getallbook, addbook, deletebook, updatebook}=require('../controller/books.js')



router.get('/getall', getallbook)
router.post('/add', addbook)
router.delete('/:idbook', deletebook)
router.put('/:idbook', updatebook)
module.exports=router