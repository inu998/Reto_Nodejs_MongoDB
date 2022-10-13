//Realizamos como primer paso las importaciones de librerias necesarias para el funcionamiento del API

//Importamos la libreria Express que nos permitira utilizar un servidor local utilizando node.js
const express = require('express');

//Importamos la libreria Mongoose que nos permitira generar la conexion con la base de datos de MongoDB
const mongoose = require('mongoose');

//Llamos el metodo contructor de Express para crear un nuevo objeto que llamaremos servidor 
const servidor = express();

//Es el enrutador  que se le permite al usuario para consultar las funcionalidades del api
const router = express.Router(); 

//Definimos los atributos que tendra el objeto servidor del metodo express
servidor.use(express.json()); //El objeto servidor permitira archivos en formato json y hara una parseo
servidor.use(express.urlencoded({extended: true})); //El objeto servidor permitira cadenas o matrices

//Debemos definir las rutas o ednPoints de nuestro servicio API REST
servidor.use('/servidor/api',require('./router/rutas'));//Establecemos la ruta base /servidor/api y enlazamos la carpeta router con el archivo rutas,js

//Configuramos la cadena de conexion  a la base de datos dispuesta en mongoDB 
//Utilizamos el objeto  mongoose creado apartir de la libreia mongoose y con el atributo connect para la conexion de datos
//Debemos especificar el nombre de nuestra base de datos creada previamente en mongoDB

//Hacemos una promesa donde realizaremos la conexion a la base de datos en caso de que se cumpla obtendremos un .then en caso de que haya un error
//Obtendremos un .catch
mongoose.connect("mongodb+srv://admin:1234@clusterprueba27.u019njr.mongodb.net/MiPrimeraBaseDeDatosMongoDB")
    .then(db => console.log("Conexion exitosa"))
    .catch(err => console.log("Error al conectarse a la base de datos de Mongo :", err));

//Declaramos el puerto por el cual se ejecutara nuestro servidor y lo pondremos en modo escucha
const puerto = 3000;
servidor.listen(puerto, () => {
    console.log(`EL servidor esta en modo escucha en el puerto: ${puerto}`);
});