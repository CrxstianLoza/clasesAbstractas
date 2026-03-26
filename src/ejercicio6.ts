import * as readline from "readline"

// Ejercicio 6 

abstract class notificacion{
    abstract enviar(): void
}

class notificacionEmail extends notificacion{
    correo: string
    mensaje: string

    constructor(correo: string, mensaje: string){
        super()
        this.correo = correo
        this.mensaje = mensaje
    }

    enviar(): void{
        console.log("Enviando email a " + this.correo)
        console.log("Mensaje: " + this.mensaje)
    }
}

class notificacionSMS extends notificacion{
    telefono: string
    mensaje: string

    constructor(telefono: string, mensaje: string){
        super()
        this.telefono = telefono
        this.mensaje = mensaje
    }

    enviar(): void{
        console.log("Enviando SMS al numero " + this.telefono)
        console.log("Mensaje: " + this.mensaje)
    }
}

class notificacionWhatsapp extends notificacion{
    telefono: string
    mensaje: string

    constructor(telefono: string, mensaje: string){
        super()
        this.telefono = telefono
        this.mensaje = mensaje
    }

    enviar(): void{
        console.log("Enviando WhatsApp al numero " + this.telefono)
        console.log("Mensaje: " + this.mensaje)
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("1. Email")
console.log("2. SMS")
console.log("3. WhatsApp")

rl.question("Seleccione tipo de notificacion: ", (opcion: string) => {

    opcion = opcion.trim()

    if(opcion === "1"){
        rl.question("Ingrese correo: ", (correo) => {
            rl.question("Ingrese mensaje: ", (mensaje) => {
                let n = new notificacionEmail(correo, mensaje)
                n.enviar()
                rl.close()
            })
        })
    }
    else if(opcion === "2"){
        rl.question("Ingrese numero de telefono: ", (telefono) => {
            rl.question("Ingrese mensaje: ", (mensaje) => {
                let n = new notificacionSMS(telefono, mensaje)
                n.enviar()
                rl.close()
            })
        })
    }
    else if(opcion === "3"){
        rl.question("Ingrese numero de telefono: ", (telefono) => {
            rl.question("Ingrese mensaje: ", (mensaje) => {
                let n = new notificacionWhatsapp(telefono, mensaje)
                n.enviar()
                rl.close()
            })
        })
    }
    else{
        console.log("Respuesta invialida")
        rl.close()
    }

})