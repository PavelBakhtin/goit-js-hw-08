import Player from '@vimeo/player'
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on("timeupdate", throttle((function (timeupdate) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(timeupdate)) 
}), 1000))

player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")).seconds)
