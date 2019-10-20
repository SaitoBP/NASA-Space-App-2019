// var nameElement = document.getElementById('name');
// var ageElement = document.getElementById('age');
// var nextElement = document.getElementById('prox1')

var smallChoice = document.getElementById('small');
var mediumChoice = document.getElementById('medium');
var largeChoice = document.getElementById('large');

var estrelaElement1 = document.getElementById('sim1');
var estrelaElement2 = document.getElementById('nao1');

var distanciaElement = document.getElementById('distancia');
var aguaElement = document.getElementById('agua');

var planeta;

//nextElement.addEventListener('click', saveData);

var tamanho;
var gasoso;
var estrela;
var distancia;
var agua;

function saveData() {
    nome = nameElement.value;
    idade = ageElement.value;
}
function tamanhoPequeno() {
    tamanho = smallChoice.innerText;
    flkty.next();
    flkty.next();
}
function tamanhoMedio() {
    tamanho = mediumChoice.innerText;
    flkty.next();
}
function tamanhoGrande() {

    tamanho = largeChoice.innerText;
    let content = document.createElement("div");
    content.className = "content";

    let title = document.createElement("h1");
    title.innerHTML = "O planeta é gasoso?";

    content.appendChild(title);

    let gasForm = document.createElement("div");
    gasForm.className = "form";

    var label_Y = document.createElement("h3");
    label_Y.setAttribute("class", "formYes");
    label_Y.setAttribute("id", "gasFormYes");
    label_Y.innerHTML = "Sim";

    label_Y.addEventListener('click', saveToStorageY);

    var label_N = document.createElement("h3");
    label_N.setAttribute("class", "formNo");
    label_N.setAttribute("id", "gasFormNo");
    label_N.innerHTML = "Não"

    gasForm.appendChild(label_Y);
    gasForm.appendChild(label_N);

    content.appendChild(gasForm)

    label_N.addEventListener('click', saveToStorageN);

    let cell = document.createElement("div");
    cell.className = "carousel-cell";

    cell.appendChild(content);

    flkty.insert(cell, 5);

    function saveToStorageN() {
        flkty.next();
    }
    function saveToStorageY() {
        gasoso = 'Sim';
        // flkty.remove("carousel-cell");
        flkty.selectCell(9, true, true);
        renderPlaneta();
        flkty.next();

    }

    flkty.next();
    flkty.next();

}

function estrelaMaeSim() {

    estrela = estrelaElement1.innerText;
    flkty.next();

}

function estrelaMaeNao() {

    estrela = estrelaElement2.innerText;
    flkty.next();
    flkty.next();

}

function distancia() {
    distancia = distanciaElement.value;
    console.log(distancia);
}
function agua() {
    agua = aguaElement.value;
    console.log(agua);
}
function renderPlaneta() {
    
    if (gasoso == 'Sim') {
        //img planeta gás
        var planet = document.createElement("img");
        planet.setAttribute('src', '../img/jupiter.svg');
        var planetaImagem = document.getElementById('planetaImagem');
        console.log(planetaImagem);

    }
    else if (agua == 1) {
        //img planeta rocha
    }
    else if (agua == 2) {
        //img planeta agua+rocha
    }
    else if (agua == 3) {
        //img planeta agua
    }
}