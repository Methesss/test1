import{io} from 'socket.io-client';

const socket = io("http://localhost:3000/");
var pseudo: string | any[]

const pseudoInput = document.getElementById('pseudoInput')!
pseudoInput.addEventListener('input', changePseudoValue)

function changePseudoValue(event){
 pseudo = event.target.value;
 console.log(event)
}


const joinButton = document.getElementById('joinButton')!
joinButton.addEventListener("click", joinGame)

function joinGame(){
  if (pseudo.length < 1){
    alert("Veuillez renseigner votre pseudo");
  }
  else{
    socket.emit('joinGame', pseudo)

  }
}

socket.on('joinGameStatus', displayStatus)
function displayStatus(message: any){
console.log(message)
}

document.getElementById('ready')!.addEventListener("click", function()
