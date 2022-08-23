const playerArray = [];

function display(playerName){
    console.log(playerName);
    const playerSelect = document.getElementById('best-player-select');
    playerSelect.innerHTML = '';
    for (i=0; i < playerName.length; i++){
        const name = playerArray[i].player;

        const li = document.createElement('li');
        li.innerText = name;
        playerSelect.appendChild(li);
    }
}

function playerSelect(element){
    const player = element.parentNode.children[0].innerText;
    
    const plyaerobj = {player: player};
    playerArray.push(plyaerobj);

    document.getElementById('total-selected-player').innerText = playerArray.length;
    display(playerArray);
}

document.getElementById('calculate-btn').addEventListener('click',function(){
    const perPlayerField = document.getElementById('per-player-field');
    const perPlayerString = perPlayerField.value;
    const perPlayerValue = parseFloat(perPlayerString);
    

})