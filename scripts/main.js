
// DISTANCE
setTimeout(start, 200);

var i = 0;
var dNumber = document.getElementById('distanceNumber');

function start() {
  setInterval(increase, 200);
}

function increase() {
    if (i < 100000) { 
      i += 20;
      dNumber.innerText = i + ' miles';
  	}

// SPEED
   	if(i<=400){
		sNumber.innerText=1001+ ' km/h';
	}else if((i>=401) && (i<=600)){
		sNumber.innerText=1501 + ' km/h';
	}else if((i>=601) && (i<=1000)){
		sNumber.innerText=2001+ ' km/h';
	}else{
		sNumber.innerText=2500 + ' km/h';
	}


// FUEL 
	var fNumber = document.getElementById('fuelNumber');
	fNumber.innerText = 210000 - i/10000 + ' gal';
}


// SPEED
var sNumber = document.getElementById('speedNumber');



// FOOD 
var food = [' chicken burger', ' pork burger', ' beef burger', ' chicken curry', ' tofu curry', ' poached salmon', ' tuna salad.'];
var bestChoice = {
		calories: '472kcal',
		fat:'26g',
		saturates:'10g',
		sugars: '4g',
		salt: '1g',
		protein: '31.8g',
		corbohydrate: '28.8g',
		fiber: '2.2g',
		tasteIndex: '10/10'
}
	
	var foodNumber = document.getElementById('foodList');
	foodNumber.innerText=food;

	document.getElementById('best').innerHTML=food[2];

	document.getElementById('cal').innerHTML=bestChoice.calories;
	document.getElementById('sat').innerHTML=bestChoice.saturates;
	document.getElementById('sug').innerHTML=bestChoice.sugars;
	document.getElementById('sal').innerHTML=bestChoice.salt;
	document.getElementById('pro').innerHTML=bestChoice.protein;
	document.getElementById('car').innerHTML=bestChoice.corbohydrate;
	document.getElementById('fib').innerHTML=bestChoice.fiber;

