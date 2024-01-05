class hero {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
}

let elvis = new hero("Elvis", 20, "ninja")
let bento = new hero("Bento", 36, "mago")
let luna = new hero("Luna", 25, "monge")
let lua = new hero("Lua", 37, "guerreiro")

let herois = [
  elvis,
  bento,
  luna,
  lua
]

ataques(herois)

function ataques(heroes) {
  for (const hero of heroes) {
    atacar(hero)
  }
}

function atacar(hero) {
  let ataque

  if (hero.tipo == "mago") {
    ataque = "magia"
  }  else if (hero.tipo == "guerreiro") {
    ataque = "espada"
  } else if (hero.tipo == "monge") {
    ataque = "artes marciais"
  } else if (hero.tipo == "ninja") {
    ataque = "shuriken"
  }



  console.log("O " + hero.tipo + " atacou usando " + ataque)
}