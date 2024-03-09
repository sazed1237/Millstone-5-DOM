function increasingDecreasing(getElementID, isIncressDcress ){
    const increasingDecreassInputField = document.getElementById(getElementID);
    const increasingDecreassInputString = increasingDecreassInputField.value
    const PreviousincreasingDecreassInput = parseInt(increasingDecreassInputString)
    

    let getNewNumber;
    if(isIncressDcress ===true){

         getNewNumber = PreviousincreasingDecreassInput + 1;
    }
    else{
         getNewNumber = PreviousincreasingDecreassInput - 1;
    }
    increasingDecreassInputField.value = getNewNumber;
    return getNewNumber;

}

function indiVidualItemTotalPrice(isPrice, getNewNumber, getElementID){

    let itemPrice;
    if(isPrice === true){
        itemPrice = getNewNumber * 1219;
    }
    else{
        itemPrice = getNewNumber * 59;
    }
    const totalItemPriceElement = document.getElementById(getElementID)
    totalItemPriceElement.innerText = itemPrice;
}


function getTextElementValueById(getElementID){
    const itemPriceTotalElement = document.getElementById(getElementID);
    const itemPriceTotalString = itemPriceTotalElement.innerText;
    const itemPriceTotal = parseInt(itemPriceTotalString);
    return itemPriceTotal;
}

function setTextElementValueById(getElementID, value){
    const subTotalElement = document.getElementById(getElementID);
    subTotalElement.innerText = value;
}


function calculatingSubTotal(){
    const phoneTotalElement = getTextElementValueById('phone-total-price')
    const caseTotalElement = getTextElementValueById('case-Total-Price')

    const subTotal = phoneTotalElement + caseTotalElement;
    console.log(subTotal)
    setTextElementValueById('total-subtotal', subTotal)



    const texAmountString = (subTotal * 0.1).toFixed(2)
    const texAmount = parseFloat(texAmountString);
    setTextElementValueById('total-tax', texAmount)


    const finalTotal = subTotal + texAmount;
    setTextElementValueById('final-total', finalTotal)
}