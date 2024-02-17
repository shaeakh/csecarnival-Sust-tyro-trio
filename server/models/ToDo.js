const mongoose = require('mongoose');
const taskSchema= mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        date:{
            type:String,
            required:true
        },
        time:{
            type:String,
            required:true
        },
        isComplete:{
            type: Boolean,
            default: false
        }
    },
    {
        _id:false
    }

)
const todoSchema = mongoose.Schema(
    {
        usermail:{
            type:String,
            required:true
        },
        list: [taskSchema]
    }
)

module.exports = mongoose.model("ToDo",todoSchema);