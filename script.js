const prompt = require('prompt-sync')();

function avaliaHeroi() {
    var heroi = {
        nome: prompt('Digite o nome do herói: '),
        xp: prompt('Digite a quantidade de XP do herói: ')
    };

    let nivel = '';

    if (heroi.xp < 1000) {
        nivel = 'Ferro';
    } else if (heroi.xp <= 2000) {
        nivel = 'Bronze';
    } else if (heroi.xp <= 5000) {
        nivel = 'Prata';
    } else if (heroi.xp <= 7000) {
        nivel = 'Ouro';
    } else if (heroi.xp <= 8000) {
        nivel = 'Platina';
    } else if (heroi.xp <= 9000) {
        nivel = 'Ascendente';
    } else if (heroi.xp <= 10000) {
        nivel = 'Importal';
    } else {
        nivel = 'Radiante';
    }

    console.log(` `);
    console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivel}.`);
    console.log(` `);
};

function verificaContinuar() {
    continua = prompt('Deseja avaliar outro herói? (S/N) ');
        if (continua.toUpperCase() === 'S') {
            return true;
        } else if (continua.toUpperCase() === 'N') {
            return false;
        } else {
            console.log('Opção inválida. Digite apenas S ou apenas N.');
            return verificaContinuar();
        }
}

function main() {
    let continuar = true;

    while(continuar) {
        avaliaHeroi();
        continuar = verificaContinuar();
    }
    console.log('');
    console.log('------------------');
    console.log('| Até a próxima! |');
    console.log('------------------');
}

main();
