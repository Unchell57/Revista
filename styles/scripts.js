let f = async function() {

	let response = await fetch("https://iss.moex.com/iss/engines/stock/markets/shares/securities/SELG.json");
	let json;

	if (response.ok) {
		console.log(response); 
	  	json = await response.json();
	} else {
	  	alert("Ошибка HTTP: " + response.status);
	}

	console.log(json.marketdata.data[1][50]);

	let capit = "<br>" + format(json.marketdata.data[1][50]/1000000000) + " млрд. рублей";

	console.log(capit);

	let input = document.querySelector(".capit");

	input.innerHTML += capit;
}

function format(numb) {
  return new Intl.NumberFormat('ru-RU').format(numb);

}

f();