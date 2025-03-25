const express=require('express');//Requiriendo express
const app=express();//Creando app con constructor express
const port=3005; //puerto:usualmente es por el orden del 3000
//obteniendo de la aplicación la ruta y un creando callback
//conmensaje indicando mi servidir
app.get('/',(req,res)=>{ //Parámetro 1 es la ruta, el 2 un callback
res.send('Este es mi server de express');
})
//Indicando que debe escuchar el puerto 3005
app.listen(port,()=>{ //Parámetro 1 es el puerto, el 2 un callback
console.log('Escuchando el puerto: '+ port);
});