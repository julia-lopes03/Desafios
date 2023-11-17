let numeros = resultado(12, 6);
function resultado(vitorias, derrotas) {
let saldoDeRankeadas = vitorias - derrotas;
let nivel=saldoDeRankeadas;
for (let i=0;i<=200;i++){
    saldoDeRankeadas+=1;
}  
switch (true) {
    case saldoDeRankeadas < 10:
        nivel = 'Ferro';
        console.log('O Herói tem de saldo de '+ saldoDeRankeadas +' vitórias e está no nível de '+nivel)
        break;
    case saldoDeRankeadas >= 11 && saldoDeRankeadas <= 20:
        nivel = 'Bronze';
        console.log('O Herói tem de saldo de '+ saldoDeRankeadas +' vitórias e está no nível de '+nivel);
        break;
    case saldoDeRankeadas >= 21 && saldoDeRankeadas <= 50:
        nivel = 'Prata';
        console.log('O Herói tem de saldo de '+ saldoDeRankeadas +' vitórias e está no nível de '+nivel);
        break;
    case saldoDeRankeadas >= 51 && saldoDeRankeadas <= 80:
        nivel = 'Ouro';
        console.log('O Herói tem de saldo de '+ saldoDeRankeadas+ ' vitórias e está no nível de '+nivel);
        break;
    case saldoDeRankeadas >= 81 && saldoDeRankeadas <= 90:
        nivel = 'Diamante';
        console.log('O Herói tem de saldo de '+ saldoDeRankeadas+' vitórias e está no nível de '+nivel);
        break;
    case saldoDeRankeadas >= 91 && saldoDeRankeadas <= 100:
        nivel = 'Lendário';
        console.log('O Herói tem de saldo de '+ saldoDeRankeadas+' vitórias e está no nível de '+nivel);
        break;
    case saldoDeRankeadas >= 101:
        nivel = 'Imortal';
        console.log('O Herói tem de saldo de '+ saldoDeRankeadas+' vitórias e está no nível de '+nivel);
        break;
}
    return saldoDeRankeadas;
}