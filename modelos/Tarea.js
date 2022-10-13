//Debemos importar la libreria mongoosee que nos permite la conexion con la base de datos 
const mongoose = require('mongoose');

//Representaremos la coleccion que utilizaremos en la base de datos mongoDB creando un objeto llamado TareaSchema 
//De la libreria mongoosee con el atributo Schema
let TareaSchema = new mongoose.Schema({
    //Ingresamos los documentos que tendra nuestra coleccion 
    //Nombre del registro y tipo de dato
    IdTarea : Number,
    Tipo_documento : String,
    Numero_documento : Number,
    Nombres : String,
    Apellidos : String,
    Direccion : String,
    Correo_electronico : String,
    Telefono : Number,
    Celular : Number,
    Link_comprobante : String,
    Codigo_icfes : String,
    Estudia_familiares : String,
    Estrato_social : Number,
    TipodeColegio : String,
});

//Exponemos el esquema 
//tarea = es el nombre que recibe el modelo o la informacion que enviaremos 
//TareaSchema = es el nombre que recibe el esquema o Documento
//Tareas = es el nombre que tendra la coleccion ya existente o que se creata en mongodb 
module.exports = mongoose.model("tarea", TareaSchema , "RetoNodeMongoDB");