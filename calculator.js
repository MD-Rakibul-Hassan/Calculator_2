const showResult = document.getElementById('display');


function calculate(inputValue) {
    showResult.value += inputValue;
}

function removed() {
    showResult.value = showResult.value.toString().slice(0,-1);
}

function removeAll() {
    showResult.value = '';
}

function result() {
    let reslut = eval (showResult.value);
    showResult.value = reslut;
}