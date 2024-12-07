// setTimeout(()=>{
//     alert()
// }, 3000)

// for(let i=5; i<=10; i++){
//     alert(i)
// }
// alert(i)

// ---error
// for(){
//     console.log("hi");
// }

// ---infinite loop
// for(;;){
//     console.log("hi");
// }

// for(let i=0; i<3; i++){
//     document.write("<h1 style='color:red; font-size: 24px; font-family: sans-serif'>Hello Dev</h1>")
// }

function findTable() {
    var input = document.getElementById('num');
    var result = document.getElementById('result');
    // input.setAttribute(required, 'true')
    var number = Number(input.value);
    result.innerHTML = '';

    // alert(typeof number)

    for (let i = 1; i <= 10; i++) {
        // document.write(`<h1 style='color:red; font-size: 24px; font-family: sans-serif; text-align:center'> ${number} * ${i} = ${number * i}</h1>`)
        result.innerHTML +=
            '<h1>' + number + ' * ' + i + ' = ' + number * i + '</h1>';
    }
}

function clearResult() {
    var result = document.getElementById('result');
    result.innerHTML = '';
}

var subjects = ['math', 'science', 'english', 'computer', 'java'];

for (let i = 0; i < subjects.length; i++) {
    console.log(subjects[i]);
}


let name = "Shiv Singh"
for (let i = 0; i < name.length; i++) {
    // console.log(name[i]);
    console.log(name.charAt(i));
}