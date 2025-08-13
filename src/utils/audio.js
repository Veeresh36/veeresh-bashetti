const musicPlayer = () => {
    const audioPlayer = document.getElementById('audioPlayer');
    const playButton = document.getElementById('playButton');
    const audioContainer = document.querySelector('.audio-container');
    const speechBubble = document.querySelector('.speech-bubble');

    playButton.addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.currentTime = 0.001;
            audioPlayer.play();
            playButton.innerHTML = '<div class="pause-icon"></div>';
        } else {
            audioPlayer.pause();
            playButton.innerHTML = '<div class="play-icon"></div>';
        }
    });

    // Reset button when audio ends
    audioPlayer.addEventListener('ended', () => {
        playButton.innerHTML = '<div class="play-icon"></div>';
        speechBubble.style.display = 'flex'; // show again when ended
    });

    // Hide bubble when mouse enters
    audioContainer.addEventListener('mouseenter', () => {
        speechBubble.style.display = 'none';
    });

    audioContainer.addEventListener('mouseleave', () => {
        if (audioPlayer.paused) { // only show if audio not playing
            speechBubble.style.display = 'flex';
        }
    });

    // 🔹 Hide bubble when audio starts playing
    audioPlayer.addEventListener('play', () => {
        speechBubble.style.display = 'none';
    });

    // 🔹 Show bubble when audio is paused (optional)
    audioPlayer.addEventListener('pause', () => {
        speechBubble.style.display = 'flex';
    });
}

export default musicPlayer;
