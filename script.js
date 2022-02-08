const update=()=>
{
    let date = new Date();
    let s=date.getSeconds();
    let m=date.getMinutes();
    let h=date.getHours();
    let ampm;
    document.getElementById("second").style.transform=`rotate(${s*6}deg)`;
    document.getElementById("minute").style.transform=`rotate(${m*6+s/10}deg)`;
    document.getElementById("hour").style.transform=`rotate(${h*30+m/2}deg)`;
        if(h>=12)
    ampm="PM";
    else 
    ampm="AM";
    document.getElementById("ampm").innerText=ampm;
}
setInterval(update,1000);
