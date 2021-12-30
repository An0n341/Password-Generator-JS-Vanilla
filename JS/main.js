// -g variable

const generateBtn = document.querySelector('.btn-generate-pass');

const passwordTxt = document.getElementById('password');

const inputLength = document.querySelector('#length');


let defaultCaracters = 'qwertyuioplkjhgfdsazxcvbnm'

// generate random password

generateBtn.addEventListener('click', generatePassword);

function generatePassword(){
    let password = '';

    for(e = 0; e < inputLength.value; e++){
        let generatePassword = Math.floor(Math.random() * defaultCaracters.length)
        password += defaultCaracters.charAt(generatePassword)
        // password += defaultCaracters.charAt(Math.floor(Math.random() * defaultCaracters.length))

    }

    passwordTxt.textContent = password
}

let caractersOb = {
    uppercase: 'QWERTYUIOPASDFGHJKLZXCVBNM',
    lowercase: 'òàùèì',
    number: '0123456789',
    symbol: '!@#$%^&*()_+?><:{}[]',
    default: 'qwertyuioplkjhgfdsazxcvbnm'
}


let lowerBtn = document.getElementById('lower-btn'),
    upperBtn = document.getElementById('upper-btn'),
    numberBtn = document.getElementById('number-btn'),
    symbolBtn = document.getElementById('symbol-btn');

lowerBtn.onchange = () => {
    lowerBtn.classList.toggle('lowercase')

    if(lowerBtn.classList.contains('lowercase')){
        defaultCaracters += caractersOb.lowercase

    }else{
        defaultCaracters = caractersOb.default

    }

}

upperBtn.onchange = () => {
    upperBtn.classList.toggle('uppercase')

    if(upperBtn.classList.contains('uppercase')){
        defaultCaracters += caractersOb.uppercase

    }else{
        defaultCaracters = caractersOb.default

    }
}

numberBtn.onchange = () => {
    numberBtn.classList.toggle('number')

    if(numberBtn.classList.contains('number')){
        defaultCaracters += caractersOb.number

    }else{
        defaultCaracters = caractersOb.default

    }
}

symbolBtn.onchange = () => {
    symbolBtn.classList.toggle('symbol')

    if(symbolBtn.classList.contains('symbol')){
        defaultCaracters += caractersOb.symbol

    }else{
        defaultCaracters = caractersOb.default

    }

}

const copyBtn = document.querySelector('.bi-clipboard-check');

passwordTxt.textContent = ''

copyBtn.addEventListener('click', ()=>{
    if(passwordTxt.textContent === ''){
        alert('generate password for use this function')

    }else{
        navigator.clipboard.writeText(passwordTxt.textContent)
        alert('you are copy this password: ' + passwordTxt.textContent)

        passwordTxt.textContent = ''

    }

})