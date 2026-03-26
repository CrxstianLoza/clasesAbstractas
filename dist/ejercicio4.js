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
// Ejercicio 4
class Empleado {
}
class empleadoPorHoras extends Empleado {
    constructor(horas, pagoHora) {
        super();
        this.horas = horas;
        this.pagoHora = pagoHora;
    }
    calcularSalario() {
        return this.horas * this.pagoHora;
    }
}
class empleadoFijo extends Empleado {
    constructor(salarioMensual) {
        super();
        this.salarioMensual = salarioMensual;
    }
    calcularSalario() {
        return this.salarioMensual;
    }
}
class empleadoComision extends Empleado {
    constructor(ventas, porcentaje) {
        super();
        this.ventas = ventas;
        this.porcentaje = porcentaje;
    }
    calcularSalario() {
        return this.ventas * (this.porcentaje / 100);
    }
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("1. Empleado por horas");
console.log("2. Empleado fijo");
console.log("3. Empleado por comision");
rl.question("Seleccione tipo de empleado: ", (opcion) => {
    opcion = opcion.trim();
    if (opcion === "1") {
        rl.question("Ingrese horas trabajadas: ", (horas) => {
            rl.question("Ingrese pago por hora: ", (pago) => {
                let emp = new empleadoPorHoras(Number(horas), Number(pago));
                console.log("Salario: $" + emp.calcularSalario().toFixed(2));
                rl.close();
            });
        });
    }
    else if (opcion === "2") {
        rl.question("Ingrese salario mensual: ", (salario) => {
            let emp = new empleadoFijo(Number(salario));
            console.log("Salario: $" + emp.calcularSalario().toFixed(2));
            rl.close();
        });
    }
    else if (opcion === "3") {
        rl.question("Ingrese total de ventas: ", (ventas) => {
            rl.question("Ingrese porcentaje de comision: ", (porcentaje) => {
                let emp = new empleadoComision(Number(ventas), Number(porcentaje));
                console.log("Salario: $" + emp.calcularSalario().toFixed(2));
                rl.close();
            });
        });
    }
    else {
        console.log("Respuesta invialida");
        rl.close();
    }
});
//# sourceMappingURL=ejercicio4.js.map