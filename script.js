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

    document.getElementById('todow').value = "";
}

// use an eventlistener for the event
var subButton1 = document.getElementById('submit1');
subButton1.addEventListener('click', getItem, false);