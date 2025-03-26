function updateClock() {
    let now = new Date();
    let hours = now.getHours() % 12 || 12;
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = now.getHours() >= 12 ? 'PM' : 'AM';
    let timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;
    
    document.getElementById('time').innerText = timeString;
    document.getElementById('date').innerText = now.toDateString();
}
setInterval(updateClock, 1000);
updateClock();

let alarmTime = null;
function setAlarm() {
    alarmTime = document.getElementById('alarmTime').value;
    if (alarmTime) {
        document.getElementById('alarmStatus').innerText = `Alarm set for ${alarmTime}`;
    }
}

function clearAlarm() {
    alarmTime = null;
    document.getElementById('alarmStatus').innerText = 'Alarm cleared';
}

setInterval(() => {
    let now = new Date();
    let currentTime = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
    
    if (alarmTime === currentTime) {
        document.getElementById('time').classList.add('alarm-ring');
        alert("Alarm Ringing!");
    }
}, 1000);

let stopwatchTime = 0, stopwatchInterval, running = false;
function startStopwatch() {
    if (!running) {
        running = true;
        stopwatchInterval = setInterval(() => {
            stopwatchTime++;
            let hours = Math.floor(stopwatchTime / 3600);
            let minutes = Math.floor((stopwatchTime % 3600) / 60);
            let seconds = stopwatchTime % 60;
            document.getElementById('stopwatch').innerText =
                `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }, 1000);
    }
}

function pauseStopwatch() {
    clearInterval(stopwatchInterval);
    running = false;
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    running = false;
    stopwatchTime = 0;
    document.getElementById('stopwatch').innerText = '00:00:00';
}

let countdownTime, countdownInterval;
function startCountdown() {
    let minutes = parseInt(document.getElementById('countdownMinutes').value) || 0;
    let seconds = parseInt(document.getElementById('countdownSeconds').value) || 0;
    countdownTime = minutes * 60 + seconds;

    countdownInterval = setInterval(() => {
        if (countdownTime > 0) {
            countdownTime--;
            let displayMinutes = Math.floor(countdownTime / 60);
            let displaySeconds = countdownTime % 60;
            document.getElementById('countdownDisplay').innerText =
                `${displayMinutes.toString().padStart(2, '0')}:${displaySeconds.toString().padStart(2, '0')}`;
        } else {
            clearInterval(countdownInterval);
            alert("Time's up!");
        }
    }, 1000);
}

function resetCountdown() {
    clearInterval(countdownInterval);
    document.getElementById('countdownDisplay').innerText = '';
}

function changeTheme() {
    let theme = document.getElementById('themeSelector').value;
    document.body.className = theme + "-theme";
}
