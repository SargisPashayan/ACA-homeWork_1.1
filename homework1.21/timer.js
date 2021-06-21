let getMin = document.getElementById('min');
let getSec = document.getElementById('sec');
let getMilisec = document.getElementById('milisec');

let min = 0;
let sec = 0;
let milisec = 0;

let interval;

function timer() {

    milisec++;
    getMilisec.innerHTML = milisec;

    if(milisec > 100) {
        sec++;
        getSec.innerHTML = sec;
        milisec = 0;
    }

    else if(sec > 60) {
        min++;
        getMin.innerHTML = min;
        sec = 0;
    }
}

function start() {
    interval = setInterval(timer, 10);
    document.getElementById('start').disabled = true;
}

function stop() {
    clearInterval(interval);
    document.getElementById('start').disabled = false;
}

function reset() {
    min = 0;
    sec = 0;
    milisec = 0;
    getMin.innerHTML = min;
    getSec.innerHTML = sec;
    getMilisec.innerHTML = milisec;
    stop();
}