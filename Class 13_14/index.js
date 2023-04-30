const timerRef = document.createElement('div');
timerRef.id = 'timer';

const bodyRef = document.querySelector('body');
bodyRef.appendChild(timerRef);

const minCountRef = document.createElement('span');
minCountRef.classList.add('min-count');
minCountRef.innerHTML = '--';

const minSuffixRef = document.createElement('span');
minSuffixRef.classList.add('min-suffix');
minSuffixRef.innerHTML = 'm';
 
const secCountRef = document.createElement('span');
secCountRef.classList.add('sec-count');
secCountRef.innerHTML = '--';

const secSuffixRef = document.createElement('span');
secSuffixRef.classList.add('sec-suffix');
secSuffixRef.innerHTML = 's';

timerRef.append(minCountRef, minSuffixRef, secCountRef, secSuffixRef);

timerRef.style.border = '1px solid red';

let  minRef = document.getElementsByClassName('min-count');
let secRef = document.getElementsByClassName('sec-count');

let timeInSeconds = 600;
let timeIntervalRef;

function getTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return {
        min, sec
    };
}

function showTimerValue() {
    const time = getTime(timeInSeconds);
    minRef[0].innerHTML = time.min;
    secRef[0].innerHTML = time.sec;
}

function stopTimer() {
    window.clearInterval(timeIntervalRef);
}

function resetTimeValue() {
    timeInSeconds = 0;
}

function updateTime() {
    if (timeInSeconds < 0) {
        // timerRef.innerHTML = 'Timeout';
        stopTimer();
        return;
    }
    showTimerValue();
    timeInSeconds--;
}

function startTimer() {
    timeIntervalRef = window.setInterval(() => {
        updateTime();
    }, 1000);
}

const buttonRef = document.createElement('button');
buttonRef.innerHTML = 'Start';
buttonRef.classList.add('start-button');

const resetRef = document.createElement('button');
resetRef.innerHTML = 'Reset';
resetRef.classList.add('reset-button');

bodyRef.append(buttonRef, resetRef);

buttonRef.addEventListener('click', function() {
    console.log('buttonRef.addEventListener');
    startTimer();
});

resetRef.addEventListener('click', function() {
    stopTimer();
    resetTimeValue();
    showTimerValue();
});

const inputRef = document.querySelector('.timer-input');
inputRef.addEventListener('keyup', function(event) {
    timeInSeconds = Number(event.target.value || 0 );
    showTimerValue();
})




