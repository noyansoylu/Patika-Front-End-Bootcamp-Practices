const soundList = {
    A: './drums/boom.wav',
    S: './drums/clap.wav',
    D: './drums/hihat.wav',
    F: './drums/kick.wav',
    G: './drums/openhat.wav',
    H: './drums/ride.wav',
    J: './drums/snare.wav',
    K: './drums/tink.wav',
    L: './drums/tom.wav'
};

function playSound(key) {
    const sound = soundList[key];
    if (sound) {
      const audio = new Audio(sound);
      audio.play();
    }
}

const buttons = document.querySelectorAll('.button-list button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const key = button.getAttribute('data-key');
        playSound(key);
    });
});

document.addEventListener('keydown', (event) => {
    const key = event.key.toUpperCase();
    playSound(key);
});