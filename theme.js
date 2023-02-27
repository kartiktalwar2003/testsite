// Provides background image and greeting based on time of day
function changeBackground() {
    var date = new Date();
    var current_hour = date.getHours();
    if (current_hour > 6 && current_hour < 18) {
        document.getElementById("time").innerHTML = "Good morning";
        document.body.style.backgroundImage = "url('images/best day.svg')";
    } else {
        var element = document.body;
        element.classList.add("dark-mode");
        document.getElementById("time").innerHTML = "Good Night";
        element.style.backgroundImage = "url('images/best night.svg')";
    }
}

$(document).ready(function () {
    changeBackground();
});

// Create a function to change the background image on toggle
function changeBackgroundToggle() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    if (element.classList.contains("dark-mode")) {
        document.getElementById("time").innerHTML = "Good Night";
        element.style.backgroundImage = "url('images/best night.svg')";
    } else {
        document.getElementById("time").innerHTML = "Good morning";
        element.style.backgroundImage = "url('images/best day.svg')";
    }
}

$(document).ready(function () {
    $('.sun').click(function () {
        // $(this).next('ul').slideToggle('500');
        $(this).find('i').toggleClass('fa-solid fa-sun fa-solid fa-moon');
        changeBackgroundToggle();
    });
});