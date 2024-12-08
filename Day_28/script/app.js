// function create() {
//     var h1 = document.createElement('h1');
//     var root = document.getElementById('root');
//     h1.innerText = 'Hello JS!';
//     h1.style.color = 'red';
//     root.appendChild(h1);
// }

// function create() {
//     var tagName = document.getElementById('element').value;
//     var text = document.getElementById('elText').value;
//     // console.log(text);
    
//     var result = document.getElementById('section');

//     var element = document.createElement(tagName);
//     element.innerText = text;
//     result.append(element);
// }

function create(){
    event.preventDefault()
   var form = document.forms['element-form'].elements
   var tagName = form.elName.value
   var text = form.elText.value
//    console.log(text);

   var result = document.getElementById('section');

    var element = document.createElement(tagName);
    element.innerText = text;
    result.append(element);
   
}
