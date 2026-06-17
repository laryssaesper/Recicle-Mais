//pega data e transforma em html dentro do <p>
const Today = new Date();
document.getElementById("DataHoje").innerHTML = Today.toLocaleDateString("pt-br");

//pega dia da semana de 0 a 6
const weekday = Today.getDay();
const Aviso = document.getElementById("Coleta");

//avisa se tem coleta baseado no dia da semana
if (weekday == 2 || weekday == 4 || weekday == 6) {
    Aviso.innerHTML = 'Dia de Coleta';
} else {
    Aviso.innerHTML = 'Não é Dia de Coleta';
}