const app = document.getElementById("fin");
var s = window.localStorage;
var thing = s.getItem("finsStuff")
app.innerHTML += thing;
