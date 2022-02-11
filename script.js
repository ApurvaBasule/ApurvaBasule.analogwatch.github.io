setInterval(() => {
   let d = new Date();
    let htimes = d.getHours();
    let mtimes = d.getMinutes();
    let stimes = d.getSeconds();
    let hrotation = 30*htimes + mtimes/2;
    let mrotation = 6*mtimes;
    let srotation = 6*stimes;

    Hours.style.transform = `rotate(${hrotation}deg)`;
    Minutes.style.transform = `rotate(${mrotation}deg)`;
    Seconds.style.transform = `rotate(${srotation}deg)`;
}, 1000);