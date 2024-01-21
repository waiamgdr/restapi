const mongoose=require('mongoose')

const userschema=mongoose.Schema({
    name: {type :String, required:true  },
    lastname: {type :String, required:true  },
    age: Number
})
const user=mongoose.model('user',userschema)
module.exports=user