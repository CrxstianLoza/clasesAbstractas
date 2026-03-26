import * as readline from "readline"

// Ejercicio 4

abstract class Empleado{
    abstract calcularSalario(): number
}

class empleadoPorHoras extends Empleado{
    horas: number
    pagoHora: number

    constructor(horas: number, pagoHora: number){
        super()
        this.horas = horas
        this.pagoHora = pagoHora
    }

    calcularSalario(): number{
        return this.horas * this.pagoHora
    }
}

class empleadoFijo extends Empleado{
    salarioMensual: number

    constructor(salarioMensual: number){
        super()
        this.salarioMensual = salarioMensual
    }

    calcularSalario(): number{
        return this.salarioMensual
    }
}

class empleadoComision extends Empleado{
    ventas: number
    porcentaje: number

    constructor(ventas: number, porcentaje: number){
        super()
        this.ventas = ventas
        this.porcentaje = porcentaje
    }

    calcularSalario(): number{
        return this.ventas * (this.porcentaje / 100)
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("1. Empleado por horas")
console.log("2. Empleado fijo")
console.log("3. Empleado por comision")

rl.question("Seleccione tipo de empleado: ", (opcion: string) => {

    opcion = opcion.trim()

    if(opcion === "1"){
        rl.question("Ingrese horas trabajadas: ", (horas) => {
            rl.question("Ingrese pago por hora: ", (pago) => {
                let emp = new empleadoPorHoras(Number(horas), Number(pago))
                console.log("Salario: $" + emp.calcularSalario().toFixed(2))
                rl.close()
            })
        })
    }
    else if(opcion === "2"){
        rl.question("Ingrese salario mensual: ", (salario) => {
            let emp = new empleadoFijo(Number(salario))
            console.log("Salario: $" + emp.calcularSalario().toFixed(2))
            rl.close()
        })
    }
    else if(opcion === "3"){
        rl.question("Ingrese total de ventas: ", (ventas) => {
            rl.question("Ingrese porcentaje de comision: ", (porcentaje) => {
                let emp = new empleadoComision(Number(ventas), Number(porcentaje))
                console.log("Salario: $" + emp.calcularSalario().toFixed(2))
                rl.close()
            })
        })
    }
    else{
        console.log("Respuesta invialida")
        rl.close()
    }

})