const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://rapidapi.p.rapidapi.com/multiplayer/MintDuramax/psn");
xhr.setRequestHeader("x-rapidapi-host", "call-of-duty-modern-warfare.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "339270cf41mshd309303d400772fp199434jsn8fd3dcc1061f");

xhr.send(data);











































const getBtn = document.getElementById('get-btn')
const postBtn = document.getElementById('post-btn');

const getData = () =>{
    var answer = document.getElementById('mwPlayer').value;
    var answer2 = document.querySelector('.dropdown-item');
    //var answer3 = document.getElementById('xblPlayer').value = "xbl";
    //var answer4 = document.getElementById('battlePlayer').value = "battle";
    console.log(answer);
    var tops ="https://call-of-duty-modern-warfare.p.rapidapi.com/multiplayer/" + answer + "/" + answer2;
    sendHttpRequest('GET', tops);
};
getBtn.addEventListener('click', getData)



answer2.addEventListener("click", (e) => {
    if(document.getElementsByClassName("1").value){
        answer2 = "psn"
    }else if(document.getElementsByClassName("2").value){
        answer2= "xbl"
    }else if(document.getElementsByClassName("3").value){
        answer2= "battle"
    }
})



const sendHttpRequest = (method, url) =>{
    const promise = new Promise((resolve, reject) =>{
    console.log(url);
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = () => {

        const data = JSON.parse(xhr.response)
        console.log(data)


        document.getElementById('info_assists').value = data.assists +" Best Assists";
        document.getElementById('info_bestDefends').value = data.bestDefends +" Best Defends";
        document.getElementById('info_bestDeaths').value = data.bestDeaths +" Best Deaths";
        document.getElementById('info_bestDenied').value = data.bestDenied +" Best Denied";
        document.getElementById('info_bestKD').innerHTML = "Stats";
        for(var x=0; x < data.assists.length;x++)
        {
            document.getElementById('info_assists').value += data.assists[x].move.name+","
        }
    }
            xhr.send()
            })
        };

        const postData = () =>{
            var answer = document.getElementById('post-btn').value;
            console.log(answer);
            var tops ="https://call-of-duty-modern-warfare.p.rapidapi.com/multiplayer/platform/" + answer;
            sendHttpRequest('POST', tops);
        };

        getBtn.addEventListener('click', getData)

