

function getPin(){
const pin = ganaretePin();
const pinString = pin + '';

if(pinString.length === 4){
    return pin;
}
else{
    return getPin();
}
}


function ganaretePin(){
const random = Math.round(Math.random()*10000)
return random;
}



document.getElementById('generate-btn').addEventListener('click', function(){
    // console.log('ganarete button clicked')

    const pin = getPin();
    // console.log(pin)

    const displayPinganareted = document.getElementById('pin-display');
    displayPinganareted.value = pin;
})




document.getElementById('calculator').addEventListener('click', function(event){
    const keyNumber = event.target.innerText;

    const displayKeyNumbers = document.getElementById('typed-number');
    const previousDisplayNumber = displayKeyNumbers.value;

    
    
    if(isNaN(keyNumber)){
        if(keyNumber === 'C'){
            displayKeyNumbers.value = '';
        }
        else if(keyNumber === '<'){
            const digits = previousDisplayNumber.split('')
            digits.pop()
            const remainingDigits = digits.join('')
            displayKeyNumbers.value = remainingDigits;
            // console.log(digits)
            
        }
    }
    else{
        const newDisplayNumber = previousDisplayNumber + keyNumber;
        displayKeyNumbers.value = newDisplayNumber;
    }


})

document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log('submit button clicked')


    const displayPinganareted = document.getElementById('pin-display');
    const newDisplayPin = displayPinganareted.value; 
    
    const typedPinInputField = document.getElementById('typed-number');
    const typedPin = typedPinInputField.value;

    const pinCorrect = document.getElementById('pin-matched');
    const pinIncorrect = document.getElementById('pin-incorrect');

    if(newDisplayPin === typedPin){
        // console.log('pin is match')
        pinCorrect.style.display = 'block'
        pinIncorrect.style.display = 'none'

    }
    else{
        // console.log('pin is  not  match')
        pinIncorrect.style.display = 'block'
        pinCorrect.style.display = 'none'

    }
})