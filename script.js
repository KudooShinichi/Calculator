const buttonEl = document.querySelectorAll("button");

const inputValue=document.getElementById('display')

for(let i=0;i<buttonEl.length;i++){
    buttonEl[i].addEventListener('click',()=>{
        const buttonValue=(buttonEl[i].textContent)
        if(buttonValue==='C'){
            clearResult();
        }
        else if(buttonValue==='='){
            calculateResult();
        }
        else{
            appendValue(buttonValue);
        }
    })
}

function clearResult(){
    inputValue.value=""
}

function calculateResult(){
    inputValue.value = eval(inputValue.value);

}

function appendValue(buttonValue){
    inputValue.value+=buttonValue;
}