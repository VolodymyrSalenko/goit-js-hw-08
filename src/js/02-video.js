import Player from '@vimeo/player';
import throttle  from 'lodash.throttle';


const vimeoPlayer = document.querySelector('#vimeo-player');
const player = new Player(vimeoPlayer);
const KEY_STORAGE_DATA_TIME = 'videoplayer-current-time'; 

player.on('timeupdate', throttle(saveDataStorage, 1000));
player.setCurrentTime(returnSecondsStorage());


function saveDataStorage(data) {
    const dataTime = JSON.stringify(data);
    localStorage.setItem(KEY_STORAGE_DATA_TIME, dataTime);
};

function returnSecondsStorage() {
    const dataTimeStorage = localStorage.getItem(KEY_STORAGE_DATA_TIME);
    let secondsStorage = 0;

    if (dataTimeStorage !== null) {
        secondsStorage =  +JSON.parse(dataTimeStorage).seconds;
    };

    return secondsStorage;    
};