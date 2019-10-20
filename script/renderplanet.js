// -------------- Puxar nome do usuario -------------- //
document.getElementById("userData").addEventListener("click", () => {
    let userName = document.getElementById("userName").value
    let userDataName = document.getElementById("userDataName");
    userDataName.innerHTML = userName;
})
// --------------------------------------------------- //

// ------------ Botões primeira pergunta ------------ //

// ------------------------------------------------- //

var smallChoice = document.getElementById('small');
var mediumChoice = document.getElementById('medium');
var largeChoice = document.getElementById('large');

var estrelaElement1 = document.getElementById('sim1');
var estrelaElement2 = document.getElementById('nao1');

var distanciaElement = document.getElementById('distancia');
var aguaElement = document.getElementById('agua');

var planeta;

var tamanho;
var gasoso;
var estrela;
var distancia;
var agua;

function tamanhoPequeno() {
    tamanho = smallChoice.innerText;
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
        flkty.selectCell(3, true, true);
    }
    function saveToStorageY() {
        gasoso = 'Sim';
        flkty.selectCell(7, true, true);
        renderPlaneta();
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
    flkty.selectCell(5, true, true);

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
        var planetaImagem = document.getElementById("planetaImagem");
        var x = document.createElement("IMG");
        x.setAttribute("src", "../img/jupiter.svg");
        x.setAttribute("width", "304");
        x.setAttribute("alt", "Jupiter");
        planetaImagem.appendChild(x);

    }
    else if (agua == 1) {
        //img planeta rocha
        flkty.next();
        var planetaImagem = document.getElementById("planetaImagem");
        var x = document.createElement("IMG");
        x.setAttribute("src", "../img/Saturno.svg");
        x.setAttribute("width", "304");
        x.setAttribute("alt", "saturno");
        planetaImagem.appendChild(x);
        
    }
    else if (agua == 2) {
        //img planeta agua+rocha
        flkty.next();
        var planetaImagem = document.getElementById("planetaImagem");
        var x = document.createElement("IMG");
        x.setAttribute("src", "../img/terra.svg");
        x.setAttribute("width", "304");
        x.setAttribute("alt", "terra");
        planetaImagem.appendChild(x);
    }
    else if (agua == 3) {
        //img planeta agua
        flkty.next();
        var planetaImagem = document.getElementById("planetaImagem");
        var x = document.createElement("IMG");
        x.setAttribute("src", "../img/uranus.svg");
        x.setAttribute("width", "304");
        x.setAttribute("alt", "uranus");
        planetaImagem.appendChild(x);
    }
}