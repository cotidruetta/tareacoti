let fs = require('fs');
let {listarTareas, guardarTarea, borrarTarea, tareasEstado} = require('./funcionesDeTareasProfe');

let datos = fs.readFileSync('./tareas.json');
let arregloObjetos = JSON.parse(datos);

listarTareas(arregloObjetos);

let nt = { codigo: 18, titulo: "Proceso de reciclaje" , estado: "Pendiente"};

guardarTarea(arregloObjetos,nt);

listarTareas(arregloObjetos);

arregloObjetos = borrarTarea(arregloObjetos,5);

listarTareas(arregloObjetos);

let arregloObjetosTareasEstado=tareasEstado(arregloObjetos,"Terminada");

listarTareas(arregloObjetosTareasEstado);