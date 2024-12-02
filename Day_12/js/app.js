// alert('testing')

let modal = document.getElementById('modal');
let modalBody = document.getElementById('modal-body');

function signup(event) {
    event.preventDefault();
    let form = document.forms.register;
    // console.log(form.elements.firstName.value);
    // console.log(form);

    const userSignUpDetails = {
        firstname: form.elements.firstName.value,
        lastname: form.elements.lastName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
    };

    console.log('userSignUpDetails : ');
    console.table(userSignUpDetails);

    modal.style.display = 'flex';
    modal.classList.add(
        'animate__animated',
        'animate__fadeIn',
        'animate__faster'
    );
    modalBody.classList.add(
        'animate__animated',
        'animate__zoomIn',
        'animate__faster'
    );
}

function login(event) {
    event.preventDefault();
    const userLogInDetails = {
        email: form.elements.email.value,
        password: form.elements.password.value,
    };
}

function hideModal() {
    modal.style.display = 'none';
    // modal.classList.add(
    //     'animate__animated',
    //     'animate__fadeOut',
    //     'animate__faster'
    // );
    // modalBody.classList.add(
    //     'animate__animated',
    //     'animate__zoomOut',
    //     'animate__faster'
    // );
}
