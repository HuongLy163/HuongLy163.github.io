function playAudio(trackId) {
    // Pause any currently playing audio
    const audios = document.querySelectorAll('audio');
    audios.forEach(audio => {
        if (!audio.paused) {
            audio.pause();
            audio.currentTime = 0;
        }
    });

    // Play the selected track
    const audio = document.getElementById(trackId);
    audio.play();
}

function pauseAudio(trackId) {
    // Pause the selected track
    const audio = document.getElementById(trackId);
    if (!audio.paused) {
        audio.pause();
    }
}
