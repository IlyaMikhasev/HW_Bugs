
const widthstr =getComputedStyle(desctop).width;
const width = +widthstr.substring(0,widthstr.indexOf('px'));
const heightstr =getComputedStyle(desctop).height;
const height = +heightstr.substring(0,heightstr.indexOf('px'));
let widthBugs = 50;
let countBugs = 5;
let intervalTime = 600;
const label = document.querySelector('#label');
let labelText = "«Catch the Bugs»\teasy difficalty";
label.innerText = labelText;
const replay = document.querySelector('#replay');
replay.addEventListener(('click'),()=>{
    countBugs = 5;
})
const btnEasy = document.querySelector('#easy');
btnEasy.addEventListener(('click'),()=>{
    label.innerText = "«Catch the Bugs»\teasy difficalty";
    widthBugs = 50;
    intervalTime = 600;
})
const btnNormal = document.querySelector('#normal');
btnNormal.addEventListener(('click'),()=>{
    label.innerText = "«Catch the Bugs»\tnormal difficalty";
    widthBugs = 40;
    intervalTime = 500;
})
const btnHard = document.querySelector('#hard');
btnHard.addEventListener(('click'),()=>{
    label.innerText = "«Catch the Bugs»\thard difficalty";
    widthBugs = 30;
    intervalTime = 400;
})
function printBugs(){
    let bug = document.createElement('img');
    bug.src = 'images/США.png';
    bug.style.position = 'absolut';
    bug.style.width = widthBugs +'px';
    bug.style.left = Math.round(Math.random()*(width-widthBugs))+'px';
    bug.style.top = Math.round(Math.random()*(height-widthBugs))+'px';
    desctop.appendChild(bug);
    bug.addEventListener('click',e=>{
        countBugs--;
        e.target.remove();
    });    
}
setInterval(()=>{
    desctop.replaceChildren();
    for(let i =0;i<countBugs;i++){
        printBugs();}
},intervalTime);
