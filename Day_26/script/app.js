// var btn = document.getElementsByClassName('btn');
// console.log(btn);

// for (let index = 0; index < btn.length; index++) {
//     btn[index].style.color = 'deeppink';
//     btn[index].style.border = 'none';
//     // console.log(btn[index].id);
//     console.log(btn[index].getAttribute('id'));

// }

// var btn = document.querySelectorAll('.btn');
// console.log(btn);
// btn.style.color = 'deeppink';

// var btn = document.getElementsByTagName('button');
// console.log(btn);

// for (let index = 0; index < btn.length; index++) {
//     btn[index].style.color = 'deeppink';
//     btn[index].style.border = 'none';
//     // console.log(btn[index].id);
//     console.log(btn[index].getAttribute('id'));

// }

// var btn = document.getElementById('one');
// console.log(btn);

// btn.onclick = function(){
//     var heading = document.getElementById('heading')
//     heading.style.color = 'green'
// }


var btn = document.getElementsByClassName('btn');
console.log(btn);

for(let i=0; i<btn.length; i++){
    btn[i].onclick = function(){
       this.style.color = 'white'
       this.style.backgroundColor = 'red'
       this.style.border = 'none'
    }
}