const mongoose= require("mongoose");

const TasksSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true , "task name is required"],
        trim:true,
        maxLength:[25, "name can't be more than 25m characters"],
    } , 
    
    completed:{
        type:Boolean,
        default:false
    }
})

module.exports=mongoose.model('Tasks',TasksSchema)