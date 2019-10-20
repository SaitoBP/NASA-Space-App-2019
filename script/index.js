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
})

document.getElementById("large").addEventListener("click", function(){
  size = "large";

  let content = document.createElement("div");
  content.className = "content";

  let title = document.createElement("h1");
  title.innerHTML = "O planeta é gasoso?";

  let form_Y = document.createElement("input");
  form_Y.setAttribute("type", "radio");
  let label_Y = document.createElement("h3");
  label_Y.innerHTML = "Sim";

  let form_N = document.createElement("input");
  form_N.setAttribute("type", "radio");
  let label_N = document.createElement("h3");
  label_N.innerHTML = "Não"
  
  content.appendChild(title);
  content.appendChild(form_Y);
  content.appendChild(label_Y);
  content.appendChild(form_N);
  content.appendChild(label_N);
  
  let cell = document.createElement("div");
  cell.className = "carousel-cell";

  cell.appendChild(content);

  flkty.insert(cell, 4);

  flkty.next();
})