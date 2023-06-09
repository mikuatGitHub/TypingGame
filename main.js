'use strinc';{

//slider
const slider= document.getElementById("slider");
const sliderout= document.getElementById("sliderout");

slider.addEventListener('input',()=>{
  sliderout.textContent= slider.value;
})

//btn
const btn= document.getElementById("btn");
const display= document.getElementById("display");

//image
const kaiju=document.getElementById("kaiju");
const banzai=document.getElementById("banzai");

//文字表示を更新する関数
const letters= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let characters=[];
const uppercheck= document.getElementById("upper-check");


//文字セット
function setchar(){
  set++;
  //大文字追加設定
  if(uppercheck.checked === true){
    letters.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
  }

  //文字列の取り出し
  for(let i=0; i<slider.value; i++){
    characters+= letters[Math.floor(Math.random() * letters.length)];
  }
  display.textContent= characters;
}

//クリアしてから文字セット
function changechar(){
  loc= 0;
  characters= [];
  //5回目終了後
  if(set === 6){
    result();
    return;
  }
  setchar();
}

function result(){
  elapsedTime= ((Date.now() - startTime)/1000).toFixed(1);
  display.textContent= `finish! ${elapsedTime}sec`;
  kaiju.classList.add("none");
  banzai.classList.remove("none");
  
  btn.disabled= false;
  btn.classList.remove("disabled");
  btn.textContent= "Retry"
  set= 0;
}


//処理
let set= 0;
let startTime;
let elapsedTime;

btn.addEventListener('click',()=>{
  startTime= Date.now();
  //btn無効化
  btn.disabled= true;
  btn.classList.add("disabled");
  btn.textContent= "fight!";
  //最初のdisplay表示
  setchar();
  kaiju.classList.remove("change","none");
  banzai.classList.add("none")
})

let loc= 0;
document.addEventListener('keydown',(e)=>{
  if(e.key !== characters[loc]){
    return;
  }
  
  display.textContent= '_'.repeat(loc+1) + characters.substring(loc+1);
  loc++;
  if(loc === characters.length){
    changechar();
    kaiju.classList.add("change");
  }
})

}