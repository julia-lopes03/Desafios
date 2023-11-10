let nomeDoPersonagem='julia';
let xp=0;
let nivel;
for (let i=0;i<=10;i++){
  xp+=500;
}
switch(true){
  case xp<=1000:
    nivel='ferro';
    break
  case xp>=1001 && xp<=2000:
    nivel='bronze';
    break
  case xp<=2001 && xp<=5000:
    nivel='prata';
    break
  //reparei que não havia classificação pra 5001<=xp<=6000,então criei a classificação diamante :)
  case xp >= 5001 && xp <= 6000:
    nivel = 'diamante';
    break
  case xp >= 6001 && xp < 7000:
    nivel = 'Ouro';
    break
  case xp >= 7001 && xp <= 8000:
    nivel = 'Platina';
    break
  case xp >= 8001 && xp <= 9000:
    nivel = 'Ascendente';
    break
  case xp >= 9001 && xp <= 10000:
    nivel = 'Imortal';
    break
  case xp > 10001:
    nivel = 'Radiante';
    break
}
console.log('O Herói de nome '+nomeDoPersonagem+' está no nível '+nivel+' e tem '+xp+' de XP.');
