import * as readline from "readline";

// Ejercicio 3

abstract class Figura{
    abstract calcularArea(): number

    abstract calcularPerimetro(): number
}


class Cuadrado extends Figura {
    lado: number

    constructor(lado: number) {
        super()
        this.lado = lado
    }

    calcularArea(): number {
        return this.lado * this.lado
    }

    calcularPerimetro(): number {
        return 4 * this.lado
    }
}

class Rectangulo extends Figura {
    base: number
    altura: number
    
    constructor(base: number, altura: number) {
        super()
        this.base = base
        this.altura = altura
    }

    calcularArea(): number {
        return this.base * this.altura
    }

    calcularPerimetro(): number {
        return 2 * (this.base + this.altura)
    }
}


class Circulo extends Figura {
    radio: number

    constructor(radio: number) {
        super()
        this.radio = radio
    }

    calcularArea(): number {
        return Math.PI * this.radio * this.radio
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.radio
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


console.log("1. Cuadrado")
console.log("2. Rectangulo")
console.log("3. Circulo")

rl.question("Elige una figura: ", (opcion: string) => {

    opcion = opcion.trim()

    if(opcion === "1") {
        rl.question("Ingrese el lado en cm: ", (lado) => {
            let figura = new Cuadrado(Number(lado))
            console.log("area: " + figura.calcularArea().toFixed(2) + " cm")
            console.log("Perimetro: " + figura.calcularPerimetro().toFixed(2) + " cm")
            rl.close()
        });
    }
    else if(opcion === "2") {
        rl.question("Ingrese la base en cm: ", (base) => {
            rl.question("Ingrese la altura en cm: ", (altura) => {
                let figura = new Rectangulo(Number(base), Number(altura))
                console.log("Area: " + figura.calcularArea().toFixed(2) + " cm")
                console.log("Perimetro: " + figura.calcularPerimetro().toFixed(2) + " cm")
                rl.close()
            });
        });
    }
    else if(opcion === "3") {
        rl.question("Ingrese el radio en cm: ", (radio) => {
            let figura = new Circulo(Number(radio))
            console.log("Area: " + figura.calcularArea().toFixed(2) + " cm")
            console.log("Perimetro: " + figura.calcularPerimetro().toFixed(2) + " cm")
            rl.close()
        });
    }
    else{
        console.log("Respuesta invialida")
        rl.close()
    }

})
