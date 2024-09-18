function clockUpdate(){

    const timeelement=document.getElementById("time");
    const now=new Date();

    let hours=now.getHours();
    let minutes=now.getMinutes();
    let second=now.getSeconds();
    let ampm=hours>=12?"PM":"AM";

    hours=hours%12;
    hours=hours?hours:"12";

    hours=String(hours).padStart(2,'0');
    minutes=String(minutes).padStart(2,'0');
    second=String(second).padStart(2,'0');

    const currenttime=`${hours}:${minutes}:${second}:${ampm}`

    timeelement.textContent=currenttime;



}
setInterval(clockUpdate,1000)
clockUpdate();
