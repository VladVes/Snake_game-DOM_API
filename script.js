//базовый класс 
function Machine() 
{
	var enabled = false; //машина включена или выключена

	this.enanble = function() {//включить машину
		enabled = true;
	}

	thid.disable = function() {//выключить машину
		enabled = false;
	}

	this.toggle = function() {
		ensbled = !ensbled;
	}
}

// 1.30


function Car(consumption) 
{
	this.fuelAmout = 0; // публичное свойство!
	var someVar; //приватное свойство
	var FULL_CAPACITY = 100;

	var self = this; //СОХРАНЯЕМ КОНТЕКСТ В ЗАМЫКАНИИ!!!

	console.log('New car has been build with fuel consumption = ' + consumption);

	//приватные методы
	function getEmptyTime(speed)
	{
		
		return ((self.fuelAmount / consumption) * FULL_CAPACITY) / speed;
	}


	function onEmpty() 
	{
		console.log('fuel is over!');
	}


	//публичный метод
	this.drive = function(speed) 
	{
		setTimeout(onEmpty, getEmptyTime(speed)); 
		//потеря контекста можно решить так getEmptyTime.call(this, speed) this т.к. в этой функции ("drive")
		//контекст известен поотму можно передать напрямую this

		//можно также getEmptyTime.applay(this, [speed])
		//

		//Можно даже с помощью bind зафиксировать контекст написав конструкцию:
		/*
		
		function getEmptyTime(speed){
		return ((this.fuelAmount / consumption) * FULL_CAPACITY) / speed;}.bind(this); //!!!

		*/

		//НО ОБЫЧНО КОНТЕКСТ ПРОСТО СРАЗУ СОХРАНЯЮТ В ЗАМЫКАНИИ!!! var self = this;
		//И ДАЛЕЕ ВМЕСТО this ИСПОЛЬЗУЕТСЯ self

	}

}

var ladaKalina = new Car(9);
ladaKalina.fuelAmout = 30;
ladaKalind.drive(90);

