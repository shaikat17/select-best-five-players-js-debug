// select all dom
const buttons = document.querySelectorAll('#card_btn .btn');
const selectedPlayer = document.getElementById('selected');


// Button click and selected player update
function addPlayer(playerName){
    const li = document.createElement('li');
    li.innerText = playerName;
    selectedPlayer.appendChild(li);
}

for(const button of buttons){
    button.addEventListener('click' , (e)=>{
        if(selectedPlayer.children.length <= 4){
            button.classList.add('disabled');
            addPlayer(button.parentNode.children[0].innerText);
        } else{
            button.classList.remove('disabled');
            // addPlayer(button.parentNode.children[0].innerText)
            alert('5 Played already Selected');
        }
    })
} 

// A common function for getInput value
function getInputValue(inputId){
    // console.log(selectedPlayer.children.length)
    
    if(selectedPlayer.children.length < 5) {
        alert("Please, select 5 players!!!")
        return 0;
    }
    const inputField = document.getElementById(inputId);
    const inputFieldValue = inputField.value;
    if (isNaN(parseFloat(inputFieldValue)) || parseFloat(inputFieldValue) < 0) {
    //   console.log(inputFieldValue);
      alert('Please, Enter a valid positive number.')
      return 0;
    }

    return parseFloat(inputFieldValue)
};

function getValueOfElement(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

// reset input field
function resetInput(inputID) {
    document.getElementById(inputID).value = ''
}

// Budgets add event listeners
document.getElementById('calculate_budget').addEventListener('click', function(){
    const perPlayerBudget = getInputValue('per_player_budget');
    resetInput("per_player_budget");
    let totalPlayerExpense =  perPlayerBudget * 5;
    getValueOfElement( 'player_expense', totalPlayerExpense)  
})
document.getElementById('calculate_total_budget').addEventListener('click', function(){
    const perPlayerBudget = document.getElementById('player_expense');
    const playerTotalBudget = parseFloat(perPlayerBudget.innerText)
    const managerBudget = getInputValue('manager_budget');
    resetInput("manager_budget");
    const coachBudget = getInputValue('coach_budget');
    resetInput("coach_budget");

    let totalExpense = playerTotalBudget + managerBudget + coachBudget;
        getValueOfElement( 'player_total_expense', totalExpense)
})

