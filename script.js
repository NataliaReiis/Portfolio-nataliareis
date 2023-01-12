const throttle = require('lodash/throttle')

const players =
    Array.from(document.querySelectorAll('.animate__animated'));

const isOnScreen = (el) =>
    el.getBoundingClientRect().top > 0 &&
    el.getBoundingClientRect() < window.innerHeight;

const playanimation = (el) => {
    if(isOnScreen(el)) el.style.animationPlayStart = 'running';

}

const render = (el_arr) => el_arr.forEach(playanimation);

const update = throttle(() => render(players), 150);