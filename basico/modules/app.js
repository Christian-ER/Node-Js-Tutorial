//import { appendFile } from 'node:fs';
const os = require('os');
const fs = require('fs');
const car = require('./car')

let cpu = os.cpus();
let sistema = os.platform();
let usuario = os.hostname();

/*let cpu_string = JSON.stringify(cpu);
fs.appendFile('pruebas.txt', `Información del sistema ${cpu_string}`, (error) => {
    if (error) {
        console.log('Error al crear archivo');
    }
});*/

car.start();
car.change(1,1);
car.change(2,1);
car.change(3,1);
setTimeout(() => {
    console.log("Carro Apagado!")
}, 2000);
car.stop();
//console.log(usuario);
