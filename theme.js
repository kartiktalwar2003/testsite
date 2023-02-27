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
        var svg = document.getElementById("svg2");
        svg.innerHTML = response;
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
        var svg = document.createElement("svg");
        svg.innerHTML = response;
        document.body.appendChild(svg);
    });
    request.send();
}

$(document).ready(function () {
    changeBackground();
});
