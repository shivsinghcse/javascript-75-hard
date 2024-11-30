// alert()

// function changeBg(id) {
//     var input = document.getElementById('color-picker');
//     //    var body = document.body;
//     //    body.style.backgroundColor = input.value;
//     var h1 = document.getElementById(id);
//     h1.style.color = input.value;
// }

function login(event){
    event.preventDefault();
    // console.log(event);
    var username = document.getElementById('username')
    var password = document.getElementById('password')
    // console.log(username.value)
    // console.log(password.value)

    var usernameView = document.getElementById('username-view')
    var passwordView = document.getElementById('password-view')

    usernameView.innerHTML = "Username : " + username.value;
    passwordView.innerHTML = "Password : " + password.value;

}
