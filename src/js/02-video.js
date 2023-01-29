import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function ({ seconds }) {
  localStorage.setItem('curSec', seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const getStorageCurTime = function () {
  return localStorage.getItem('curSec') || 0;
};

player.setCurrentTime(getStorageCurTime());
