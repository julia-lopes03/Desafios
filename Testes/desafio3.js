class heroiGenerico {
    constructor(nome,idade,tipo){
      this.nome=nome
      this.idade=idade
      this.tipo=tipo 
    }
    atacar()
    {
      let ataque = this.tipo
      switch(this.tipo){
        case 'guerreiro':
          ataque='espada'
          console.log('o'+this.tipo + ' atacou usando ' + ataque);
          break;
        case 'mago':
          ataque='magia'
          console.log('o'+this.tipo + ' atacou usando ' + ataque);
          break;
        case 'monge':
          ataque='artes marciais'
          console.log('o'+this.tipo + ' atacou usando ' + ataque);
          break;
        case 'ninja':
          ataque='shuriken'
          console.log(this.tipo+ ' atacou com ' + ataque);
          break;
      }
    }
  }
  let heroi=new heroiGenerico('Dio',30,'mago')
  heroi.atacar()



  class heroiGenerico {
    constructor(nome,idade,tipo){
      this.nome=nome
      this.idade=idade
      this.tipo=tipo 
    }
    atacar()
    {
      let i=0
      while(i<3){
      
     // Aqui você cria um While() e diz que ele vai durar até sua decisão ser algum número específico 
     // Agora cria um "menu" usando print() e pega um input desse print pra ser sua decisão
     // Cada um das opções pode ser uma casa classes e aí você escolhe qual vai atacar
     // E quando você quiser acabar, use a opção que encerra o loop do While()
      let ataque = this.tipo
      switch(this.tipo){
        case 'guerreiro':
          ataque='espada'
          console.log('o'+this.tipo + ' atacou usando ' + ataque);
          break;
        case 'mago':
          ataque='magia'
          console.log('o'+this.tipo + ' atacou usando ' + ataque);
          break;
        case 'monge':
          ataque='artes marciais'
          console.log('o'+this.tipo + ' atacou usando ' + ataque);
          break;
        case 'ninja':
          ataque='shuriken'
          console.log(this.tipo+ ' atacou com ' + ataque);
          break;
      }
      // Fecha o While nessa linha, não esquece de identar o código pra ficar bonitinho:)
    i++}
}
// Repete isso aqui com as outras classes de herói, vai ajudar na hora das decisões.
// Mas lembra de identificar eles de formas diferentes.
let heroi=new heroiMago('Dio',30,'mago')
heroi.atacar()

// Espero ter ajudado de alguma forma, isso vai deixar o código significativamente mais complexo
// Mas se lembre que isso faz parte da sua evolução
// Estou orgulhoso de você, meu amor <3
// (A parte opcional é a de fazer um menu, mas sem ela o While não funciona)
// (Caso não queira um loop infinito, usa um for() e coloca os parâmetros direitinho, depois fecha no menos ponto do While())
class heroiGenerico {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = this.tipo;
    switch (this.tipo) {
      case 'guerreiro':
        ataque = 'espada';
        console.log('o ' + this.tipo + ' atacou usando ' + ataque);
        break;
      case 'mago':
        ataque = 'magia';
        console.log('o ' + this.tipo + ' atacou usando ' + ataque);
        break;
      case 'monge':
        ataque = 'artes marciais';
        console.log('o ' + this.tipo + ' atacou usando ' + ataque);
        break;
      case 'ninja':
        ataque = 'shuriken';
        console.log(this.tipo + ' atacou com ' + ataque);
        break;
    }
  }
}

// Criando instâncias de cada tipo de herói
let guerreiro = new heroiGenerico('Guerreiro', 25, 'guerreiro');
let mago = new heroiGenerico('Mago', 30, 'mago');
let monge = new heroiGenerico('Monge', 35, 'monge');
let ninja = new heroiGenerico('Ninja', 28, 'ninja');

// Colocando um loop externo para executar o método atacar de cada herói três vezes
let herois = [guerreiro, mago, monge, ninja];
for (let i = 0; i < 1; i++) {
  for (let heroi of herois) {
    heroi.atacar();
  }
}