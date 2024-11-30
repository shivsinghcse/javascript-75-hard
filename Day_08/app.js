// alert()

// function size(){
//     var button = document.getElementById('btn-1');
//     button.style.width = '100px';
//     button.style.height = '40px';
//     button.style.backgroundColor = 'deeppink';
//     button.style.color = '#fff';
//     button.style.borderWidth = 0;
//     button.style.borderRadius = '4px';

// }

// function size(btn){
//     var button = document.getElementById(btn);
//     button.style.width = '100px';
//     button.style.height = '40px';
//     button.style.backgroundColor = 'deeppink';
//     button.style.color = '#fff';
//     button.style.borderWidth = 0;
//     button.style.borderRadius = '4px';
// }
// function size(btn, bgcolor='black'){
//     var button = document.getElementById(btn);
//     button.style.width = '100px';
//     button.style.height = '40px';
//     button.style.backgroundColor = bgcolor;
//     button.style.color = '#fff';
//     button.style.borderWidth = 0;
//     button.style.borderRadius = '4px';
// }

function size(button, bgcolor, color, height, width) {
    console.log(button);
    
    // var button = document.getElementById(btn);
    button.style.width = width;
    button.style.height = height;
    button.style.backgroundColor = bgcolor;
    button.style.color = color;
    button.style.borderWidth = 0;
    button.style.borderRadius = '4px';
}

function changeText(){
    var h1 = document.getElementById('title');
    // h1.innerHTML = " Wap Institute"
    h1.innerHTML += " Wap Institute"
}

function changeBg(event){
    // console.log(event);
    // console.log(event.name);
    // console.log(event.id);
    // console.log(event.value);

    var backgroundColor = event.value;

    document.body.style.backgroundColor = backgroundColor;
    
}