
const socket = io();
document.addEventListener("DOMContentLoaded", main);


function handleClick1() {
    console.log("here");
    socket.emit('click', "player1");
}


function handleClick2() {
    console.log("here");
    socket.emit('click', "player2");
}
 
function updateRacers(d) {
    for (const prop in d) {
        const racer = document.querySelector('.' + prop);
        console.log(racer);
        racer.style.left = d[prop] + 'px';
    }
}
 
function main() {
    const racers = document.querySelectorAll('button');
    racers[0].addEventListener('click', handleClick1);
    racers[1].addEventListener('click', handleClick2);
    //console.log(racers);
    /*
    racers.forEach((racer) => {
        racer.addEventListener('click', handleClick) ;
    });
    */
}

socket.on('click', updateRacers);