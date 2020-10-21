document.querySelector("button").addEventListener("click", function(){
  var num1 = Math.random()*6 +1  ;
  var num2 = Math.random()*6 +1;
num1= Math.floor(num1);
num2= Math.floor(num2);
  document.querySelector(".hStyle2").textContent=num1;
  document.querySelector(".hStyle1").textContent=num2;

  var audio = new Audio('Pop.mp3');

  if (num1>num2){
  audio.play();
    document.querySelector("p").textContent="Player # 1 is the WINNER";

  }

  else if (num1<num2){
    audio.play();
    document.querySelector("p").textContent="Player # 2 is the WINNER";
  }

  else   document.querySelector("p").textContent="There is NO winner";

 });
