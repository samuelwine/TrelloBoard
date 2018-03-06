// test 
//shmuels change

// the function is how we get the button to adda new line
function getItem() {
    var nameField = document.getElementById('todow').value;
    var result = document.getElementById('result');
// I don't really need the f only the else but, as I can't think of a parameter to use, I used this but I am open for changes

    if (nameField.length < 3) {
        result.textContent = 'Username must contain at least 3 characters';
        
    } else {
        // textContent is how the line is actually being added
        result.textContent =  nameField;
    }
}
// use an eventlistener for the event
var subButton1 = document.getElementById('submit1');
subButton1.addEventListener('click', getItem, false);