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
