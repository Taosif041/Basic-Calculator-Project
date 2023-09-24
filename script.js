function performOperation() {

    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const choice = parseInt(document.getElementById('choice').value);

    let result;

    if (!isNaN(number1) && !isNaN(number2) && !isNaN(choice)) {
        
        if (choice === 1) {
            result = number1 + number2;
        } 
        else if (choice === 2) {
            result = number1 - number2;
        } 
        else if (choice === 3) {
            result = number1 * number2;
        } 
        else if (choice === 4) {
            if (number2 !== 0) {
                result = number1 / number2;
            } 
            else {
                alert('Division by zero is not allowed.');
                return;
            }
        } 
        else {
            alert('Invalid choice. Please enter a valid choice (1-4).');
            return;
        }

        document.getElementById('result').textContent = 'Result: ' + result;
        document.getElementById('enteredInfo').textContent = `Entered numbers: ${number1}, ${number2}, Choice: ${choice}`;
    } 
    else {
        alert('Invalid input. Please enter valid numbers and a valid choice.');
    }
}

function refreshPage() {
    location.reload();
}


