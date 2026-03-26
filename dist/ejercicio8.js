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
// Ejercicio
class producto {
}
class productoElectronico extends producto {
    constructor(nombre, precio) {
        super();
        this.nombre = nombre;
        this.precio = precio;
    }
    calcularPrecioFinal() {
        return this.precio * 1.15;
    }
    mostrarInformacion() {
        console.log("Producto: " + this.nombre);
        console.log("Precio base: $" + this.precio.toFixed(2));
        console.log("Precio final: $" + this.calcularPrecioFinal().toFixed(2));
    }
}
class productoRopa extends producto {
    constructor(nombre, precio) {
        super();
        this.nombre = nombre;
        this.precio = precio;
    }
    calcularPrecioFinal() {
        return this.precio * 0.9;
    }
    mostrarInformacion() {
        console.log("Producto: " + this.nombre);
        console.log("Precio base: $" + this.precio.toFixed(2));
        console.log("Precio final: $" + this.calcularPrecioFinal().toFixed(2));
    }
}
class productoAlimento extends producto {
    constructor(nombre, precio) {
        super();
        this.nombre = nombre;
        this.precio = precio;
    }
    calcularPrecioFinal() {
        return this.precio * 1.05;
    }
    mostrarInformacion() {
        console.log("Producto: " + this.nombre);
        console.log("Precio base: $" + this.precio.toFixed(2));
        console.log("Precio final: $" + this.calcularPrecioFinal().toFixed(2));
    }
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("1. Producto electronico");
console.log("2. Producto ropa");
console.log("3. Producto alimento");
rl.question("Seleccione tipo de producto: ", (opcion) => {
    opcion = opcion.trim();
    if (opcion === "1") {
        rl.question("Ingrese nombre del producto: ", (nombre) => {
            rl.question("Ingrese precio: ", (precio) => {
                let p = new productoElectronico(nombre, Number(precio));
                p.mostrarInformacion();
                rl.close();
            });
        });
    }
    else if (opcion === "2") {
        rl.question("Ingrese nombre del producto: ", (nombre) => {
            rl.question("Ingrese precio: ", (precio) => {
                let p = new productoRopa(nombre, Number(precio));
                p.mostrarInformacion();
                rl.close();
            });
        });
    }
    else if (opcion === "3") {
        rl.question("Ingrese nombre del producto: ", (nombre) => {
            rl.question("Ingrese precio: ", (precio) => {
                let p = new productoAlimento(nombre, Number(precio));
                p.mostrarInformacion();
                rl.close();
            });
        });
    }
    else {
        console.log("Opcion invalida");
        rl.close();
    }
});
//# sourceMappingURL=ejercicio8.js.map