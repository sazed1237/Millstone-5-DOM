// console.log('this is deposit js')

document.getElementById('btn-deposit').addEventListener('click', function(){
    // console.log('clicked deposit button')

    const depositInputField = document.getElementById('deposit-input-field');
    const depositInputString = depositInputField.value;
    const newDepositAmount = parseFloat(depositInputString);
    // console.log( newDepositAmount);

    depositInputField.value = '';

    if(isNaN(newDepositAmount)){
        alert('please Enter a valid number')
        return;
    }


    const totalDepositElemete = document.getElementById('total-deposit');
    const previousTotalDepositString = totalDepositElemete.innerText;
    const previousTotalDeposit = parseFloat(previousTotalDepositString);


    const newTotalDeposit = previousTotalDeposit + newDepositAmount;
    totalDepositElemete.innerText = newTotalDeposit;




    const totalBalanceElement = document.getElementById('total-balance');
    const previoustotalBalanceString = totalBalanceElement.innerText;
    const previoustotalBalance = parseFloat(previoustotalBalanceString);
    // console.log(typeof previoustotalBalance)



    const newTotalBalance = previoustotalBalance + newDepositAmount;
    totalBalanceElement.innerText = newTotalBalance;
})