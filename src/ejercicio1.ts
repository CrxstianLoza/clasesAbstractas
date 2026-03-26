import * as readline from "readline";

//Primer ejercicio 

abstract class Animal{
    abstract hacerSonido(): void
}

class Perro extends Animal{
    hacerSonido(): void {
        console.log("Perro dice: guau")
    }
}

class Gato extends Animal{
    hacerSonido(): void {
        console.log("Gato dice: miau")
    }
}

class Vaca extends Animal{
    hacerSonido(): void {
        console.log("Vaca dice: muuu")
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("1. Perro")
console.log("2. Gato")
console.log("3. Vaca")
rl.question("Que animal desea crear?: ", (respuesta: string)=>{

    respuesta = respuesta.toLowerCase().trim()

    if (respuesta == "perro" || respuesta == "1"){
        let perro = new Perro()
        perro.hacerSonido()
    }
    else if (respuesta == "gato"|| respuesta == "2"){
        let gato = new Gato()
        gato.hacerSonido()
    }
    else if (respuesta == "vaca"|| respuesta == "3"){
        let vaca = new Vaca()
        vaca.hacerSonido()
    }
    else{
        console.log("Respuesta invialida")
    }
    rl.close();
})
