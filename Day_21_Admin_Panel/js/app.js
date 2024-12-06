function toggle() {
    let sidenav = document.getElementById('sidenav');
    let topnav = document.getElementById('topnav');
    let section = document.getElementById('section');
    // let width = sidenav.style.width;
    console.log(sidenav.style.width);

    if (sidenav.style.width == '0px') {
        sidenav.style.width = '15%';
        sidenav.style.transition = '0.3s';
        section.style.marginLeft = '15%';
        section.style.width = '85%';
        section.style.transition = '0.3s';
        topnav.style.marginLeft = '15%';
        topnav.style.width = '85%';
        topnav.style.transition = '0.3s';
    } else {
        sidenav.style.width = '0px';
        sidenav.style.transition = '0.3s';
        section.style.width = '100%';
        section.style.marginLeft = '0px';
        section.style.transition = '0.3s';
        topnav.style.marginLeft = '0px';
        topnav.style.width = '100%';
        topnav.style.transition = '0.3s';
    }
}

// function register() {
//     const registerEl = document.querySelector('#register');
//     const signinEl = document.querySelector('#signin');
//     // console.log(registerEl);
//     registerEl.style.display = 'block';
//     signinEl.style.display = 'none';
// }
// function signin() {
//     const signinEl = document.querySelector('#signin');
//     const registerEl = document.querySelector('#register');
//     // console.log(signinEl);
//     signinEl.style.display = 'block';
//     registerEl.style.display = 'none';
// }

function tab(activeBtn, inActiveBtn, activeId, inActiveId) {
    const activeEl = document.getElementById(activeId);
    const inActiveEl = document.getElementById(inActiveId);

    const activeButtonEl = document.getElementById(activeBtn);
    const inActiveButtonEl = document.getElementById(inActiveBtn);

    activeButtonEl.style.background = 'darkorange';
    activeButtonEl.style.color = 'white';

    inActiveButtonEl.style.background = 'white';
    inActiveButtonEl.style.color = 'black';

    activeEl.style.display = 'Block';
    inActiveEl.style.display = 'none';
}

function signup(event) {
    event.preventDefault();
    var form = document.forms.signupForm;
    var firstname = form.elements.firstname;
    var firstnameMsg = document.querySelector('#firstname-msg');
    var lastname = form.elements.lastname;
    var lastnameMsg = document.querySelector('#lastname-msg');
    var email = form.elements.email;
    var emailMsg = document.querySelector('#email-msg');
    var password = form.elements.password;
    var passwordMsg = document.querySelector('#password-msg');
    // console.log(firstname.value, lastname.value, email.value, password.value);

    if (firstname.value.length === 0) {
        firstname.style.borderColor = 'red';
        firstnameMsg.innerText = 'First name is required!';
        firstnameMsg.style.display = 'block';
        firstnameMsg.style.color = 'red';
    } else if (lastname.value.length === 0) {
        lastname.style.borderColor = 'red';
        lastnameMsg.innerText = 'Last name is required!';
        lastnameMsg.style.display = "block"
        lastnameMsg.style.color = 'red';
    }else if (email.value.length === 0) {
        email.style.borderColor = 'red';
        emailMsg.innerText = 'Email is required!';
        emailMsg.style.display = "block"
        emailMsg.style.color = 'red';
    }else if (password.value.length === 0) {
        password.style.borderColor = 'red';
        passwordMsg.innerText = 'Password is required!';
        passwordMsg.style.display = "block"
        passwordMsg.style.color = 'red';
    }else{
        console.log(firstname.value, lastname.value, email.value, password.value);
    }
}

function signin(event) {
    event.preventDefault();
}

function onInputValidation(input, messageId) {
    var firstnameMsg = document.getElementById(messageId);
    firstnameMsg.style.color = 'inherit';
    firstnameMsg.innerText = '';
    firstnameMsg.style.display = 'none';
    input.style.borderColor = '#ccc';
}
