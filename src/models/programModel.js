const{Schema,model}=require('mongoose');

const programSchema=Schema({
    name:{
        type:String,
    },
    valor:{
        type:Number,
    },
    Carrera:{
        type:String,
    },
});






module.exports=model('Program',programSchema);