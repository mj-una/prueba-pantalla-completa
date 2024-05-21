function setup() {
    createCanvas(windowWidth, windowHeight);
    windowResized();
}

function draw() {
    background(250, 30, 120);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

const fullscreenButton = document.getElementById("fullscreenButton");

fullscreenButton.addEventListener("click", toggleFullscreen);

function toggleFullscreen() {
    if (
        document.fullscreenElement ||
        document.mozFullScreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement
    ) {
        exitFullscreen();
    } else {
        requestFullscreen();
    }
}

function requestFullscreen() {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen(); // Firefox
    } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(); // Chrome, Safari, and Opera
    } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen(); // Internet Explorer
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen(); // Firefox
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen(); // Chrome, Safari, and Opera
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen(); // Internet Explorer
    }
}
