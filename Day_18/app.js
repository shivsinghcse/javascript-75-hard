function update() {
    var h1 = document.getElementById('title');
    var input = document.getElementById('username');
    // console.log(input.value);
    // h1.innerHTML = 'Wap Institute';
    // input.value = 'Shiv Singh';
    // h1.className = 'demo radius';
    // h1.style.display = "none"
    // h1.classList.add("demo", "radius", "x", "hide")
    // h1.classList.remove("x");
    // h1.classList.toggle('hide', 'show')
    // console.log(h1.innerText);

    // alert(h1.className)
    if (h1.className === 'hide') {
        h1.className = 'show';
    } else {
        h1.className = 'hide';
    }
}
