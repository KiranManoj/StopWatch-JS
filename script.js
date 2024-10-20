// Stop Watch

let [hours, minutes, seconds] = [0,0,0];
let displayTime = document.getElementById('displayTime');
let timer = null;

function stopWatch() {
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    displayTime.innerHTML = h + ":" + m + ":" + s;
}

function watchStart() {
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(stopWatch, 1000);
}

function watchStop() {
    clearInterval(timer);
}
function watchReset() {
    clearInterval(timer);
    [hours, minutes, seconds] = [0,0,0];
    displayTime.innerHTML = "00:00:00";
}

// Countdown Timer

let [hour, min, sec] = [0,0,0];
let inputField = document.querySelector('input');
let displayTimer = document.getElementById('started');

function setTimer(time) {
    console.log(typeof(time));
    hour = Math.floor(time/60);
    console.log(hour);
    min = time % 60;
    console.log(min);
    // sec = 59;
    console.log(typeof(sec));

    setInterval(function() {
        if(sec > 0){
            sec--;
        }else{
            if(min > 0){
                min--;
                sec = 59;
            }
            else if(hour > 0){
                hour--;
                min = 59;
                sec = 59;
            }
            else{
                clearInterval(this);
                // alert('Time is up!');
                displayTimer.innerHTML = "00:00:00";
                return;
            }
        }    
            
        let H = hour < 10? "0" + hour : hour;
        let M = min < 10? "0" + min : min;
        let S = sec < 10? "0" + sec : sec;
        displayTimer.innerHTML = H + ":" + M + ":" + S;
    }, 1000)
}

function Timer() {
    const inputTime = inputField.value;
    setTimer(Number(inputTime));
    // document.getElementById("timer-button").innerHTML = "Reset"
    inputField.value = '';
}

