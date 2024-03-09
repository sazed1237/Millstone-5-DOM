


document.getElementById('phone-increasing-btn').addEventListener('click', function(){
    // console.log('plus button clicked')
    const newIncreasingNum = increasingDecreasing('phone-input-field',true)
    indiVidualItemTotalPrice(true, newIncreasingNum, 'phone-total-price')

    calculatingSubTotal()

})
document.getElementById('phone-Decreasing-btn').addEventListener('click', function(){
    // console.log('plus button clicked')
    const newDecreasingNum = increasingDecreasing('phone-input-field', false)
    indiVidualItemTotalPrice(true,newDecreasingNum, 'phone-total-price')

    calculatingSubTotal()
})

document.getElementById('case-increasing-btn').addEventListener('click', function(){
    // console.log('plus button clicked')
    const newIncreasingNum = increasingDecreasing('case-input-field', true)
    indiVidualItemTotalPrice(false, newIncreasingNum, 'case-Total-Price')

    calculatingSubTotal()
})
document.getElementById('case-decreasing-btn').addEventListener('click', function(){
    // console.log('plus button clicked')
    const newDecreasingNum = increasingDecreasing('case-input-field', false)
    indiVidualItemTotalPrice(false, newDecreasingNum, 'case-Total-Price')

    calculatingSubTotal()
})






