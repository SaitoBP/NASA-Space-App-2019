var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  prevNextButtons: false,
  pageDots: false,
  draggable: true
});

var i = 0;
var txt = "3.. 2... 1... Vamos!";
var speed = 0.95;

function typeWriter() {
  if (i < txt.length) {
      document.getElementById("regressiveCount").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
  }
}