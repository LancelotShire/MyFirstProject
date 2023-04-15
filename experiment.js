let img=document.querySelector('.img');
let dots=document.querySelector('.dots');
let pic=document.querySelector('.pic');
var currentImage=0;
var index
let button1=document.getElementById("button1");
let button2=document.getElementById("button2");
let menu1=document.getElementById("menu1");
let menu2=document.getElementById("menu2");

button1.addEventListener('click',unfold1);
button2.addEventListener('click',unfold2);
function unfold1(){
    menu1.style.display="block";
    button1.removeEventListener('click',unfold1);
    button1.addEventListener('click',fold1);
}

function fold1(){
    menu1.style.display="none";
    menu2.style.display="none";
    button1.removeEventListener('click',fold1);
    button1.addEventListener('click',unfold1);
    button2.removeEventListener('click',fold2);
    button2.addEventListener('click',unfold2);
}

function unfold2(){
    menu2.style.display="block";
    button2.removeEventListener('click',unfold2);
    button2.addEventListener('click',fold2);
}

function fold2(){
    menu2.style.display="none";
    button2.removeEventListener('click',fold2);
    button2.addEventListener('click',unfold2);
}
// let arr=new Array(6);
// let el=document.querySelector('#elysia');
// let ap=document.querySelector('#aponia');
// let gl=document.querySelector('#glessio');
// let an=document.querySelector('#anniversary');
// let ki=document.querySelector('#kiana');
// let li=document.querySelector('#lisushang');
// arr[0]=el;
// arr[1]=ap;
// arr[2]=gl;
// arr[3]=an;
// arr[4]=ki;
// arr[5]=li;
let dot1=document.querySelector('.dot1');
let dot2=document.querySelector('.dot2');
let dot3=document.querySelector('.dot3');
let dot4=document.querySelector('.dot4');
let dot5=document.querySelector('.dot5');
let dot6=document.querySelector('.dot6');
let ar=[dot1,dot2,dot3,dot4,dot4,dot5,dot6];

moveto(currentImage);
var timer=setInterval(next,5000);
function next(){
    currentImage=currentImage+1;
    if(currentImage>5){
        currentImage=0;
    }
    moveto(currentImage);
}

dot1.addEventListener('click',turn0);
function turn0(){
    let index=0;
    moveto(index); 
}

dot2.addEventListener('click',turn1);
function turn1(){
    let index=1;
    moveto(index);
}

dot3.addEventListener('click',turn2);
function turn2(){
    let index=2;
    moveto(index);   
}

dot4.addEventListener('click',turn3);
function turn3(){
    let index=3;
    moveto(index);  
}

dot5.addEventListener('click',turn4);
function turn4(){
    let index=4;
    moveto(index);   
}

dot6.addEventListener('click',turn5);
function turn5(){
    let index=5;
    moveto(index);
}

function moveto(index){
    if(currentImage<=index){
      let width=pic.clientWidth;
      img.style.left=`-${index*(width+5)}px`;
    }
    if(currentImage>index){
        let width=pic.clientWidth;
        img.style.right=`-${index*(width+5)}px`;
    }
    currentImage=index;
    let dota=document.querySelector(`.dot${index+1}`);
    dot1.classList.remove("dotactive");
    dot2.classList.remove("dotactive");
    dot3.classList.remove("dotactive");
    dot4.classList.remove("dotactive");
    dot5.classList.remove("dotactive");
    dot6.classList.remove("dotactive");
    dota.classList.add("dotactive");
}




