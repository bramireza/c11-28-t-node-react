const mongoose = require('mongoose');
const adminSchema = new mongoose.Schema({
    id:{
        type:mongoose.Schema.Types.ObjectId, 
        default:mongoose.Types.ObjectId, 
        index:{
            unique:true
        }
    },
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    active:{
        type:Boolean,
        default:true
    }
})

const Admin = mongoose.model('Admin', adminSchema)

module.exports = Admin;