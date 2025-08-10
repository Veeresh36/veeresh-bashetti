const musicPlayer = () => {
    const audioPlayer = document.getElementById('audioPlayer');
        const playButton = document.getElementById('playButton');
        const playIcon = playButton.querySelector('.play-icon');
        
        playButton.addEventListener('click', () => {
            if (audioPlayer.paused) {
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
        });
}

export default musicPlayer;