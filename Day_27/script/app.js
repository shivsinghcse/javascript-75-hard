function largestNumber() {
    let nums = [22, 3, 54, 76, 88, 29, 11];
    let max = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }
    let result = document.getElementById('r-1');
    result.innerText += ` ${max}`;
}
function smallestNumber() {
    let nums = [22, 3, 54, 76, 88, 29, 11];
    let min = Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
        }
    }
    let result = document.getElementById('r-2');
    result.innerText += ` ${min}`;
}
function sumOfAllElements() {
    let nums = [22, 3, 54, 76, 88, 29, 11];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    let result = document.getElementById('r-3');
    result.innerText += ` ${sum}`;
}
function printNumber() {
    let result = document.getElementById('r-4');
    for (let i = 1; i <= 10; i++) {
        result.innerText += ` \n${i}`;
    }
}
function sumOfNaturalNumbers() {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += i;
    }
    let result = document.getElementById('r-5');
    result.innerText += ` ${i} `;
}


function multiplicationTable(){
    let number = Number(prompt('Enetr the positive integer : '))
    let result = document.getElementById('r-6')
    for(let i=1; i<=10; i++){
        result.innerText += `\n${number} * ${i} = ${number * i}`;
    }
}