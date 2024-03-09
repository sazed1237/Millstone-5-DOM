
// console.log('this is app js file')

function getPin(){
    const pin = ganaretePin();
    const pinString = pin + '';

    if(pinString.length ===4){
        return pin
    }
    else{

        return getPin()
    }
}


function ganaretePin(){
   const generateRandom =  Math.round(Math.random()*10000); 
    // console.log(generateRandom)
    return generateRandom;
}

document.getElementById('generate-btn').addEventListener('click', function(){
    // console.log('this is ganarete button')

    const pin = getPin();
    console.log(pin);

    const ganaretePinDisplayField = document.getElementById('pin-display');
    ganaretePinDisplayField.value = pin;

})


function enteredKeyAction(){

    const KeyNumber = event.target.innerText
    // console.log(KeyNumber)
    const displayEnterPinElement =  document.getElementById('typed-number')
    const previousEnterPin =  displayEnterPinElement.value;

    if(isNaN(KeyNumber)){
        if(KeyNumber === 'C'){
             displayEnterPinElement.value = '';
            // return clear;
        }
        else if(KeyNumber === '<'){
            const digits = previousEnterPin.split('')
            digits.pop()
            const remainingDigits = digits.join('')
            displayEnterPinElement.value = remainingDigits;

        }
    }
    else{
        
            const currentPin = previousEnterPin + KeyNumber;
            displayEnterPinElement.value = currentPin;

    }

}




document.getElementById('calculator').addEventListener('click', function(event){
    enteredKeyAction()
    
})