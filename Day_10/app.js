// var teachers = ['savurav', 'ravi', 'rahul', 'Priya'];
// console.log(teachers);
// // console.log(teachers[6]); // no error

// var person = {
//     name: 'Shiv Singh',
//     age: 26,
//     state: 'UP',
// };

// console.log(person);
// console.log(person.name);
// console.log(person['age']);

// const mobile = {
//     name: 'Apple iPhone 14',
//     price: 69999,
//     rom: '128GB',
//     display: '15.49cm',
//     primaryCamera: '12MP',
//     secondaryCamera: '12MP',
//     image: 'image.jpg',
//     processor: 'A15',
//     discount: 15,
// };

// console.log(mobile);
// var actualPrice =
//     mobile.price - Math.floor((mobile.price * mobile.discount) / 100);
// console.log(actualPrice);


function signup(e){
    e.preventDefault();
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target[0]);
    // console.log(e.target[0].value);
    // console.log(e.target[1].value);
    // console.log(e.target[2].value);
    // console.log(e.target[3].value);
    // console.log(e.target[4].value);

    const user = {
        firstname: e.target[0].value,
        lastname: e.target[1].value,
        mobile: e.target[2].value,
        email: e.target[3].value,
        password: e.target[4].value,
    }

    console.log(user);
    
    
}