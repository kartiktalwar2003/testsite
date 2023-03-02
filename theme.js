function fetchSVG(option) {
    var request = new XMLHttpRequest();
    if (option == "day") {
        request.open("GET", "day.svg");
    }
    else {
        request.open("GET", "noight.svg");
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
    if (current_hour > 6 && current_hour < 18) {
        var bg_div = document.getElementsByClassName("bg")[0];
        bg_div.style.display = "block";
    }
    else {
        var bg_div = document.getElementsByClassName("bg2")[0];
        bg_div.style.display = "block";
    }
}

$(document).ready(function () {
    changeBackground();
    getSVGS();
});


//Function to get both svg in hidden form in div bg
function getSVGS() {
    var request = new XMLHttpRequest();
    request.open("GET", "day.svg");
    request.setRequestHeader("Content-Type", "image/svg+xml");
    request.addEventListener("load", function (event) {
        var response = event.target.responseText;
        var bg_div = document.getElementsByClassName("bg")[0];
        bg_div.innerHTML = response;
    });
    request.send();

    var request = new XMLHttpRequest();
    request.open("GET", "noight.svg");
    request.setRequestHeader("Content-Type", "image/svg+xml");
    request.addEventListener("load", function (event) {
        var response = event.target.responseText;
        var bg_div = document.getElementsByClassName("bg2")[0];
        bg_div.innerHTML = response;
    });
    request.send();
}


document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (event) => {
        var day_svg = document.querySelector('.bg');
        var night_svg = document.querySelector('.bg2');

        var secondImageClick = Boolean(event.target.closest('.moon-object'));
        var firstImageClick = Boolean(event.target.closest('.sun-object'));

        if (firstImageClick) {
            day_svg.style.display = 'none';
            night_svg.style.display = 'block';
        } else if (secondImageClick) {
            day_svg.style.display = 'block';
            night_svg.style.display = 'none';
        }

    })
})
