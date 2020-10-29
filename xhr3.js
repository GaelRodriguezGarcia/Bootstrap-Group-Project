
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


xhr.onload = () => {
	const info = JSON.parse(xhr.response);
	console.log(info);
	//Displays The Players Username
	document.getElementById('gamer1').textContent = info.entries[0].username;
    document.getElementById('gamer2').textContent = info.entries[1].username;
    document.getElementById('gamer3').textContent = info.entries[2].username;
    document.getElementById('gamer4').textContent = info.entries[3].username;
	document.getElementById('gamer5').textContent = info.entries[4].username;
	document.getElementById('gamer6').textContent = info.entries[5].username;
    document.getElementById('gamer7').textContent = info.entries[6].username;
    document.getElementById('gamer8').textContent = info.entries[7].username;
    document.getElementById('gamer9').textContent = info.entries[8].username;
	document.getElementById('gamer10').textContent = info.entries[9].username;
	//Displays The Players Win Count
	document.getElementById('wins1').textContent = info.entries[0].values.wins;
    document.getElementById('wins2').textContent = info.entries[1].values.wins;
    document.getElementById('wins3').textContent = info.entries[2].values.wins;
    document.getElementById('wins4').textContent = info.entries[3].values.wins;
	document.getElementById('wins5').textContent = info.entries[4].values.wins;
	document.getElementById('wins6').textContent = info.entries[5].values.wins;
    document.getElementById('wins7').textContent = info.entries[6].values.wins;
    document.getElementById('wins8').textContent = info.entries[7].values.wins;
    document.getElementById('wins9').textContent = info.entries[8].values.wins;
	document.getElementById('wins10').textContent = info.entries[9].values.wins;
	//Displays The Players KD Ratio
	document.getElementById('kd1').textContent = info.entries[0].values.kdRatio;
    document.getElementById('kd2').textContent = info.entries[1].values.kdRatio;
    document.getElementById('kd3').textContent = info.entries[2].values.kdRatio;
    document.getElementById('kd4').textContent = info.entries[3].values.kdRatio;
	document.getElementById('kd5').textContent = info.entries[4].values.kdRatio;
	document.getElementById('kd6').textContent = info.entries[5].values.kdRatio;
    document.getElementById('kd7').textContent = info.entries[6].values.kdRatio;
    document.getElementById('kd8').textContent = info.entries[7].values.kdRatio;
    document.getElementById('kd9').textContent = info.entries[8].values.kdRatio;
    document.getElementById('kd10').textContent = info.entries[9].values.kdRatio;
}

