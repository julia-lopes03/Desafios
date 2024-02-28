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
          console.log('o '+this.tipo + ' atacou usando ' + ataque);
          break;
        case 'mago':
          ataque='magia'
          console.log('o '+this.tipo + ' atacou usando ' + ataque);
          break;
        case 'monge':
          ataque='artes marciais'
          console.log('o '+this.tipo + ' atacou usando ' + ataque);
          break;
        case 'ninja':
          ataque='shuriken'
          console.log('o ' +this.tipo+ ' atacou com ' + ataque);
          break;
      }
    }
  }
  let heroi=new heroiGenerico('Dio',30,'guerreiro')
  heroi.atacar()