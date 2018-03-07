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
// the next 2 lines are for a button to appear 
    
    var doingButton = document.createElement('button');
    var doingBtnText = document.createTextNode("Doing");
    doingButton.appendChild(doingBtnText);
    resultContainer.appendChild(doingButton);
    doingButton.addEventListener("click", moveItemToDoing); 
}

function moveItemToDoing() {
    var currentLi = this.parentNode;
    var doingList = document.querySelector(".doinglist");
    doingList.appendChild(currentLi);
    this.textContent = "Done";
    this.removeEventListener("click", moveItemToDoing); 
    this.addEventListener("click", moveItemToDone);
}

function moveItemToDone() {
    var currentLi = this.parentNode;
    var doneList = document.querySelector(".donelist");
    doneList.appendChild(currentLi);
    this.textContent = "Completed";
    this.removeEventListener("click", moveItemToDone);
    this.addEventListener("click", deleteItem);
}

function deleteItem() {
    var currentLi = this.parentNode;
    var doneList = document.querySelector(".donelist");
    doneList.removeChild(currentLi);
}

// use an eventlistener for the event
var subButton1 = document.getElementById('submit1');
subButton1.addEventListener('click', getItem, false);