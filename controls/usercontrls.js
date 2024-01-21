const user= require('../model/User')

const creatuser=async(req,res)=>{
    try { const newuser= await user.create(req.body)
        res.status(201).json({mesg:"user created",newuser})
    }
     catch (error) {
        res.status(500).json({mesg:"somthing went wrong ",error})
    }
}


const getAllusers=async(req,res)=>{
    try { const getallusers=await user.find()
        res.status(201).json({mesg:" all users ",getallusers})
    } catch (error) {
        res.status(500).json({mesg:"somthing went wrong ",error})
        
    }
}




const uptadteuser=async(req,res)=>{
    try { const updateuser=await user.findByIdAndUpdate({_id:req.params.id},req.body,{ new: true})
        res.status(200).json({mesg:"user updated",updateuser})
    } catch (error) {
        res.status(500).json({mesg:"somthing went wrong ",error})
        
    }
}
const deleteuser= async(req,res)=>{
    try{
    const deleteuser=await user.findByIdAndDelete({_id:req.params.id})
    res.status(200).json({mesg:"user deleteed",deleteuser})}
    catch{
        res.status(500).json({mesg:"somthing went wrong ",error})
        
    }
}
module.exports={creatuser,getAllusers,uptadteuser,deleteuser}