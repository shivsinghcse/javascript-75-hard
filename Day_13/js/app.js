// alert('testing')

let modal = document.getElementById('modal');
let modalBody = document.getElementById('modal-body');

const user = {};

function signup(event) {
    event.preventDefault();
    let form = document.forms.register;
    // console.log(form.elements.firstName.value);
    // console.log(form);
    modal.style.display = 'flex';
    modal.className = 'animate__animated animate__fadeIn';
    modalBody.className = 'animate__animated animate__zoomIn';

    user.firstname = form.elements.firstName.value;
    user.lastname = form.elements.lastName.value;
    user.email = form.elements.email.value;
    user.password = form.elements.password.value;

    console.log(user);
}

function hideModal() {
    modal.className = 'animate__animated animate__fadeOut';
    modalBody.className = 'animate__animated animate__zoomOut';
}

function login(event) {
    event.preventDefault();
    const form = document.forms.signin;
    user.email = form.elements.email.value;
    user.password = form.elements.password.value;
    console.log(user);
}
