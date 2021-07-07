


function meteooo(){
	var now = new Date();
var dateFormated = now.toISOString().substr(0,10);
console.log(moment().add(1, 'days').format('dddd'))
	const img = document.getElementById('temp');
	const p = document.getElementById('meteoDeg');
	const temp = document.getElementById('meteoDeg');
const input = document.getElementById('bouton').value;
console.log(input);
const url = 'https://api.openweathermap.org/data/2.5/weather?q='+input+'&units=metric&appid=512dca0407c17908d7fbbfb3694d7aa4';
fetch(url)
   .then(response => response.json())
   .then(data => {p.innerHTML =data.main.temp+"°C"; 
   	              console.log(data);
   	              switch (data.weather[0].main) {
   	              	case "Clear" : img.src="soleil.png";
   	              	break;
   	              	case "Thunderstorm" : img.src="tempete.png";
   	              	break;
   	              	case "Drizzle" : img.src="grizzle.png";
   	              	break;
   	              	case "Rain" : img.src="pluie.png";
   	              	break;
   	              	case "Snow" : img.src="neige.png";
   	              	break;
   	              	case "Clouds" : img.src="nuage.png";
   	              	break;

   	              }
   	                    })
var canvas = document.createElement('canvas');
canvas.id= "myChart";
canvas.height=80;


try {
var oldCanvas = document.querySelector("canvas");
document.body.removeChild(oldCanvas);
} catch (e) {
	console.error("old canvas n'existe pas");
}
document.body.appendChild(canvas);
 var ctx = document.getElementById('myChart').getContext('2d');
 console.log(canvas.height);
 const urlDeux = 'http://api.openweathermap.org/data/2.5/forecast?q='+input+'&units=metric&appid=5b1d240901dad514e9532c4b1bb0d094';
  fetch(urlDeux)
   .then(response => response.json())
   .then(data => {console.log(data);Chart.defaults.datasets.line.showLine = true;

// This chart would show a line only for the third dataset

var chart = new Chart(ctx, {

    type: 'line',
    data: {

    	labels:[data.list[0].dt_txt,data.list[1].dt_txt,data.list[2].dt_txt,data.list[3].dt_txt,
    	data.list[4].dt_txt,data.list[5].dt_txt,data.list[6].dt_txt,data.list[7].dt_txt,data.list[8].dt_txt,
    	data.list[9].dt_txt,data.list[10].dt_txt,data.list[11].dt_txt,data.list[12].dt_txt,data.list[13].dt_txt,
    	data.list[14].dt_txt,data.list[15].dt_txt,data.list[16].dt_txt,data.list[17].dt_txt,data.list[18].dt_txt,
    	data.list[19].dt_txt,data.list[20].dt_txt,data.list[21].dt_txt,data.list[22].dt_txt,data.list[23].dt_txt,
    	data.list[24].dt_txt,data.list[25].dt_txt,data.list[26].dt_txt,data.list[27].dt_txt,data.list[28].dt_txt,
    	data.list[29].dt_txt,data.list[30].dt_txt,data.list[31].dt_txt,data.list[32].dt_txt,data.list[33].dt_txt,
    	data.list[34].dt_txt,data.list[35].dt_txt,data.list[36].dt_txt,data.list[37].dt_txt,data.list[38].dt_txt,data.list[39].dt_txt],
        datasets: [{
        	label:"Degrées",
        	backgroundColor: "black",
        	borderColor:"red",
            data: [data.list[0].main.temp,data.list[1].main.temp,data.list[2].main.temp,data.list[3].main.temp,data.list[4].main.temp,data.list[5].main.temp,data.list[6].main.temp,data.list[7].main.temp,data.list[8].main.temp
            ,data.list[9].main.temp,data.list[10].main.temp,data.list[11].main.temp,data.list[12].main.temp,data.list[13].main.temp,data.list[14].main.temp,data.list[15].main.temp,data.list[16].main.temp,data.list[17].main.temp
            ,data.list[18].main.temp,data.list[19].main.temp,data.list[20].main.temp,data.list[21].main.temp,data.list[22].main.temp,data.list[23].main.temp,data.list[24].main.temp,data.list[25].main.temp,data.list[26].main.temp
            ,data.list[27].main.temp,data.list[28].main.temp,data.list[29].main.temp,data.list[30].main.temp,data.list[31].main.temp,data.list[32].main.temp,data.list[33].main.temp,data.list[34].main.temp,data.list[35].main.temp
            ,data.list[36].main.temp,data.list[37].main.temp,data.list[38].main.temp,data.list[39].main.temp]
        }]
    }
});})
// Do not show lines for all datasets by default

  }

    