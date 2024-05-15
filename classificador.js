const prompt = require('prompt-sync')();

let heroi = []

let listNivel = [
    ["Ferro", 0, 1.000],
    ["Bronze", 1.001, 2.000],
    ["Prata", 2.001, 5.000],
    ["Ouro", 5.001, 7.000],
    ["Platina", 7.001, 8.000],
    ["Ascendente", 8.001, 9.000],
    ["Imortal", 9.001, 10.000],
    ["Radiante", 10.001, 99.999],
]

heroi.nome = prompt("Informe o NOME do Héroi: ");
heroi.xp = prompt("Informe o XP do Héroi: ");

while (heroi.xp < 0) {
    console.log("--- Informe um valor positivo ---");
    heroi.xp = prompt("Informe o XP do Héroi: ");
}

if (heroi) {

    for (let index = 0; index < listNivel.length; index++) {
        if (heroi.xp >= listNivel[index][1] && (heroi.xp <= listNivel[index][2] || listNivel.length == index + 1)) {
            heroi.nivel = listNivel[index][0];
        }
    }
}

console.log("O Herói de nome " + heroi.nome + " está no nível de " + heroi.nivel);
