// Declaro de variables
let dinero = 0;
let opcionTransferencia = 0;
let transferencia = 1;
let i=0
let salir = false;
let cero = "Ingresa 0 para salir";
//Declaro de funciones
function numeroCalculo (num1, num2) {
    resultadoCalculo = num1 + num2;
    return resultadoCalculo;
}
function sinDinero (quiero, puedo, accion) {
    if (quiero > puedo){
        alert(`¡No puedes ${accion} mas dinero del que tienes!`);
    }
}
// Inicio
alert (`Bienvenido a su cartera personal!`);
while(salir!=true) {
    switch(i) {
        case 0:
            i = parseInt(prompt (`Elija una opción:
            0. Salir
            1. Ingresar dinero 
            2. Retirar dinero
            3. Siguiente-->`));
            if (i==0){
                salir=true;
            }
        break;
        case 1:
            let ingreso = 1;
            while (ingreso != 0) {
                ingreso = parseFloat(prompt(`Saldo actual: $${dinero}
                ¿Cuánto quieres ingresar?
                (${cero})`));
                if (ingreso < 0) {
                    alert (`¡No puedes retirar dinero aquí!`)
                }else {
                    dinero = numeroCalculo(dinero, ingreso);
                }
            }
            if (ingreso==0) {
                i = ingreso;
            }
        break;
        case 2:
            let egreso = 1;
            while (egreso != 0) {
                egreso = parseFloat(prompt(`Saldo actual: $${dinero}
                ¿Cuánto quieres retirar?
                (${cero})`));
                if (egreso < 0) {
                    alert (`ERROR. No puedes retirar números negativos.`)
                }else if (egreso < dinero){
                    dinero = numeroCalculo (dinero, -egreso);
                } else sinDinero(egreso, dinero, "retirar");
            }
            if (egreso==0) {
                i = egreso;
            }
        break;
        case 3:
            i = parseInt(prompt (`Elija una opción:
            0. <--Atrás
            4. Transferir dinero
            5. Calculadora personal 
            6. Siguiente-->`));
        break;
        case 4:
            let salirtransf = false;
            while (salirtransf!= true) {
                switch(opcionTransferencia) {
                    case 0:
                        opcionTransferencia = parseInt(prompt(`Elija una opción
                        1. Transferir por CBU
                        2. Transferir por alias
                        0. Salir`));
                        if (opcionTransferencia==0){
                            salirtransf=true;
                        }
                    break;
                    case 1:
                        let cbu = prompt(`Ingrese CBU
                        (${cero})`);
                        if (cbu == 0){
                            opcionTransferencia = 0;
                        }else {
                            transferencia = prompt(`Saldo actual: $${dinero}
                            ¿Cuánto quieres enviar a esta persona?
                            (${cero})`);
                            if (transferencia == 0){
                                opcionTransferencia = 0;
                            }else if (transferencia < dinero) {
                                numeroCalculo(dinero, -transferencia);
                                alert (`Has transferido $${transferencia} a la persona con CBU:${cbu}`);
                                opcionTransferencia = 0;
                            } else sinDinero(transferencia, dinero, "enviar");
                        }
                    break;
                    case 2:
                        let alias = prompt(`Ingrese CBU
                        (${cero})`);
                        if (alias == 0) {
                            opcionTransferencia = 0;
                        }else {
                            transferencia = prompt(`Saldo actual: $${dinero}
                            ¿Cuánto quieres enviar a esta persona?
                            (${cero})`);
                            if (transferencia == 0){
                                opcionTransferencia = 0;
                            }else if (transferencia < dinero) {
                                numeroCalculo(dinero, -transferencia);
                                alert (`Has transferido $${transferencia} a la persona con alias: ${alias}`);
                            }else sinDinero(transferencia, dinero, `enviar`);
                        }
                        opcionTransferencia = 0;
                    break;
                    default:
                        alert(`Esa no es una opcion. Intente de nuevo.`)
                        opcionTransferencia = 0;
                    break;
                }
            }
            if (salirtransf==true){
                i=3;
            }
        break;
        case 5:
            let salirCalc = false;
            let opcion=0;
            let resultado=0;
            while(salirCalc != true) {
                switch(opcion){
                    case 0:
                        opcion = parseFloat(prompt(`Ingrese una opción:
                        0. Salir
                        1. Suma
                        2. Resta
                        3. Multiplicar
                        4. Dividir
                        5. Raíz
                        6. Potencia`));
                        if (opcion == 0) {
                            salirCalc = true;
                        }
                    break;
                    case 1:
                        let cantidadSuma = parseInt(prompt(`¿Cuántos números estás sumando?
                        (${cero})`));
                        if (cantidadSuma == 0){
                            j = 0;
                        }else if (cantidadSuma < 0) {
                            alert (`ERROR. No puedes ingresar números negativos.`)
                            opcion = 1;
                        }else {
                            for(let j=1; j<=cantidadSuma; j++){
                                let num = parseFloat(prompt(`¿Cuál es el ${i}º número?`))
                                resultado = numeroCalculo(resultado, num);
                            }
                            alert(`El resultado es: ${resultado}`)
                            resultado=0;
                            opcion = parseInt(`Si quieres hacer otra suma, ingresa 1.
                            Si quieres salir al menú de cálculos, ingresa 0.`)
                        }
                    break;
                    case 2:
                        let cantidadResta = parseInt(prompt(`¿Cuántos números estás restando?
                        (${cero})`));
                    break;
                }
            }
            if (salirCalc == true) {
                i = 3;
            }
        break;
    }
}
