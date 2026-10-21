const produto: string  = "Livro";
const preco: number  = 200;


const carro:{
    marca: string;
    portas: number
} = {
    marca:"Audi",
    portas: 4
}

function normalizarTexto(texto: string) {
  return texto.trim().toLowerCase();
}


const input = document.querySelector('input');

const total = localStorage.getItem('total');
if(input && total){
    input.value = total;
    calcularGanho(Number(input.value));

}

function calcularGanho(value: number) {
  const p = document.querySelector('p');
  if(p){
     p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
  }
}

function totalMudou() {
    if(input){
     localStorage.setItem('total',input. value);
     calcularGanho(Number(input.value));
    }
  
}

if(input){
   input.addEventListener('keyup', totalMudou);
}



function toNumber(a :number | string) {
    if( typeof a === 'number' || typeof a === 'string'){
         return a;
    }else if( typeof a === 'string'){
        return Number(a)
    }else{
        throw new Error("value deve ser diferente de numero ou string")
    }
}
console.log(toNumber('3'));


interface Empresa {
    nome: string;
    fundacao: number;
    pais: string;
}


interface Produto  {
    nome: string;
    preco: number;
    descricao: string;
    garantia: string;
    seguroAcidentes: boolean;
    empresaFabricante : Empresa;
    empresaMontadora: Empresa;
}



async function fetchProduct() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const data = await response.json();
  showProduct(data);
}

fetchProduct();

function showProduct(data: Produto) {
  document.body.innerHTML += `
    <div>
      <h2>${data.nome}</h2>
      <p> R$ ${data.preco}</p>
      <p>${data.descricao}</p>
      <p>Possui Garantia? ${data.garantia ? 'Possui' : 'Nao possui'}</p>
      <p>Possui Seguro? ${data.seguroAcidentes ? 'Possui' : 'Nao possui'}</p>
      <h2>Empresa Fabricante</h2>
      <p>${data.empresaFabricante.nome}</p>
      <p> Ano de fundação: ${data.empresaFabricante.fundacao}</p>
      <p>Pais de origem${data.empresaFabricante.pais}</p>

      <h2>Empresa Montadora</h2>
      <p>${data.empresaMontadora.nome}</p>
      <p> Ano de fundação: ${data.empresaMontadora.fundacao}</p>
      <p>Pais de origem: ${data.empresaMontadora.pais}</p>
    </div>
  `;
}
