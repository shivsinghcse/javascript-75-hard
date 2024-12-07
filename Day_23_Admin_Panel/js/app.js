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
    var user = {};
    var firstname = form.elements.firstname;
    var firstnameMsg = document.querySelector('#firstname-msg');
    var lastname = form.elements.lastname;
    var lastnameMsg = document.querySelector('#lastname-msg');
    var email = form.elements.email;
    var emailMsg = document.querySelector('#email-msg');
    var password = form.elements.password;
    var passwordMsg = document.querySelector('#password-msg');
    // console.log(firstname.value, lastname.value, email.value, password.value);

    if (firstname.value.trim().length === 0) {
        firstname.style.borderColor = 'red';
        firstnameMsg.innerText = 'First name is required!';
        firstnameMsg.style.display = 'block';
        firstnameMsg.style.color = 'red';
    } else if (lastname.value.trim().length === 0) {
        lastname.style.borderColor = 'red';
        lastnameMsg.innerText = 'Last name is required!';
        lastnameMsg.style.display = 'block';
        lastnameMsg.style.color = 'red';
    } else if (email.value.trim().length === 0) {
        email.style.borderColor = 'red';
        emailMsg.innerText = 'Email is required!';
        emailMsg.style.display = 'block';
        emailMsg.style.color = 'red';
    } else if (password.value.trim().length === 0) {
        password.style.borderColor = 'red';
        passwordMsg.innerText = 'Password is required!';
        passwordMsg.style.display = 'block';
        passwordMsg.style.color = 'red';
    } else {
        user.firstname = firstname.value.trim();
        user.lastname = lastname.value.trim();
        user.email = email.value.trim();
        user.password = password.value.trim();

        swal.fire({
            title: 'Register Successfully',
            icon: 'success',
            showClass: {
                popup: `
                  animate__animated
                  animate__zoomIn
                  animate__faster
                `,
            },
            hideClass: {
                popup: `
                  animate__animated
                  animate__zoomOut
                  animate__faster
                `,
            },
            color: 'green',
            confirmButtonColor: 'green',
        });

        console.log(user);
    }
}

function signin(event) {
    event.preventDefault();
    var user = {};
    var form = document.forms.loginForm;
    var email = form.elements.email;
    var emailMsg = document.querySelector('#signin-email-msg');
    var password = form.elements.password;
    var passwordMsg = document.querySelector('#signin-password-msg');

    if (email.value.trim().length === 0) {
        email.style.borderColor = 'red';
        emailMsg.innerText = 'Email is required!';
        emailMsg.style.display = 'block';
        emailMsg.style.color = 'red';
    } else if (password.value.trim().length === 0) {
        password.style.borderColor = 'red';
        passwordMsg.innerText = 'Password is required!';
        passwordMsg.style.display = 'block';
        passwordMsg.style.color = 'red';
    } else {
        user.email = email.value;
        user.password = password.value;
        console.log(user);
        swal.fire({
            title: 'Register Successfully',
            icon: 'success',
            showClass: {
                popup: `
                  animate__animated
                  animate__zoomIn
                  animate__faster
                `,
            },
            hideClass: {
                popup: `
                  animate__animated
                  animate__zoomOut
                  animate__faster
                `,
            },
            color: 'green',
            confirmButtonColor: 'green',
        });
    }
}

function onInputValidation(input, messageId) {
    var firstnameMsg = document.getElementById(messageId);
    firstnameMsg.style.color = 'inherit';
    firstnameMsg.innerText = '';
    firstnameMsg.style.display = 'none';
    input.style.borderColor = '#ccc';

    if (input.name === 'password' && input.value.trim().length < 8) {
        var passwordMsg = document.getElementById(messageId);
        passwordMsg.innerText =
            'Password should contain at least 8 characters!';
        passwordMsg.style.display = 'block';
        passwordMsg.style.color = 'red';
    }
    if (input.name === 'password' && input.value.trim().length == 0) {
        var passwordMsg = document.getElementById(messageId);
        passwordMsg.innerText = '';
        passwordMsg.style.display = 'none';
        passwordMsg.style.color = 'black';
    }

    //    console.log(input.id, input.value.length);
}

function togglePassword(btnId, passwordId) {
    var eyeBtnEl = document.getElementById(btnId);
    var passwordEl = document.getElementById(passwordId);
    console.log(passwordEl);
    // alert(passwordEl.value)

    // alert(eyeBtnEl.className)
    if (eyeBtnEl.className === 'fa fa-eye') {
        eyeBtnEl.className = 'fa fa-eye-slash';
        passwordEl.setAttribute('type', 'text');
        if (passwordEl.value.trim().length === 0) {
            passwordEl.style.borderColor = 'red';
            passwordEl.setAttribute('placeholder', 'Password is empty😔');
        }
    } else {
        eyeBtnEl.className = 'fa fa-eye';
        passwordEl.setAttribute('type', 'password');
        if (passwordEl.value.trim().length === 0) {
            passwordEl.style.borderColor = '#ccc';
            passwordEl.setAttribute('placeholder', '********');
        }
    }
}
