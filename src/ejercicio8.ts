import * as readline from "readline"

// Ejercicio

abstract class producto{
    abstract calcularPrecioFinal(): number
    abstract mostrarInformacion(): void
}

class productoElectronico extends producto{
    nombre: string
    precio: number

    constructor(nombre: string, precio: number){
        super()
        this.nombre = nombre
        this.precio = precio
    }

    calcularPrecioFinal(): number{
        return this.precio * 1.15
    }

    mostrarInformacion(): void{
        console.log("Producto: " + this.nombre)
        console.log("Precio base: $" + this.precio.toFixed(2))
        console.log("Precio final: $" + this.calcularPrecioFinal().toFixed(2))
    }
}

class productoRopa extends producto{
    nombre: string
    precio: number

    constructor(nombre: string, precio: number){
        super()
        this.nombre = nombre
        this.precio = precio
    }

    calcularPrecioFinal(): number{
        return this.precio * 0.9
    }

    mostrarInformacion(): void{
        console.log("Producto: " + this.nombre)
        console.log("Precio base: $" + this.precio.toFixed(2))
        console.log("Precio final: $" + this.calcularPrecioFinal().toFixed(2))
    }
}

class productoAlimento extends producto{
    nombre: string
    precio: number

    constructor(nombre: string, precio: number){
        super()
        this.nombre = nombre
        this.precio = precio
    }

    calcularPrecioFinal(): number{
        return this.precio * 1.05
    }

    mostrarInformacion(): void{
        console.log("Producto: " + this.nombre)
        console.log("Precio base: $" + this.precio.toFixed(2))
        console.log("Precio final: $" + this.calcularPrecioFinal().toFixed(2))
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("1. Producto electronico")
console.log("2. Producto ropa")
console.log("3. Producto alimento")

rl.question("Seleccione tipo de producto: ", (opcion: string) => {

    opcion = opcion.trim()

    if(opcion === "1"){
        rl.question("Ingrese nombre del producto: ", (nombre) => {
            rl.question("Ingrese precio: ", (precio) => {
                let p = new productoElectronico(nombre, Number(precio))
                p.mostrarInformacion()
                rl.close()
            })
        })
    }
    else if(opcion === "2"){
        rl.question("Ingrese nombre del producto: ", (nombre) => {
            rl.question("Ingrese precio: ", (precio) => {
                let p = new productoRopa(nombre, Number(precio))
                p.mostrarInformacion()
                rl.close()
            })
        })
    }
    else if(opcion === "3"){
        rl.question("Ingrese nombre del producto: ", (nombre) => {
            rl.question("Ingrese precio: ", (precio) => {
                let p = new productoAlimento(nombre, Number(precio))
                p.mostrarInformacion()
                rl.close()
            })
        })
    }
    else{
        console.log("Opcion invalida")
        rl.close()
    }

})