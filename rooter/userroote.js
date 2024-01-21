const express= require('express')
const router=express.Router()
const {creatuser,getAllusers,uptadteuser,deleteuser}=require('../controls/usercontrls')
router.post('/createuser',creatuser)
router.get('/getallusers',getAllusers)
router.put('/updateuser/:id',uptadteuser)
router.delete('/deleteuser/:id',deleteuser)
module.exports=router