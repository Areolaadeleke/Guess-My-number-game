'use strict'


const checkBtn = document.querySelector('.check');
const message = document.querySelector('.message');
const body = document.querySelector('body');
const number = document.querySelector('.number');
const again = document.querySelector('.again')



const secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20;

checkBtn.addEventListener('click', function(){
    const guesS = Number(document.querySelector('.guess').value);
    number.textContent = guesS


    if(!guesS){
        message.textContent= "No Number"
    }else if(guesS === secretNumber){
        message.textContent = "Correct Number"
        body.style.backgroundColor = 'yellowgreen'
    }else if (guesS > secretNumber){
        if(guesS > 1){
            message.textContent = "Too High"
            score = score - 1
            document.querySelector('.score').textContent = score;
        }else{
            message.textContent = "You Loss"
            document.querySelector('.score').textContent = 0;
        }

    }else if(guesS < secretNumber){
        if(guesS > 1){
             message.textContent = " To Low"
             score = score - 1;
             document.querySelector('.score').textContent = score
             
        }else{
            message.textContent = "You Loss"
            document.querySelector('.score').textContent = 0;
        }

       
    }
})








