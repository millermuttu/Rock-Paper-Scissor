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
                result = "its a tie";
                break;
            case 'paper':
                result = "win!! paper wins over rock";
                break;
            case 'scissor':
                result = "lost!! scissor wins over rock";
                break;
        }
    }
    else if (userinput == 'paper'){
        switch(computerinput){
            case 'rock':
                result = "win!! paper wins over rock";
                break;
            case 'paper':
                result = "its a tie";
                break;
            case 'scissor':
                result = "lost!! scissor wins over paper";
                break;
        }
    }
    else{
        switch(computerinput){
            case 'rock':
                result = "lost!! rock wins over scissor";
                break;
            case 'paper':
                result = "win!! Scissor wins over paper";
                break;
            case 'scissor':
                result = "its a tie";
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

