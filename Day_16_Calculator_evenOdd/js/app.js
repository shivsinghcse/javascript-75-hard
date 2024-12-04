let result = document.getElementById('result');

function input(num) {
    if (result.value === 'Even' || result.value === 'Odd') {
        clearResult();
        result.value += num;
    } else {
        result.value += num;
    }
}

function calc() {
    let ans = eval(result.value);
    result.value = ans;
}

function clearResult() {
    result.value = '';
}

function isEvenOdd() {
    if (result.value % 2 === 0) {
        result.value = 'Even';
    } else {
        result.value = 'Odd';
    }
}
