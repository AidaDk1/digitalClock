function getCurrentTime() {
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();
 let pmam = (hour < 12) ? "<span>AM</span>" : "<span>PM</span>";
  hour = (hour == 0) ? 12 : hour;
  hour = (hour > 12) ? hour - 12 : hour;
 
  hour = checkTime(hour);
  min = checkTime(min);
  sec = checkTime(sec);
  document.getElementById("digitalClock").innerHTML = hour + ":" + min + ":" + sec + " " + pmam;
  
  let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
   'August', 'September', 'October', 'November', 'December'];
  let day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let curWeek = day[today.getDay()];
  let curDay = today.getDate();
  let curMonth = month[today.getMonth()];
  let curYear = today.getFullYear();
  let date = curWeek+", "+curDay+" "+curMonth+" "+curYear;
  document.getElementById("date").innerHTML = date;
  
  let time = setTimeout(function(){ getCurrentTime();}, 500);
}
function checkTime(b) {
  if (b < 10) {
      b = "0" + b;
  }
  return b;
}