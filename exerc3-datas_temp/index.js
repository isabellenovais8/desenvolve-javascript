/*
Neste exercício, você criará um temporizador de contagem regressiva que aceita uma data futura e conta o
tempo restante até essa data. O temporizador exibirá os dias, horas, minutos e segundos restantes e será
atualizado a cada segundo.

Passos:
*/

// 1 - Defina uma função para calcular o tempo restante até uma data futura: calcularTempoRestante(dataFutura)
function calcularTempoRestante(dataFutura) {
    const dataAtual = new Date().getTime();
    const diferenca = dataFutura - dataAtual;

    const segundosMinuto = 60 * 1000;
    const segundosHora = 60 * segundosMinuto;
    const segundosDia = 24 * segundosHora;

    const dias = Math.floor(diferenca / segundosDia);
    const horas = Math.floor((diferenca % segundosDia) / segundosHora);
    const minutos = Math.floor((diferenca % segundosHora) / segundosMinuto);
    const segundos = Math.floor((diferenca % segundosMinuto) / 1000);

    return {
        dias,
        horas,
        minutos,
        segundos
    };
}

// 2 - Defina uma função para atualizar o temporizador na tela: atualizarTemporizador()
function atualizarTemporizador() {
    const dataFutura = new Date("2024-12-31T23:59:59");
    const tempoRestante = calcularTempoRestante(dataFutura);

    document.getElementById('dias').innerText = `Dias ${tempoRestante.dias}`;
    document.getElementById('horas').innerText = `Horas ${tempoRestante.horas}`;
    document.getElementById('minutos').innerText = `Minutos ${tempoRestante.minutos}`;
    document.getElementById('segundos').innerText = `Segundos ${tempoRestante.segundos}`;
}

// 3 - Use setInterval para atualizar o temporizador a cada segundo.
const intervalo = setInterval(atualizarTemporizador, 1000);

// 4 - Manipule o objeto Date para calcular a diferença entre a data atual e a data futura.