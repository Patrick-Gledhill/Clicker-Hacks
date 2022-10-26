"use strict"

var count = 0;
var btn = document.getElementById("btn");
var display = document.getElementById("display");
var upgrade = document.getElementById("upgrade");
var upgrade2 = document.getElementById("upgrade2");
var upgrade3 = document.getElementById("upgrade3");
var upgrade4 = document.getElementById("upgrade4");
var upgrade5 = document.getElementById("upgrade5");
var upgrade6 = document.getElementById("upgrade6");
var upgrade7 = document.getElementById("upgrade7");
var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");
var a3 = document.getElementById("a3");
var a4 = document.getElementById("a4");
var a5 = document.getElementById("a5");
var a6 = document.getElementById("a6");
var a7 = document.getElementById("a7");
var btnr = document.getElementById("btnr");
var btng = document.getElementById("btng");
var btnb = document.getElementById("btnb");
var showach = document.getElementById("showach");
var hideach = document.getElementById("hideach");
var achievements = document.getElementById("apm");

btn.onclick = function() {
    count += 1;
    display.innerHTML = count;
}

upgrade.onclick = function() {
    if (count >= 100) {
        (count -= 100);
        display.innerHTML = count;
        upgrade.style.display = "none";
        upgrade2.style.display = "block";
        a1.style.display = "block";
        
        btn.onclick = function() {
            count += 2;
            display.innerHTML = count;
        }
    }
}

upgrade2.onclick = function() {
    if (count >= 250) {
        (count -= 250);
        display.innerHTML = count;
        upgrade2.style.display = "none";
        upgrade3.style.display = "block";
        a2.style.display = "block";
        
        btn.onclick = function() {
            count += 4;
            display.innerHTML = count;
        }
    }
}

upgrade3.onclick = function() {
    if (count >= 500) {
        (count -= 500);
        display.innerHTML = count;
        upgrade3.style.display = "none";
        upgrade4.style.display = "block";
        a3.style.display = "block";
        
        btn.onclick = function() {
            count += 8;
            display.innerHTML = count;
        }
    }
}

upgrade4.onclick = function() {
    if (count >= 1000) {
        (count -= 1000);
        display.innerHTML = count;
        upgrade4.style.display = "none";
        upgrade5.style.display = "block";
        a4.style.display = "block";
        
        btn.onclick = function() {
            count += 16;
            display.innerHTML = count;
        }
    }
}

upgrade5.onclick = function() {
    if (count >= 2500) {
        (count -= 2500);
        display.innerHTML = count;
        upgrade5.style.display = "none";
        upgrade6.style.display = "block";
        a5.style.display = "block";
        
        btn.onclick = function() {
            count += 32;
            display.innerHTML = count;
        }
    }
}

upgrade6.onclick = function() {
    if (count >= 5000) {
        (count -= 5000);
        display.innerHTML = count;
        upgrade6.style.display = "none";
        upgrade7.style.display = "block";
        a6.style.display = "block";
        
        btn.onclick = function() {
            count += 64;
            display.innerHTML = count;
        }
    }
}

upgrade7.onclick = function() {
    if (count >= 10000) {
        (count -= 10000);
        display.innerHTML = count;
        upgrade7.style.display = "none";
        a7.style.display = "block";
        
        btn.onclick = function() {
            count += 128;
            display.innerHTML = count;
        }
    }
}

btnr.onclick = function() {
    btn.style.backgroundColor = "#ff0000";
    btn.style.boxShadow = "0px 0px 25px #ff0000";
}

btng.onclick = function() {
    btn.style.backgroundColor =  "#00ff00";
    btn.style.boxShadow = "0px 0px 25px #00ff00";
}

btnb.onclick = function() {
    btn.style.backgroundColor = "#0000ff";
    btn.style.boxShadow = "0px 0px 25px #0000ff";
}

showach.onclick = function() {
    achievements.style.display = "block";
    showach.style.display = "none";
    hideach.style.display = "block";
}

hideach.onclick = function() {
    achievements.style.display = "none";
    hideach.style.display = "none";
    showach.style.display = "block";
}