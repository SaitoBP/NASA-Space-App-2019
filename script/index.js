var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  pageDots: false,
  draggable: true
});

document.getElementById("userData").addEventListener("click", function(){
  let userName = document.getElementById("userName").value;
  console.log(userName);
})

let size = "";

document.getElementById("small").addEventListener("click",function(){
 // alert("Planeta pequeno");
});


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

<<<<<<< HEAD
  var label_Y = document.createElement("h3");
  label_Y.setAttribute("class", "formYes");
  label_Y.setAttribute("id", "gasFormYes");
  label_Y.innerHTML = "Sim";
  
  label_Y.addEventListener('click', saveToStorageY);

  var label_N = document.createElement("h3");
  label_N.setAttribute("class", "formNo");
  label_N.setAttribute("id", "gasFormNo");
=======
  let label_Y = document.createElement("h3");
  label_Y.setAttribute("class", "formYes");
  label_Y.innerHTML = "Sim";
  
  let label_N = document.createElement("h3");
  label_N.setAttribute("class", "formNo");
>>>>>>> 7ba53c5955a38a141eff7869591fe6edd8bb87db
  label_N.innerHTML = "Não"
  
  gasForm.appendChild(label_Y);
  gasForm.appendChild(label_N);
<<<<<<< HEAD
  
  content.appendChild(gasForm)
  
  label_N.addEventListener('click', saveToStorageN);
=======
  
  content.appendChild(gasForm)
>>>>>>> 7ba53c5955a38a141eff7869591fe6edd8bb87db

  let cell = document.createElement("div");
  cell.className = "carousel-cell";

  cell.appendChild(content);

  flkty.insert(cell, 5);
<<<<<<< HEAD
=======
  flkty.next();
>>>>>>> 7ba53c5955a38a141eff7869591fe6edd8bb87db
  flkty.next();
  flkty.next();
<<<<<<< HEAD
})
=======

  //console.log(document.getElementById("large"));
  
  function saveToStorageN(){
    var salvaEssaMerda = label_N.textContent;
    localStorage.setItem('save_resp', JSON.stringify(salvaEssaMerda))
  }
  function saveToStorageY(){
    var salvaEssaMerda2 = label_Y.textContent;
    localStorage.setItem('save_resp', JSON.stringify(salvaEssaMerda2));
  }

  
})
>>>>>>> 8327dcd52ce003814097dcd1fc12c5a464af9b65
