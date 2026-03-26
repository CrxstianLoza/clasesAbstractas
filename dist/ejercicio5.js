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
// Ejercicio 5
class pago {
}
class pagoEfectivo extends pago {
    constructor(monto) {
        super();
        this.monto = monto;
    }
    procesarPago() {
        console.log("Pago en efectivo realizado por $" + this.monto.toFixed(2));
    }
}
class pagoTarjeta extends pago {
    constructor(monto, numero) {
        super();
        this.monto = monto;
        this.numero = numero;
    }
    procesarPago() {
        console.log("Pago con tarjeta realizado por $" + this.monto.toFixed(2));
        console.log("Tarjeta terminada en " + this.numero.slice(-4));
    }
}
class pagoTransferencia extends pago {
    constructor(monto, cuenta) {
        super();
        this.monto = monto;
        this.cuenta = cuenta;
    }
    procesarPago() {
        console.log("Transferencia realizada por $" + this.monto.toFixed(2));
        console.log("Cuenta destino: " + this.cuenta);
    }
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("1. Pago en efectivo");
console.log("2. Pago con tarjeta");
console.log("3. Transferencia bancaria");
rl.question("Seleccione tipo de pago: ", (opcion) => {
    opcion = opcion.trim();
    if (opcion === "1") {
        rl.question("Ingrese el monto: ", (monto) => {
            let p = new pagoEfectivo(Number(monto));
            p.procesarPago();
            rl.close();
        });
    }
    else if (opcion === "2") {
        rl.question("Ingrese el monto: ", (monto) => {
            rl.question("Ingrese numero de tarjeta: ", (numero) => {
                let p = new pagoTarjeta(Number(monto), numero);
                p.procesarPago();
                rl.close();
            });
        });
    }
    else if (opcion === "3") {
        rl.question("Ingrese el monto: ", (monto) => {
            rl.question("Ingrese numero de cuenta: ", (cuenta) => {
                let p = new pagoTransferencia(Number(monto), cuenta);
                p.procesarPago();
                rl.close();
            });
        });
    }
    else {
        console.log("Respuesta invialida");
        rl.close();
    }
});
//# sourceMappingURL=ejercicio5.js.map