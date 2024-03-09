



// phone item

document.getElementById('phone-increasing-btn').addEventListener('click', function(){
    // console.log('plus button clicked')
    const newIncreasQty =  increasDcreasingQty('phone-input-field', true)

    individualItemTotalPrice(true, newIncreasQty , 'phone-total-price')
    calculateSubTotal()
 
})

document.getElementById('phone-Decreasing-btn').addEventListener('click', function(){
    // console.log('minus button clicked')
    const newDecreasQty = increasDcreasingQty('phone-input-field', false);

    individualItemTotalPrice(true, newDecreasQty, 'phone-total-price')
    calculateSubTotal()

})


// Casing item

document.getElementById('case-increasing-btn').addEventListener('click', function(){
    // console.log('plus button clicked')
    const newIncreasQty = increasDcreasingQty('case-input-field', true)
    individualItemTotalPrice(false, newIncreasQty , 'case-Total-Price')
    calculateSubTotal()

 
})

document.getElementById('case-decreasing-btn').addEventListener('click', function(){
    // console.log('minus button clicked')
    const newDecreasQty = increasDcreasingQty('case-input-field', false);
    individualItemTotalPrice(false, newDecreasQty, 'case-Total-Price')
    calculateSubTotal()

})









