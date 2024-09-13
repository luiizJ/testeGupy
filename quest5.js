// Função para simular o controle dos interruptores e lâmpadas
function identificarInterruptores() {

    let lampadas = {
        A: "desligada", 
        B: "desligada",
        C: "desligada"
    };

    let interruptores = {
        A: "desligado",
        B: "desligado",
        C: "desligado"
    };

    interruptores.A = "ligado";
    lampadas.A = "quente";

    setTimeout(() => {
        interruptores.A = "desligado";
        lampadas.A = "desligada";
        interruptores.B = "ligado";
        lampadas.B = "acesa";
        let resultado = identificarLamps(lampadas, interruptores);
        console.log(resultado);
    }, 5000);
}

function identificarLamps(lampadas, interruptores) {
    let resultados = {};

    for (let lampada in lampadas) {
        if (lampadas[lampada] === "acesa") {
            resultados[lampada] = "Interruptor B";
        } else if (lampadas[lampada] === "quente") {
            resultados[lampada] = "Interruptor A";
        } else {
            resultados[lampada] = "Interruptor C";
        }
    }

    return resultados;
}

identificarInterruptores();
