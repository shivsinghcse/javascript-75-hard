let result = document.getElementById('result');

function input(num) {
    result.value += num;
}

function calc() {
    let ans = eval(result.value);
    result.value = ans;
}

function clearResult() {
    result.value = '';
}
