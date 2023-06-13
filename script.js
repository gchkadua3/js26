let massive = [];

function addToMassive() {
    let inputElement = document.getElementById('inputElement');
    let inputValue = String(inputElement.value);
    var result = document.querySelector('.result');

    massive.push(inputValue);
    result.textContent = massive;
    inputElement.value = '';
}