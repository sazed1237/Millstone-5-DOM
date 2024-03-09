
function increasDcreasingQty(elementId, isIncresDcress){
    const inputNumberElement = document.getElementById(elementId)
    const inputNumberElementString = inputNumberElement.value 
    const inputNumber = parseInt(inputNumberElementString) ;
    // console.log(inputNumber);

    let getNewNumber;
    if(isIncresDcress === true){
        getNewNumber = inputNumber + 1;
    }
    else{
        getNewNumber = inputNumber - 1;
    }
    // console.log(increasingQty)
    inputNumberElement.value = getNewNumber;
    return getNewNumber;
}


// individual item total
function individualItemTotalPrice(isPrice, getNewNumber, elementId){

    let itemPrice;
    if(isPrice === true){
        itemPrice = getNewNumber * 1219;
    }
    else{
        itemPrice = getNewNumber * 59;
    }

    
    const itemTotalPiceElement = document.getElementById(elementId)
    itemTotalPiceElement.innerText = itemPrice;

    return itemPrice;
}



function getTextElementValueById(elementId){
    const itemPriceTotalElement = document.getElementById(elementId);
    const itemPriceTotalString = itemPriceTotalElement.innerText;
    const itemPriceTatal = parseInt(itemPriceTotalString);
    return itemPriceTatal;
    
}


function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal(){
    const phoneTotalElement = getTextElementValueById('phone-total-price')
    const caseTotalElement = getTextElementValueById('case-Total-Price')

    const subTotal = phoneTotalElement + caseTotalElement;
    console.log(subTotal)
    setTextElementValueById('total-subtotal', subTotal);

    
    // tax calculating

    const taxAmountString = (subTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('total-tax', taxAmount)


    const finalTotalAmount = subTotal + taxAmount;
    setTextElementValueById('final-total', finalTotalAmount)


}