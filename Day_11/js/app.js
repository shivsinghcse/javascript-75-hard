// alert()

function signup(event){
    event.preventDefault();
    // console.log(event.target);
//     let inputValues = event.target;
//     const userSignUpDetails = {
//         firstname: inputValues[0].value,
//         lastname: inputValues[1].value,
//         email: inputValues[2].value,
//         password: inputValues[3].value,
//     }
//    console.log(userSignUpDetails);

let form = document.forms.register;
console.log(form.elements.firstName.value);
const userSignUpDetails = {
             firstname: form.elements.firstName.value,
             lastname: form.elements.lastName.value,
             email: form.elements.email.value,
             password: form.elements.password.value,
        }

   console.log("userSignUpDetails : ", userSignUpDetails);
   
}