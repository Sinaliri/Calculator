let displayBox=document.querySelector(".display");
let btnList=document.querySelectorAll(".show-display");
// console.log(btnList)
btnList.forEach(item =>{
    item.addEventListener("click",showDisplay)
});
function showDisplay(event){
    const x=event.target.innerText;
    if(displayBox.innerHTML==0){
        return displayBox.innerHTML=x;
    }
    return displayBox.innerHTML +=x;
}
function calculate(){
let result = displayBox.innerText;
displayBox.innerText=eval(result);
}
function clearALL(){
    displayBox.innerText=0;
    }
function clearLast(){
    let text=displayBox.innerText;
    if(text.length === 1){
        displayBox.innerText=0;
    }
    else{
        displayBox.innerText=text.substring(0,text.length - 1);
    }
    }

document.querySelector(".calculate").addEventListener("click",calculate);
document.querySelector(".clear-all").addEventListener("click",clearALL);
document.querySelector(".clear-last").addEventListener("click",clearLast);