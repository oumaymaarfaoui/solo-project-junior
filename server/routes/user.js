const express=require('express')
const router=express.Router()

const {adduser, getusers}= require('../controller/users.js')

router.post("/add", adduser)
router.get("/get", getusers)

module.exports=router