import Player from "@vimeo/player";


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', function(data) {
    console.log('data', data);
});



// Зберігай час відтворення у локальне сховище.Нехай ключем для сховища 
// буде рядок "videoplayer-current-time".

// Під час перезавантаження сторінки скористайся методом setCurrentTime() з 
// метою відновлення відтворення зі збереженої позиції.

// Додай до проекту бібліотеку lodash.throttle і зроби так, щоб час 
// відтворення оновлювався у сховищі не частіше, ніж раз на секунду.