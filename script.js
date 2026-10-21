"use strict";
const produto = "Livro";
const preco = 200;
const carro = {
    marca: "Audi",
    portas: 4
};
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
const input = document.querySelector('input');
const total = localStorage.getItem('total');
if (input && total) {
    input.value = total;
    calcularGanho(Number(input.value));
}
function calcularGanho(value) {
    const p = document.querySelector('p');
    if (p) {
        p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
    }
}
function totalMudou() {
    if (input) {
        localStorage.setItem('total', input.value);
        calcularGanho(Number(input.value));
    }
}
if (input) {
    input.addEventListener('keyup', totalMudou);
}
function toNumber(a) {
    if (typeof a === 'number' || typeof a === 'string') {
        return a;
    }
    else if (typeof a === 'string') {
        return Number(a);
    }
    else {
        throw new Error("value deve ser diferente de numero ou string");
    }
}
console.log(toNumber('3'));
async function fetchProduct() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    showProduct(data);
}
fetchProduct();
function showProduct(data) {
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
const valores = [10, 'Taxas', 30, 'Numero'];
function maiorQue10(data) {
    return data.filter((n) => n > 10);
}
function filtrarValores(data) {
    return data.filter((n) => typeof n === 'number');
}
async function fetchCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const data = await response.json();
    mostrarCursos(data);
}
fetchCursos();
function mostrarCursos(cursos) {
    cursos.forEach((curso) => {
        let color = "red";
        if (curso.nivel === 'iniciante') {
            color = "blue";
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
    });
}
