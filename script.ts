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


const numeros = [10, 20, 30, 40, 50];
const valores = [10, 'Taxas', 30, 'Numero']


function maiorQue10(data: number[]){
  return data.filter((n)=> n > 10)
}

function filtrarValores(data: (string | number)[]){
  return data.filter((n)=> typeof n === 'number')
}


interface Cursos {
   nome: string;
    horas: number;
    aulas: number;
    gratuito: boolean;
    tags: string[];
    idAulas : number[];
    nivel: string;
}

async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const data = await response.json();
  mostrarCursos(data);
}

fetchCursos();

function mostrarCursos(cursos : Cursos[]) {

  
  cursos.forEach((curso)=>{
    let color = "red"
    if(curso.nivel === 'iniciante' ){
      color = "blue"
    }
    document.body.innerHTML += `
    <div>
      <h1>${curso.nome}</h1>
      <p>${curso.horas} horas</p>
      <p>Gratuito? ${curso.gratuito ? 'Gratuito' : 'Pago'} </p>
      <p>Tags: ${curso.tags.join(', ')} </p>
      <p>Numero de aulas: ${curso.idAulas.join(' | ')} </p>
      <p style="color: ${color}">Nivel: ${curso.nivel} </p>
    </div>
  `;

  })
  
}

// Estado dos elementos

// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button

// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button


// Estado dos elementos
// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button
// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button


const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event: MouseEvent) {
  const button = event.currentTarget;
  const nav = document.getElementById('nav');
  if (button instanceof HTMLElement && nav) {
    const active = nav.classList.contains('active');
    if (active) {
      nav.classList.remove('active');
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'Abrir Menu');
    } else {
      nav.classList.add('active');
      button.setAttribute('aria-expanded', 'true');
      button.setAttribute('aria-label', 'Fechar Menu');
    }
  }
}

btnMobile?.addEventListener('click', toggleMenu);