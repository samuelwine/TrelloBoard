// test 
//shmuels change

// the function is how we get the button to adda new line
function getItem() {
    var nameField = document.getElementById('todow').value;

    var resultContainer = document.createElement('li');
    var taskList = document.querySelector(".todolist");
    taskList.appendChild(resultContainer);

    // textContent is how the line is actually being added
    resultContainer.textContent = nameField;
// the next 3 lines are for a button to appear 
    document.getElementById('todow').value = "";
    var doing1 = document.createElement('input')
var doingText = doing1.setAttribute('type', 'button');

    // the line below could have been done without a var but created a var to be able to be used at the next stage
    var submited1 = resultContainer.appendChild(doing1); 
}

// use an eventlistener for the event
var subButton1 = document.getElementById('submit1');
subButton1.addEventListener('click', getItem, false);