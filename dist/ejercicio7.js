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
// Ejercicio 7
class transporte {
}
class taxi extends transporte {
    constructor(distancia) {
        super();
        this.distancia = distancia;
    }
    calcularCosto() {
        return this.distancia * 1.5;
    }
}
class autobus extends transporte {
    constructor(distancia) {
        super();
        this.distancia = distancia;
    }
    calcularCosto() {
        return this.distancia * 0.5;
    }
}
class uber extends transporte {
    constructor(distancia) {
        super();
        this.distancia = distancia;
    }
    calcularCosto() {
        return this.distancia * 1.2;
    }
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("1. Taxi");
console.log("2. Autobus");
console.log("3. Uber");
rl.question("Seleccione transporte: ", (opcion) => {
    opcion = opcion.trim();
    if (opcion === "1") {
        rl.question("Ingrese la distancia en km: ", (distancia) => {
            let t = new taxi(Number(distancia));
            console.log("Costo: $" + t.calcularCosto().toFixed(2));
            rl.close();
        });
    }
    else if (opcion === "2") {
        rl.question("Ingrese la distancia en km: ", (distancia) => {
            let t = new autobus(Number(distancia));
            console.log("Costo: $" + t.calcularCosto().toFixed(2));
            rl.close();
        });
    }
    else if (opcion === "3") {
        rl.question("Ingrese la distancia en km: ", (distancia) => {
            let t = new uber(Number(distancia));
            console.log("Costo: $" + t.calcularCosto().toFixed(2));
            rl.close();
        });
    }
    else {
        console.log("Respuesta invialida");
        rl.close();
    }
});
//# sourceMappingURL=ejercicio7.js.map