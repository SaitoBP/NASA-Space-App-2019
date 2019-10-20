var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  pageDots: false,
  draggable: true
});


let size = "";

document.getElementById("small").addEventListener("click",function(){
  alert("Planeta pequeno");
});
console.log(document.getElementById("small"));


document.getElementById("medium").addEventListener("click",  function(){
  // alert("Planeta médio");
  size = "medium"
  flkty.next();
  flkty.next();
})

document.getElementById("large").addEventListener("click", function(){
  size = "large";

  let content = document.createElement("div");
  content.className = "content";

  let title = document.createElement("h1");
  title.innerHTML = "O planeta é gasoso?";

  content.appendChild(title);

  let gasForm = document.createElement("div");
  gasForm.className = "form";

  let label_Y = document.createElement("h3");
  label_Y.setAttribute("class", "formYes");
  label_Y.innerHTML = "Sim";
  
  let label_N = document.createElement("h3");
  label_N.setAttribute("class", "formNo");
  label_N.innerHTML = "Não"
  
  gasForm.appendChild(label_Y);
  gasForm.appendChild(label_N);
  
  content.appendChild(gasForm)

  let cell = document.createElement("div");
  cell.className = "carousel-cell";

  cell.appendChild(content);

  flkty.insert(cell, 5);
  flkty.next();
  flkty.next();
})
