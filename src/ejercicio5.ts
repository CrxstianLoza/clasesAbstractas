import * as readline from "readline"

// Ejercicio 5

abstract class pago{
    abstract procesarPago(): void
}

class pagoEfectivo extends pago{
    monto: number

    constructor(monto: number){
        super()
        this.monto = monto
    }

    procesarPago(): void{
        console.log("Pago en efectivo realizado por $" + this.monto.toFixed(2))
    }
}

class pagoTarjeta extends pago{
    monto: number
    numero: string

    constructor(monto: number, numero: string){
        super()
        this.monto = monto
        this.numero = numero
    }

    procesarPago(): void{
        console.log("Pago con tarjeta realizado por $" + this.monto.toFixed(2))
        console.log("Tarjeta terminada en " + this.numero.slice(-4))
    }
}

class pagoTransferencia extends pago{
    monto: number
    cuenta: string

    constructor(monto: number, cuenta: string){
        super()
        this.monto = monto
        this.cuenta = cuenta
    }

    procesarPago(): void{
        console.log("Transferencia realizada por $" + this.monto.toFixed(2))
        console.log("Cuenta destino: " + this.cuenta)
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("1. Pago en efectivo")
console.log("2. Pago con tarjeta")
console.log("3. Transferencia bancaria")

rl.question("Seleccione tipo de pago: ", (opcion: string) => {

    opcion = opcion.trim()

    if(opcion === "1"){
        rl.question("Ingrese el monto: ", (monto) => {
            let p = new pagoEfectivo(Number(monto))
            p.procesarPago()
            rl.close()
        })
    }
    else if(opcion === "2"){
        rl.question("Ingrese el monto: ", (monto) => {
            rl.question("Ingrese numero de tarjeta: ", (numero) => {
                let p = new pagoTarjeta(Number(monto), numero)
                p.procesarPago()
                rl.close()
            })
        })
    }
    else if(opcion === "3"){
        rl.question("Ingrese el monto: ", (monto) => {
            rl.question("Ingrese numero de cuenta: ", (cuenta) => {
                let p = new pagoTransferencia(Number(monto), cuenta)
                p.procesarPago()
                rl.close()
            })
        })
    }
    else{
        console.log("Respuesta invialida")
        rl.close()
    }

})