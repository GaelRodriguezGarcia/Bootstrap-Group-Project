//leaderboards snippet
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://rapidapi.p.rapidapi.com/leaderboard/1/battle");
xhr.setRequestHeader("x-rapidapi-host", "call-of-duty-modern-warfare.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "83aa5baadbmshe7c56c599629a16p15a3d0jsn10ae8eb01fc2");

xhr.send(data);

