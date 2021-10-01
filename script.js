const equipes = [
  {nome: "Time Azul", pontos: 25},
  {nome: "Time Vermelho", pontos: 16},
  {nome: "Time Verde", pontos: 47},
  {nome: "Time Amarelo", pontos: 39}
];

function equipesOrdenadas(a,b){
  return b.pontos - a.pontos;
}

equipes.sort(equipesOrdenadas);

let tabelaAtual = "";

for(let i=0; i < equipes.length ; i++ ){
  let posicao = i+1;
  tabelaAtual = tabelaAtual + posicao + " | " + equipes[i].nome + " - " + equipes[i].pontos + " pts <br>" ;
}

document.getElementById("demo").innerHTML = tabelaAtual;
