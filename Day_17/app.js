function toggler() {
    let img = document.getElementById('img');
    let btn = document.getElementById('toggle');
    // if (img.style.display === 'none') {
    // img.style.display = '';
    // btn.innerText = 'Hide';
    // } else {
    // img.style.display = 'none';
    // btn.innerText = 'Show';
    // }
    if (img.className == 'animate__animated animate__slideOutLeft animate__faster') {
        img.className =
            'animate__animated animate__slideInLeft animate__faster';
        btn.innerText = 'Hide';
    } else {
        img.className =
            'animate__animated animate__slideOutLeft animate__faster';
        btn.innerText = 'Show';
    }
}
