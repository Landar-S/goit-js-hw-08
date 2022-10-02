import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const PAUSE_TIME_KEY = 'videoplayer-current-time';
const throttle = require('lodash.throttle');

player.on('timeupdate', throttle(saveData, 1000));

function saveData(e) {
  localStorage.setItem(PAUSE_TIME_KEY, e.seconds);
}

loadPauseTime();

function loadPauseTime() {
  if (localStorage.getItem(PAUSE_TIME_KEY)) {
    player.setCurrentTime(localStorage.getItem(PAUSE_TIME_KEY));
  } else {
    player.setCurrentTime(0);
  }
}
