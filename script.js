var shown = false;
function showhideEmail() {
	if(shown) {
		document.getElementById('email').innerHTML = "<h3>Click to show my email<h3>";
		shown = false;
	}
	else {
		var myemail = "<h3><a href='mailto:polojb" + "@" + "mail.uc.edu'>polojb" + "@" + "mail.uc.edu</a></h3>";
		document.getElementById('email').innerHTML = myemail;
		shown = true;
	}
}

function displayTime() {
	document.getElementById('digit-clock').innerText = "Current time: " + new Date();
}
setInterval(displayTime, 500);

var canvas = document.getElementById("analog-clock");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90;
setInterval(drawClock, 1000);

function drawClock() {
	drawFace(ctx, radius);
	drawNumbers(ctx, radius);
	drawTime(ctx, radius);
}

function fetchJoke() {
	$.get("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit&type=single",
		 function (result) {
			$("#response").html("<strong>A joke every minute:</strong> " + result.joke);
	});
}
fetchJoke();
setInterval(fetchJoke, 60000);

const apiKey = "fbb84a6141ba728b9a5ac7f9708ae071";

$("#getWeather").click(() => {
	const city = $("#cityInput").val().trim();
	if (!city) return;

	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

	$.get(url, function (data) {
	const iconCode = data.weather[0].icon;
	const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

	$("#weatherResult").html(`
  		<div class="card text-center p-3 shadow-sm" style="max-width: 300px; margin: auto;">
    		<img src="${iconUrl}" alt="Weather icon" class="mx-auto" style="width: 80px; height: 80px;">
    		<h4 class="mt-2 mb-1">${data.name}</h4>
    		<p class="mb-1"><strong>${Math.floor(data.main.temp)} °F</strong></p>
    		<p class="text-capitalize text-muted mb-0">${data.weather[0].description}</p>
  		</div>
	`);
	
	}).fail(() => {
	$("#weatherResult").html("<p>Error: Could not fetch weather. Check city name.</p>");
	});
});

async function guessAge(name) {
	const response = await fetch("https://api.agify.io/?name=" + encodeURIComponent(name));
	const result = await response.json();
	$("#response-age").text("Hi " + name + ", your age should be " + result.age);
}

$(document).ready(function () {
	$("#guessButton").on("click", function () {
		const name = $("#data").val();
		if (name.trim() !== "") {
			guessAge(name);
		} else {
			$("#response-age").text("Please enter a name.");
		}
	});
});

const lastVisit = document.cookie;

if (!lastVisit) {
  $("#cookieMessage").html("<h3 class='text-center mt-5'>Welcome to my homepage for the first time!</h3>");
} else {
  $("#cookieMessage").html(`<h3 class="text-center mt-5">Welcome back! Your last visit was ${decodeURIComponent(new Date)}</h3>`);
}