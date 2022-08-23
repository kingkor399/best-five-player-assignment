const playerArray = [];
function makedisabled(buttons){
    document.getElementById(buttons).disabled = true;
}
function display(playerName){
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

    const playerList = document.getElementById('best-player-select');
    const list = playerList.querySelectorAll('li');
    const element = list.length;
    const calculate = element  * perPlayerValue;

    const playerExpenses = document.getElementById('player-Expenses');
    const expensesString = playerExpenses.innerText;
    const expensesValue = parseFloat(expensesString);
    playerExpenses.innerText = calculate;
    perPlayerField.value = '';

})

document.getElementById('Total-Calculate-btn').addEventListener('click',function(){
    const managerExpenses = document.getElementById('manager-expenses');
    const mangerExpenString = managerExpenses.value;
    const managerExpenValue = parseFloat(mangerExpenString);
    managerExpenses.value = '';

    const coachExpenses = document.getElementById('coach-expenses');
    const coachExpenString = coachExpenses.value;
    const coachExpenValue = parseFloat(coachExpenString);
    coachExpenses.value = '';

    const playerExpenses = document.getElementById('player-Expenses');
    const expensesString = playerExpenses.innerText;
    const expensesValue = parseFloat(expensesString);
    
    const CalculateTotal = managerExpenValue + coachExpenValue + expensesValue;
    
    const TotalExpenses = document.getElementById('Total-Expenses');
    const TotalString = TotalExpenses.innerText;
    const TotalValue = parseFloat(TotalString);
    
    TotalExpenses.innerText = CalculateTotal;

})