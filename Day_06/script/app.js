// alert()

function design() {
    // alert()
    const heading = document.getElementById('heading');
    const p1 = document.getElementById('para');
    heading.style.color = 'red';
    heading.style.fontSize = '360px';
    heading.style.margin = '0';
    heading.style.padding = '0';
    // heading.style.textAlign = 'center';
    heading.style.backgroundColor = 'lightblue';
    p1.style.color = 'red';
    p1.style.fontSize = '24px';
    // p1.style.textAlign = 'center';
    p1.style.backgroundColor = '#323232';
    p1.style.padding = '10px';
}

function webpage() {
    // alert();
    const body = document.getElementById('body');
    body.style.backgroundColor = 'pink';
    body.style.textAlign = 'center';
}

function effect(){
    const body = document.getElementById('body');
    body.style.animation = 'demo 4s infinite';
}