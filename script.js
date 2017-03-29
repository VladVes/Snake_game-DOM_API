//1
var audiA5 = {
	make: 'Audi',
	model: 'A5',
	year: 2015,
	color: 'red',
	seats: 2,
	power: 225,
	drive: function() {//метод 
	}
};


audiA5.price = 1000000; //добавили новое свойство price

delete audiA5.price; //удалить свойство

var car = {
	mileage: 0,
	drive: function(km) {
		this.mileage += km;	
	}
}
car.drive(100);

for (prop in audiA5) {
	console.log(prop + ':' + audiA5[prop]);
}

if ('make' in audiA5) {
console.log('Make is in audiA5!');
}else console.log('Make is NOT in audiA5!');

if ('make' in audiA5 && car.make == 'Audi') {
console.log('Make is in audiA5!');
}else console.log('Make is NOT in audiA5!');

