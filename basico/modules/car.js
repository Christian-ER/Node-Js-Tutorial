console.log('Carro encendido');

//let start = 'Arrancar el carro';

//module.exports.start = () => console.log("Arrancar el carro"); -- manera simplificada de exportar una funcion

module.exports = {
    start: () => {
        console.log("Arrancar el carro");
    },
    stop: () => {
        console.log("Carro detenido!");
    },
    change: (a, b) => {
        console.log(`Subir cambio de (${a}) a (${a + b})`);
        return a + b
    }
}