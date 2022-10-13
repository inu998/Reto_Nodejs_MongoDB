//Importamos la libreria que nos permitira conectarnos con el servidor con la libreria express
const { response } = require("express");
const express = require("express");

//creamos un objeto router de la libreria express con el atributo Router que es un manejador de rutas
const router = express.Router();

//Creamos la ruta de nuestra tarea que contendra el formato json
const TareaSchema = require("../modelos/Tarea.js");


//Creamos el modelo CRUD que nos permitiria ingresar, listar, actualizar y eliminar datos de nuestra base de datos utilizando postman

//Insertar datos
router.post("/Tarea-insert", (requests, response) => {
  let nuevaTarea = new TareaSchema({
    IdTarea: requests.body.id,
    Tipo_documento: requests.body.Tipo_documento,
    Numero_documento: requests.body.Numero_documento,
    Nombres: requests.body.Nombres,
    Apellidos: requests.body.Apellidos,
    Direccion: requests.body.Direccion,
    Correo_electronico: requests.body.Correo_electronico,
    Telefono: requests.body.Telefono,
    Celular: requests.body.Celular,
    Link_comprobante: requests.body.Link_comprobante,
    Codigo_icfes: requests.body.Codigo_icfes,
    Estudia_familiares: requests.body.Estudia_familiares,
    Estrato_social: requests.body.Estrato_social,
    TipodeColegio: requests.body.TipodeColegio
  });
  //Le decimos que nos guarde la informacion enviada
  nuevaTarea.save(function (error, datos) {
    //En caso de encontrar un error en la informacion enviada mostrara este mensaje
    if (error) {
      console.log(`Error ${error}`);
    }
    // de lo contrario mostrara un mensaje satisfactorio
    response.send("Tarea almacenada correctamete");
  });
});

//Listar los datos
router.get('/Tarea-listar', (requests , response) => {
  TareaSchema.find((error, datos)=>{
    if(error){
      console.log( `Error al listar los datos: ${error}` );
    }
    response.send(datos);
  })
});

//Actualizar datos
router.get('/Tarea-actualizar', (requests, response)=>{
  let body = requests.body;
  TareaSchema.updateOne({'IdTarea': body.id}, {
    $set: {
      Direccion: body.Direccion,
      Correo_electronico: body.Correo_electronico,
      Telefono: body.Telefono,
      Celular: body.Celular,
      Estudia_familiares: body.Estudia_familiares,
      Estrato_social: body.Estrato_social
    }
  },
    function (error, info){
      if(error){
        response.json({
          resultado:false,
          msg:'No se pudo efectuar la tarea',
          error
        });
      } else {
        response.json({
          resultado:true,
          info:info
        })
      }    
    }
  )
});

//Eliminar Datos
router.post('/Tarea-Eliminar', (requests, response)=>{
  let body = requests.body;
  TareaSchema.deleteOne({'IdTarea': body.id},{
    $set: requests.body
  },
  function(error,info){
    if(error){
      response.json({
        resultado:false,
        msm:'No se pudo eliminar el documento',
        error
      });
    } else {
      response.json({
        resultado:true,
        info : info
      })
    }
  })
})
// se enlazara con el servidor asignando las rutas
module.exports = router;
