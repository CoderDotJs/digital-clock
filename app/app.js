"use strict";
const clock = document.getElementById('clock');
const time = () => {
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
    let am_pm = 'AM';
    if (hour > 12) {
        hour -= 12;
        am_pm = 'PM';
    }
    if (hour == 0) {
        hour = 12;
        am_pm = 'AM';
    }
    clock.innerHTML = `${hour}: ${minute}: ${seconds} ${am_pm}`;
};
setInterval(time, 1000);
