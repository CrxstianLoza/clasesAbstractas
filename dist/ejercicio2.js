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
// Ejercicio 2
class Vehiculo {
}
class Carro extends Vehiculo {
    mover() {
        console.log("sube y acelera el carro");
    }
}
class Bicicleta extends Vehiculo {
    mover() {
        console.log("sube y pedalea la bicicleta");
    }
}
class Motocicleta extends Vehiculo {
    mover() {
        console.log("Sube y acelera la moto");
    }
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("1. Carro");
console.log("2. Biclicleta");
console.log("3. Moto");
rl.question("Que vehiculo desea seleccionar?: ", (respuesta) => {
    respuesta = respuesta.toLowerCase().trim();
    if (respuesta == "carro" || respuesta == "1") {
        let carro = new Carro();
        carro.mover();
    }
    else if (respuesta == "biclicleta" || respuesta == "2") {
        let bici = new Bicicleta();
        bici.mover();
    }
    else if (respuesta == "moto" || respuesta == "3") {
        let moto = new Motocicleta();
        moto.mover();
    }
    else {
        console.log("Respuesta invialida");
    }
    rl.close();
});
//# sourceMappingURL=ejercicio2.js.map