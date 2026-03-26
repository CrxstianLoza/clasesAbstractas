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
//Primer ejercicio 
class Animal {
}
class Perro extends Animal {
    hacerSonido() {
        console.log("Perro dice: guau");
    }
}
class Gato extends Animal {
    hacerSonido() {
        console.log("Gato dice: miau");
    }
}
class Vaca extends Animal {
    hacerSonido() {
        console.log("Vaca dice: muuu");
    }
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("1. Perro");
console.log("2. Gato");
console.log("3. Vaca");
rl.question("Que animal desea crear?: ", (respuesta) => {
    respuesta = respuesta.toLowerCase().trim();
    if (respuesta == "perro" || respuesta == "1") {
        let perro = new Perro();
        perro.hacerSonido();
    }
    else if (respuesta == "gato" || respuesta == "2") {
        let gato = new Gato();
        gato.hacerSonido();
    }
    else if (respuesta == "vaca" || respuesta == "3") {
        let vaca = new Vaca();
        vaca.hacerSonido();
    }
    else {
        console.log("Respuesta invialida");
    }
    rl.close();
});
//# sourceMappingURL=index.js.map