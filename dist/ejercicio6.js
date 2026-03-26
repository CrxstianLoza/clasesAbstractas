"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
// Ejercicio 6 
class notificacion {
}
class notificacionEmail extends notificacion {
    constructor(correo, mensaje) {
        super();
        this.correo = correo;
        this.mensaje = mensaje;
    }
    enviar() {
        console.log("Enviando email a " + this.correo);
        console.log("Mensaje: " + this.mensaje);
    }
}
class notificacionSMS extends notificacion {
    constructor(telefono, mensaje) {
        super();
        this.telefono = telefono;
        this.mensaje = mensaje;
    }
    enviar() {
        console.log("Enviando SMS al numero " + this.telefono);
        console.log("Mensaje: " + this.mensaje);
    }
}
class notificacionWhatsapp extends notificacion {
    constructor(telefono, mensaje) {
        super();
        this.telefono = telefono;
        this.mensaje = mensaje;
    }
    enviar() {
        console.log("Enviando WhatsApp al numero " + this.telefono);
        console.log("Mensaje: " + this.mensaje);
    }
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("1. Email");
console.log("2. SMS");
console.log("3. WhatsApp");
rl.question("Seleccione tipo de notificacion: ", (opcion) => {
    opcion = opcion.trim();
    if (opcion === "1") {
        rl.question("Ingrese correo: ", (correo) => {
            rl.question("Ingrese mensaje: ", (mensaje) => {
                let n = new notificacionEmail(correo, mensaje);
                n.enviar();
                rl.close();
            });
        });
    }
    else if (opcion === "2") {
        rl.question("Ingrese numero de telefono: ", (telefono) => {
            rl.question("Ingrese mensaje: ", (mensaje) => {
                let n = new notificacionSMS(telefono, mensaje);
                n.enviar();
                rl.close();
            });
        });
    }
    else if (opcion === "3") {
        rl.question("Ingrese numero de telefono: ", (telefono) => {
            rl.question("Ingrese mensaje: ", (mensaje) => {
                let n = new notificacionWhatsapp(telefono, mensaje);
                n.enviar();
                rl.close();
            });
        });
    }
    else {
        console.log("Respuesta invialida");
        rl.close();
    }
});
//# sourceMappingURL=ejercicio6.js.map