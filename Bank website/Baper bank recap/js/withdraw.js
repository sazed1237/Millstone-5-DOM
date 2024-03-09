// console.log('this is withdraw js')


document.getElementById('btn-withdraw').addEventListener('click', function(){



    const withdrawInputField = document.getElementById('withdraw-input-field');
    const newInputWithdrawString = withdrawInputField.value;
    const newInputWithdraw = parseFloat(newInputWithdrawString);

    // console.log(typeof newInputWithdraw)

    withdrawInputField.value = '';
    
    if(isNaN(newInputWithdraw)){
        alert('Please enter a valid number')
        return;
    }


    const totalWithdrawElement = document.getElementById('total-withdraw');
    const previoustotalWithdrawString = totalWithdrawElement.innerText;
    const previoustotalWithdraw = parseFloat(previoustotalWithdrawString);

    // console.log(totalWithdrawElement.innerText);



    
    const totalBalanceElement = document.getElementById('total-balance');
    const previoustotalBalanceString = totalBalanceElement.innerText;
    const previoustotalBalance = parseFloat(previoustotalBalanceString);
    
    
    
    if(newInputWithdraw > previoustotalBalance){
        alert('bap er bank a ato taka nai')
        return;
    }


    const newTotalWithdraw = previoustotalWithdraw + newInputWithdraw;
    totalWithdrawElement.innerText = newTotalWithdraw;


    const newTotalBalance = previoustotalBalance - newInputWithdraw;
    totalBalanceElement.innerText = newTotalBalance;


});