var isim = prompt("Lütfen adınızı yaziniz.");
isim != "" ? (document.querySelector('#myName').innerHTML=`${isim}`) : alert("LÜTFEN İSİM GİRİNİZ!!")


function showTime() {
var date = new Date();
var day = date.getDay();
switch(day){
    case 0 :
        day = "Pazar";
        break;
    case 1 :
        day = "Pazartesi"
        break;
    case 2 :
        day = "Salı";
        break;
    case 3 :
        day = "Çarşamba"
        break;
     case 4 :
        day = "Perşembe";
        break;
    case 5 :
        day = "Cuma";
        break;
    case 6 :
        day = "Cumartesi";
        break;
    
}

var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();

hour =     hour < 10 ? "0" + hour : hour;
minute = minute < 10 ? "0" + minute : minute;
second = second < 10 ? "0" + second : second;

document.querySelector('#myClock').innerHTML = `${hour}/${minute}/${second}  ${day}` ;
setTimeout(showTime,1000);

}

showTime();



