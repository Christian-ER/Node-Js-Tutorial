const { error } = require('console');
const fs = require('fs');

console.log('Iniciado');
// Proceso asyncrono por defecto Nodejs tabaja los porcesos de esta manera
// se imprime iniciado, imprime finalziado y se imprime finalmente la función
/*fs.readFile('data.txt', 'utf-8', (error, data) => {
    if(error){
        console.log(`Error ${error}`);
    }else{
        console.log(data);
    }
});*/ 

//Proceso sincrono en orden como estén las lineas de codigo
//let data = fs.readFileSync('data.txt', 'utf-8');
//console.log(data);

/* funcion que permite renombrar archivos con uso de condicional throw
fs.rename('data.txt', 'data_renombrado.txt', (error) =>{
    if(error) throw error;
    console.log('¡Renombrado!');
});*/

/*Anexar texto a un archivo
fs.appendFile('data.txt', '\nGracias por ejecutar nuestro codigo', (error) => {
    if(error) console.log(`Error ${error}`);
});*/

/*eliminar archivos
fs.unlink('data2.txt', (error) => {
    if(error) throw error;
    console.log('¡Archivo Eliminado!');
});*/

/*Copiado de archivos
fs.createReadStream('data.txt').pipe(fs.createWriteStream('data_copy.txt'));*/

/*Lectura de un directorio de forma asincrona
fs.readdir('./../../basico/file_system', (error, files) => {
    files.forEach(file => {
        console.log(file);
    });
});
*/

//Lectura de un directorio de forma sincrona
fs.readdirSync('../file_system').forEach(file => {
    console.log(file);
});

console.log('Finalizado');
