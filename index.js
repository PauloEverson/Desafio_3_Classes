//Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

//- nome
//- idade
//- tipo (ex: guerreiro, mago, monge, ninja )

//além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

//- exibir a mensagem: "o {tipo} atacou usando {ataque}")
//- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
//- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

//se mago -> no ataque exibir (usou magia)
//se guerreiro -> no ataque exibir (usou espada)
//se monge -> no ataque exibir (usou artes marciais)
//se ninja -> no ataque exibir (usou shuriken)

//## Saída

//Ao final deve se exibir uma mensagem:

//- "o {tipo} atacou usando {ataque}"
//  ex: mago atacou usando magia
// guerreiro atacou usando espada


class Heroi{
    constructor(Nome,Idade,Tipo,ataqueTipo){
    this.Nome = Nome
    this.Idade = Idade
    this.Tipo = Tipo
    this.ataqueTipo = ataqueTipo
    }
    atacando(){
        console.log(`O ${this.Tipo} atacou usando ${this.ataqueTipo}`)
    }
}

let Guerreiro = new Heroi("","","Guerreiro","espada")
let Mago = new Heroi("","","Mago","magia")
let Monge = new Heroi("","","Monge","artes marciais")
let Ninja = new Heroi("","","Ninja","shuriken")

Guerreiro.atacando()
Mago.atacando()
Monge.atacando()
Ninja.atacando()