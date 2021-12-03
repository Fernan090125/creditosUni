const {Schema,model}=require("mongoose")
const User = require("./userModel").schema

const creditSchema=Schema({
    Estado:{
        type:String,
        required:true,
        default:"Pendiente"
    },
    Nombre:{
        type:String,
        required:true
    },
    Cedula:{
        type:String,
        required:true
    },
    direccion:{
        type:String,
        required:true
    },
    telefono:{
        type:String,
        required:true
    },
    ingresos:{
        type:String,
        required:true
    },
    programa:{
        type:String,
        required:true
    },
    año:{
        type:String,
        required:true
    },
    periodo:{
        type:String,
        required:true
    },
    valor:{
        type:Number,
    },
    Cuotas:{
        type:Number,
    },
    valorCuota:{
        type:Number,
    },
    CuotaInicial:{
        type:Number,
    },
    FechaLimiteCuotaInicial:{
        type:String,
    },
    user:[User]
})


module.exports=model("Credit",creditSchema)