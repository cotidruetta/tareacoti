let fs = require('fs');

function listarTareas(listaTareas){

    console.log("Listado de tareas");
    console.log("-------------------");
    listaTareas.forEach(elemento => {
        console.log(elemento.titulo);
    });
    console.log("-------------------");

}

function guardarTarea(listaTareas, nuevaTarea){
    listaTareas.push(nuevaTarea);
    fs.writeFileSync('./tareas.json',JSON.stringify(listaTareas,null," "));
}

function borrarTarea(listaTareas, codigoTarea){
    let nuevasTareas = listaTareas.filter(function(e){
        return e.codigo!=codigoTarea;
    });
    
    fs.writeFileSync('./tareas.json',JSON.stringify(nuevasTareas,null," "));
    return nuevasTareas;
}

function tareasEstado(listaTareas,estadoBuscado){

    let tareasSegunEstado = listaTareas.filter(function(e){
        return e.estado==estadoBuscado;
    });
    
    return tareasSegunEstado;
}


module.exports = {listarTareas, guardarTarea,borrarTarea,tareasEstado};