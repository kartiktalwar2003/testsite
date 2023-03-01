function fetchSVG(option) {
    var request = new XMLHttpRequest();
    if (option == "day") {
        request.open("GET", "day.svg");
    }
    else {
        request.open("GET", "night.svg");
    }
    request.setRequestHeader("Content-Type", "image/svg+xml");
    request.addEventListener("load", function (event) {
        var response = event.target.responseText;
        document.getElementsByClassName("bg")[0].innerHTML = response;
    });
    request.send();
}


// Provides background image and greeting based on time of day
function changeBackground() {
    var date = new Date();
    var current_hour = date.getHours();
    var request = new XMLHttpRequest();
    if (current_hour > 6 && current_hour < 18) {
        request.open("GET", "day.svg");
    }
    else {
        request.open("GET", "night.svg");
    }
    request.setRequestHeader("Content-Type", "image/svg+xml");
    request.addEventListener("load", function (event) {
        var response = event.target.responseText;
        // var svg = document.createElement("svg");
        var bg_div = document.getElementsByClassName("bg")[0];
        // console.log(bg_div);
        bg_div.innerHTML = response;
        // document.body.appendChild(bg_div);
    });
    request.send();
}

$(document).ready(function () {
    changeBackground();
});