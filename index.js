
let computerNumber
let userNumbers = []
let tentativas = 0
let maxTentativas = 10

function novoJogo() {
    window.location.reload()
}

//INIT SIGNIFICA A INICIALIZAÇÃO DE TUDO
function init()  {
  computerNumber = Math.floor(Math.random() * 100 + 1) 
  console.log(computerNumber)
}

//FUNÇÃO DE CAPTURAR O NUMERO INSERIDO NO INPUT E INCLUINDO NO GUESS(O NUMERO INSERIDO NO INPUT)
function compareNumbers() {
  const userNumber = Number(document.getElementById('inputBox').value)//CAPTURANDO O NUMERO INSERIDO NO INPUT, TRANSFORMANDO EM NUMERO COM A TAG "NUMBER" E INSERINDO DENTRO DA VARIAVEL "userNumber"
    userNumbers.push(userNumber)
    document.getElementById('guesses').innerHTML = userNumbers

    //SE O NUMERO INSERIDO NO INPUT FOR MAIOR DO QUE O NUMERO QUE O COMP GEROU
    if(tentativas < maxTentativas) { 
        if(userNumber > computerNumber) { 
            document.getElementById('textOutput').innerHTML = 'O número inserido é maior do que o número correto'
            document.getElementById('inputBox').value = ''
            tentativas++//toda vez que for inserido um numero ele soma
            document.getElementById('attempts').innerHTML = tentativas
        } 

        //SE O NUMERO INSERIDO NO INPUT FOR MENOR DO QUE O NUMERO QUE O COMP GEROU
        else if(userNumber < computerNumber) {
            document.getElementById('textOutput').innerHTML = 'O número inserido é menor'
            document.getElementById('inputBox').value = ''
            tentativas++//toda vez que for inserido um numero ele soma
            document.getElementById('attempts').innerHTML = tentativas
        }

        //SE O NUMERO INSERIDO FOR O CORRETO
        else {
            document.getElementById('textOutput').innerHTML = 'Parabéns, você acertou o número'
            tentativas++//toda vez que for inserido um numero ele soma
            document.getElementById('attempts').innerHTML = tentativas
            document.getElementById('inputBox').setAttribute('readonly', 'readonly')
        }
    }
        else{
            document.getElementById('textOutput').innerHTML = 'Você ultrapassou o número de tentativas, o número correto seria ' + '' + computerNumber
            document.getElementById('inputBox').setAttribute('readonly', 'readonly')
        }
}

