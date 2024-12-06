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

function tab(activeBtn, inActiveBtn,activeId, inActiveId) {
const activeEl = document.getElementById(activeId)
const inActiveEl = document.getElementById(inActiveId)

const activeButtonEl = document.getElementById(activeBtn)
const inActiveButtonEl = document.getElementById(inActiveBtn)

activeButtonEl.style.background = "darkorange"
activeButtonEl.style.color = "white"

inActiveButtonEl.style.background = "white"
inActiveButtonEl.style.color = "black"

    
    activeEl.style.display = "Block";
    inActiveEl.style.display = "none";
}