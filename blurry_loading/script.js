const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;
// 30 == 30 milliseconds
let int = setInterval(blurring, 30)

function blurring() {
    load++

    if (load > 99) {
        clearInterval(int)
    }

    loadText.innerText = `${load}%`
    // opacity goes from 1 to 0, opace to not opace
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// maps a range of numbers to another range of number [0-100 -> 1-0]
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}