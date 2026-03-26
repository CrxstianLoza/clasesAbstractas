import * as readline from "readline"

// Ejercicio 7

abstract class transporte{
    abstract calcularCosto(): number
}

class taxi extends transporte{
    distancia: number

    constructor(distancia: number){
        super()
        this.distancia = distancia
    }

    calcularCosto(): number{
        return this.distancia * 1.5
    }
}

class autobus extends transporte{
    distancia: number

    constructor(distancia: number){
        super()
        this.distancia = distancia
    }

    calcularCosto(): number{
        return this.distancia * 0.5
    }
}

class uber extends transporte{
    distancia: number

    constructor(distancia: number){
        super()
        this.distancia = distancia
    }

    calcularCosto(): number{
        return this.distancia * 1.2
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("1. Taxi")
console.log("2. Autobus")
console.log("3. Uber")

rl.question("Seleccione transporte: ", (opcion: string) => {

    opcion = opcion.trim()

    if(opcion === "1"){
        rl.question("Ingrese la distancia en km: ", (distancia) => {
            let t = new taxi(Number(distancia))
            console.log("Costo: $" + t.calcularCosto().toFixed(2))
            rl.close()
        })
    }
    else if(opcion === "2"){
        rl.question("Ingrese la distancia en km: ", (distancia) => {
            let t = new autobus(Number(distancia))
            console.log("Costo: $" + t.calcularCosto().toFixed(2))
            rl.close()
        })
    }
    else if(opcion === "3"){
        rl.question("Ingrese la distancia en km: ", (distancia) => {
            let t = new uber(Number(distancia))
            console.log("Costo: $" + t.calcularCosto().toFixed(2))
            rl.close()
        })
    }
    else{
        console.log("Respuesta invialida")
        rl.close()
    }

})