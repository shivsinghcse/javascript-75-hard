function speak(letter) {
    var audio = document.querySelector('#audio');
    var speaker = document.querySelector('#speaker');
    audio.src = './assets/audio/a.mp3';
    if (letter === 'a') audio.src = './assets/audio/a.mp3';
    else if (letter === 'b') audio.src = './assets/audio/b.mp3';
    else if (letter === 'c') audio.src = './assets/audio/c.mp3';
    else if (letter === 'd') audio.src = './assets/audio/d.mp3';
    else if (letter === 'e') audio.src = './assets/audio/e.mp3';
    else audio.src = '';

    speaker.style.color = 'black';
    speaker.style.transition = '0.5s'

    audio.play();

    setTimeout(function(){
        speaker.style.color = 'gray';
        speaker.style.transition = '0.5s'
    }, 1000)
}
