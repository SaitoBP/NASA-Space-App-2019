var nameElement = document.getElementById('name');
var ageElement = document.getElementById('age');
var nextElement = document.getElementById('prox1')

var smallChoice = document.getElementById('small');
var mediumChoice = document.getElementById('medium');
var largeChoice = document.getElementById('large');

var estrelaElement1 = document.getElementById('sim1');
var estrelaElement2 = document.getElementById('nao1');

var distanciaElement = document.getElementById('distancia');
var aguaElement = document.getElementById('agua');

var planeta;

nextElement.addEventListener('click', saveData);

var tamanho;
var gasoso;
var estrela;
var distancia;
var agua;

function saveData(){
    nome = nameElement.value;
    idade = ageElement.value;
}
function tamanhoPequeno(){
    tamanho = smallChoice.innerText;
    console.log(tamanho);
}
function tamanhoMedio(){
    tamanho = mediumChoice.innerText;
    console.log(tamanho);
}
function tamanhoGrande(){
    tamanho = largeChoice.innerText;
    console.log(tamanho);
}
function estrelaMae1(){
    estrela = estrelaElement1.innerText;
    console.log(estrela);
}
function estrelaMae2(){
    estrela = estrelaElement2.innerText;
    console.log(estrela);
}
function distancia(){
    distancia = distanciaElement.value;
    console.log(distancia);
}
function agua(){
    agua = aguaElement.value;
    console.log(agua);
}
function renderPlaneta(){
    gasoso = JSON.parse(localStorage.getItem('save_resp'));
    if (gasoso == 'Sim') {
        //img planeta gás
    }
    else if (agua == 1) {
        //img planeta rocha
    }
    else if (agua == 2) {
        //img planeta agua+rocha
    }
    else if (agua == 3){
        //img planeta agua
    }
}