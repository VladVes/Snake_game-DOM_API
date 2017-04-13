//базовый класс 
function Machine(consumption) 
{
	this._consumption;
	this._enabled = false; //машина включена или выключена
	//_enable - принято перед внутренними свойствами класса (типа приватными) 
	//ставить подчеркивание говорящее о том, что это свойстов защищено

	this.enanble = function() {//включить машину
		this._enabled = true;
	}

	this.disable = function() {//выключить машину
		this._enabled = false;
	}

	//инетерсный варриант переключения!
	this.toggle = function() {
		this._ensbled = !this._ensbled;
	}
}



function Car(consumption) 
{
	//реализация НЕАСЛЕДОВАНИЯ в ES5 !!!
	//"вложенный конструктор"
	Machine.apply(this, arguments); //при вызове фнкуции-конструктороа Machin с переданным контекстом объекта Car
	//получается, что в this записываются методы и свойства из Machine!!!
	//
	//arguments - массив всех аргументов которые были переданы в верхнюю функцию

	this.fuelAmout = 0; // публичное свойство!
	var someVar; //приватное свойство
	var FULL_CAPACITY = 100; //приватное свойство-константа в ES5

	var self = this; //СОХРАНЯЕМ КОНТЕКСТ В ЗАМЫКАНИИ - VAR self - локальное(приватное) свойство которые
	//попадает в замыкание!!!

	console.log('New car has been build with fuel consumption = ' + self._consumption);

	//приватные методы
	function getEmptyTime(speed)
	{
		
		return ((self.fuelAmount / self._consumption) * FULL_CAPACITY) / speed;
	}


	function onEmpty() 
	{
		console.log('fuel is over!');
	}


	//публичный метод
	this.drive = function(speed) 
	{
		if(self._enabled) {
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

	//переопределение или доплнение методов родителя
	
	var parentEnable = self.enable;// сохраняем исходный родительский метод в замыкании Car
	
	self.enable = function() // дополняем или переопределяем фнкуцию
	{
		self.fuelAmout--; //выполняем новую часть функции
 
		parentEnable.call(self); //вызываем старую часть функции с передачей контекста т.к. сама 
		//родительская функция использует указатель this внутри себя!
	}




	}

}

var ladaKalina = new Car(9);
ladaKalina.fuelAmout = 30;
ladaKalina.enabled();
ladaKalind.drive(90);

