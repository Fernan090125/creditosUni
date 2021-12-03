const { Schema, model } = require("mongoose");
const userSchema=Schema({
    nombre:{
        type:String,
    },
    apellido:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    rol:{
        type:String,
        default:"Estudiante"
    },

})

module.exports=model("User",userSchema)