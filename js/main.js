let halloweenCounter = new Date('2023, 10, 31, 00:00:00').getTime();
// console.log(halloweenCounter);

// update counter every 1 second
let counter = setInterval(() => {
    let timeNow = new Date().getTime();
    let time = halloweenCounter - timeNow;


    let getDays = Math.floor(time / (1000 * 60 * 60 * 24));
    let getHours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let getMinutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    let getSeconds = Math.floor((time % (1000 * 60) / 1000));

    document.getElementById('days').innerHTML = getDays;
    document.getElementById('hours').innerHTML = getHours;
    document.getElementById('minutes').innerHTML = getMinutes;
    document.getElementById('seconds').innerHTML = getSeconds;

}, 1000)








