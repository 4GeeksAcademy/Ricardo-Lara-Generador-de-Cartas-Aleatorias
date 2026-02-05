import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let icono = document.getElementById("icon");
  let icono2 = document.getElementById("icon2");
  let numero = document.getElementById("number");
  let btn = document.querySelector("button");

  let randNum = Math.floor(Math.random()*13);
  let randIcon = Math.floor(Math.random()*4);

  function selectNum(){
    if (randNum == 0){
      numero.innerText= "A"; 
    }
    else if (randNum <= 9){
      numero.innerText= randNum+1; 
    }
     else if (randNum==10){
      numero.innerText= "J";
     }
     else if (randNum==11){
      numero.innerText= "Q";
     }
     else {
      numero.innerText= "K";
     }
  }

  function selectIcon(){
    if (randIcon==0){
      icono.innerText="♦";
      icono2.innerText="♦";
      icono.style.color="red";
      icono2.style.color="red";
      numero.style.color="red";
    }
    else if (randIcon==1){
      icono.innerText="♥";
      icono2.innerText="♥";
      icono.style.color="red";
      icono2.style.color="red";
      numero.style.color="red";
    }
    else if (randIcon==2){
      icono.innerText="♠";
      icono2.innerText="♠";
      icono.style.color="black";
      icono2.style.color="black";
      numero.style.color="black";
    }
    else {
      icono.innerText="♣";
      icono2.innerText="♣";
      icono.style.color="black";
      icono2.style.color="black";
      numero.style.color="black";
    }
  }

  selectIcon();
  selectNum();

  btn.addEventListener("click", function (e){
    randNum = Math.floor(Math.random()*13);
    randIcon = Math.floor(Math.random()*4);
    selectIcon();
    selectNum();
  }
  )
};
