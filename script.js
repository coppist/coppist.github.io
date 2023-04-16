// Tofn-Go
var timerTofnTime = setInterval(function time() {
    var date = new Date();

    if (date.getMinutes() < 10) {
        var min = "0" + date.getMinutes();
    } else {
        var min = date.getMinutes();
    };

    document.getElementById("tofnTime").innerHTML = date.getHours() + ":" + min;
}, 1000);

var timerTofnDate = setInterval(function time() {
    var date = new Date();

    if (date.getDay() == 0) {
        var day = date.getDay() + 7;
    } else {
        var day = date.getDay();
    }
    document.getElementById("tofnDate").innerHTML = "D" + day;
}, 1000);

// Dock-Time
var timerDockTime = setInterval(function time() {
    var date = new Date();

    document.getElementById("time").innerHTML = date.getDate();
}, 1000);

// Dock-App

// Open View at first, App at second, 0.2s.
function appDisplay() {
    document.getElementById("view").style.display = "grid";

    var opacity = 0;
    var timer = setInterval(function demo() {
        if (opacity >= 100) {
            document.getElementById("app").style.display = "grid";
            clearInterval(timer);
        } else {
            opacity = opacity + 5;
            console.log(opacity)
            document.getElementById("view").style.opacity = opacity + "%";
        }
    }, 15);
}

// Close App at first, View at second, 0.2s.
function appNone() {
    document.getElementById("app").style.display = "none";

    var opacity = 100;
    var timer = setInterval(function demo() {
        if (opacity <= 0) {
            document.getElementById("view").style.display = "none";
            clearInterval(timer);
        } else {
            opacity = opacity - 5;
            document.getElementById("view").style.opacity = opacity + "%";
        }
    }, 10);
}

// Search
function search() {
    var searchValue = "https://www.baidu.com/s?word=" + document.getElementById("searchInput").value;
    
    window.open(searchValue);
    document.getElementById("searchInput").value = null;
}

var tofnGoValue = false;
function tofnGo() {
    if (tofnGoValue == false) {
        tofnGoValue = true;
        document.getElementById("search").style.display = "grid";
    } else {
        tofnGoValue = false;
        document.getElementById("search").style.display = "none";
    }
}