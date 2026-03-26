import * as readline from "readline";

// Ejercicio 2

abstract class Vehiculo{
    abstract mover(): void
}

class Carro extends Vehiculo{
    mover(): void {
        console.log("sube y acelera el carro")
    }
}

class Bicicleta extends Vehiculo{
    mover(): void {
        console.log("sube y pedalea la bicicleta")
    }
}

class Motocicleta extends Vehiculo{
    mover(): void {
        console.log("Sube y acelera la moto")
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


console.log("1. Carro")
console.log("2. Biclicleta")
console.log("3. Moto")
rl.question("Que vehiculo desea seleccionar?: ", (respuesta: string)=>{

    respuesta = respuesta.toLowerCase().trim()

    if (respuesta == "carro" || respuesta == "1"){
        let carro = new Carro()
        carro.mover()
    }
    else if (respuesta == "biclicleta"|| respuesta == "2"){
        let bici = new Bicicleta()
        bici.mover()
    }
    else if (respuesta == "moto"|| respuesta == "3"){
        let moto = new Motocicleta()
        moto.mover()
    }
    else{
        console.log("Respuesta invialida")
    }
    rl.close()
})

