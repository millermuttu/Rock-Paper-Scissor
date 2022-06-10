var arraylist = ['rock', 'paper', 'scissor'];

function computerplay(){
    var index = getRandomInt(3);
    return arraylist[index];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function singlegameresult(userinput, computerinput){
    var result = '';
    if (userinput=='rock'){
        switch(computerinput){
            case 'rock':
                result = "its a tie try again";
                break;
            case 'paper':
                result = "Lost!! Paper wins over Rock";
                break;
            case 'scissor':
                result = "Win!! Rock wins over Scissor";
                break;
        }
    }
    else if (userinput == 'paper'){
        switch(computerinput){
            case 'rock':
                result = "win!! Paper wins over Rock";
                break;
            case 'paper':
                result = "its a tie try again";
                break;
            case 'scissor':
                result = "lost!! Scissor wins over Paper";
                break;
        }
    }
    else{
        switch(computerinput){
            case 'rock':
                result = "lost!! Rock wins over Scissor";
                break;
            case 'paper':
                result = "win!! Scissor wins over Paper";
                break;
            case 'scissor':
                result = "its a tie try again";
                break;
        }
    }
    return result;
}

function play(e){
    console.log(e.target.id);
    userinput = e.target.id;
    computerinput = computerplay();
    result = singlegameresult(userinput, computerinput);

    var updateresult = document.getElementById("result")
    updateresult.innerText = result;
}

function btnhover(e){
    e.classList.add('btn:hover');
}

var btnRock = document.getElementById("rock");
btnRock.addEventListener('click', play);

var btnPaper = document.getElementById("paper");
btnPaper.addEventListener('click', play);

var btnScissor = document.getElementById("scissor");
btnScissor.addEventListener('click', play);

