var today = new Date();
var hourNow = today.getHours();
var greeting;
if (hourNow > 18) greeting = 'Good evening';
else if (hourNow > 12) greeting = 'Good afternoon';
else if (hourNow > 0) greeting = 'Good morning';
else greeting = 'Welcome';
document.write(greeting);
document.write("<br>");
var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();
var time = hours + " : " + minutes + " : " + seconds;
document.write(time);

//# sourceMappingURL=hello.7e048d94.js.map
