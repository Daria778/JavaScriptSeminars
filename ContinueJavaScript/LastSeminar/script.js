const videoEl = document.querySelector('.firstVideo');
const playEl = document.createElement('div');
const stopEl = document.createElement('div');
const videosEl = document.querySelector('.videos');
playEl.classList.add('play');
stopEl.classList.add('play');
playEl.addEventListener('click', (e) => {
    videoEl.play();
});
stopEl.addEventListener('click', (e) => {
    videoEl.pause();
});
const rangeEl = document.createElement('input');
rangeEl.classList.add('duration');
rangeEl.setAttribute('type', 'range');
rangeEl.setAttribute('min', '0');
rangeEl.setAttribute('max', '100');
rangeEl.setAttribute('value', '0');
rangeEl.addEventListener('change', function (e) {
    videoEl.currentTime = e.target.value / 100 * videoEl.duration;
});
videoEl.addEventListener("timeupdate", (e) => {
    rangeEl.setAttribute('value', Math.round(videoEl.currentTime / videoEl.duration * 100));
});

const soundEl = document.createElement('input');
soundEl.setAttribute('type', 'range');
soundEl.setAttribute('min', '0');
soundEl.setAttribute('max', '100');
soundEl.setAttribute('value', videoEl.volume);
soundEl.addEventListener('change', function (e) {
    videoEl.volume = 0 + e.target.value / 100;
});



videosEl.appendChild(playEl);
videosEl.appendChild(stopEl);

videosEl.appendChild(rangeEl);
videosEl.appendChild(soundEl);
