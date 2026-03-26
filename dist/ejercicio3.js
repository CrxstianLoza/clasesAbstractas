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
// Ejercicio 3
class Figura {
}
class Cuadrado extends Figura {
    constructor(lado) {
        super();
        this.lado = lado;
    }
    calcularArea() {
        return this.lado * this.lado;
    }
    calcularPerimetro() {
        return 4 * this.lado;
    }
}
class Rectangulo extends Figura {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }
    calcularArea() {
        return this.base * this.altura;
    }
    calcularPerimetro() {
        return 2 * (this.base + this.altura);
    }
}
class Circulo extends Figura {
    constructor(radio) {
        super();
        this.radio = radio;
    }
    calcularArea() {
        return Math.PI * this.radio * this.radio;
    }
    calcularPerimetro() {
        return 2 * Math.PI * this.radio;
    }
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("1. Cuadrado");
console.log("2. Rectangulo");
console.log("3. Circulo");
rl.question("Elige una figura: ", (opcion) => {
    opcion = opcion.trim();
    if (opcion === "1") {
        rl.question("Ingrese el lado en cm: ", (lado) => {
            let figura = new Cuadrado(Number(lado));
            console.log("area: " + figura.calcularArea().toFixed(2) + " cm");
            console.log("Perimetro: " + figura.calcularPerimetro().toFixed(2) + " cm");
            rl.close();
        });
    }
    else if (opcion === "2") {
        rl.question("Ingrese la base en cm: ", (base) => {
            rl.question("Ingrese la altura en cm: ", (altura) => {
                let figura = new Rectangulo(Number(base), Number(altura));
                console.log("Area: " + figura.calcularArea().toFixed(2) + " cm");
                console.log("Perimetro: " + figura.calcularPerimetro().toFixed(2) + " cm");
                rl.close();
            });
        });
    }
    else if (opcion === "3") {
        rl.question("Ingrese el radio en cm: ", (radio) => {
            let figura = new Circulo(Number(radio));
            console.log("Area: " + figura.calcularArea().toFixed(2) + " cm");
            console.log("Perimetro: " + figura.calcularPerimetro().toFixed(2) + " cm");
            rl.close();
        });
    }
    else {
        console.log("Respuesta invialida");
        rl.close();
    }
});
//# sourceMappingURL=ejercicio3.js.map