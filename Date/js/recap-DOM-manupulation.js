document.getElementById('apply-bg').addEventListener('click', function(){
    // console.log('apply bg button clicked')

    const friends = document.getElementsByClassName('friend');
    // console.log(friends)
    for(const friend of friends){
        console.log(friend)
        friend.style.background = 'gray';
    }
    
})

document.getElementById('center3rd').addEventListener('click', function(){
    // console.log('this is center button')
    const friend3rd = document.getElementById('Friend-3');
    // console.log(friend3rd)
    friend3rd.style.textAlign = 'center'
})

document.getElementById('adding').addEventListener('click', function(){
    console.log('this is adding button clicked')

    const friendsList = document.getElementById('friends-list');
    const createDiv = document.createElement('div');
    createDiv.classList.add('friend');
    createDiv.innerHTML = `
        <h3>Friend- 6 </h3>
        <p>Itaque quas debitis est repellat?</p>

    `
    friendsList.appendChild(createDiv);
})