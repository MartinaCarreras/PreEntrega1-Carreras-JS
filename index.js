alert (`Bienvenido a su cartera personal!`);
let dinero = 0;
let ingreso = 1;
let egreso = 1;
let opcionTransferencia = 1;
for(let i=0; i<=9; i++) {
    switch(i) {
        case 0:
            i = parseInt(prompt (`Elija una opción:
            1. Ingresar dinero 
            2. Retirar dinero
            3. Siguiente-->`))-1;
        break;
        case 1:
            while (ingreso != 0) {
                ingreso = parseFloat(prompt(`   Saldo actual: $${dinero}
                ¿Cuánto quieres ingresar?
                (Ingrese 0 para salir)`));
                dinero = dinero + ingreso;
            }
            if (ingreso==0) {
                i=-1;
            }
        break;
        case 2:
            while (egreso != 0) {
                egreso = parseFloat(prompt(`Saldo actual: $${dinero}
                ¿Cuánto quieres retirar?
                (Ingrese 0 para salir)`));
                if (egreso <= dinero) {
                    dinero = dinero - egreso;
                }else if(egreso > dinero) {
                    alert(`¡No puedes retirar mas dinero del que tienes!`);
                }
            }
            if (ingreso==0) {
                i=-1;
            }
        break;
        case 3:
            i = parseInt(prompt (`Elija una opción:
            0. <--Atrás
            4. Transferir dinero
            5. Calculadora de gastos 
            6. Siguiente-->`))-1;
        break;
        case 4:
            while(opcionTransferencia != 0){
                opcionTransferencia = prompt(`Elija una opción
                1. Transferir por CBU
                2. Transferir por alias
                0. Salir`);
                switch(opcionTransferencia) {
                    case 1:
                        let CBU = prompt(`Ingrese CBU`);
                        let transferencia = prompt(`Saldo actual: $${dinero}
                        ¿Cuánto le quiere mandar a esta persona?
                        (Ingrese 0 para salir)`);

                    break;
                }
            }
        break;
    }
}
