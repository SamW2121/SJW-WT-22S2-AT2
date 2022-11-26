var blink = document.getElementById('divider');

setInterval(function (){
    blink.style.opacity =
        (blink.style.opacity == 0? 1 : 0);

        updateDateTime()

}, 1000);

const dayOfWeek = document.getElementById("dayOfWeek");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const month= document.getElementById('monthDay')
const monthNames= ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')


function updateDateTime(){
    const currentTime = new Date();
    dayOfWeek.innerText = weekDays[currentTime.getDay()]
    month.innerText = `${currentTime.getDate()} ${monthNames[currentTime.getMonth()]}`;
    hours.innerText = `${currentTime.getHours()}`
    if(currentTime.getMinutes() < 10){
    minutes.innerText = `0${currentTime.getMinutes()}`
    }
    else {minutes.innerText = `${currentTime.getMinutes()}`
    }
}
updateDateTime()

