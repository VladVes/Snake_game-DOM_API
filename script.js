//специальный класс для работы с AJAX 
//XMLHttpRequest 
console.log('It works!');

//проверка поддержки

var xhr;

if(window.XMLHttpRequest) { //если браузер нормальный то класс поддерживается
	xhr = new XMLHttpRequest; 
} else {
	xhr = new ActiveXObject('Microsoft.XMLHTTP'); // если старый експлорер то создаем объект этим способом
}

//некоторые верисии моззилы могут не работать с ответом от сервера если в нем нет заголовка MimeType
//это проблема бэкенда, но можно решить и средствами js переопределив заголовок и указав тип содержимого:
//xhr.overrideMineType('application/json') //переопределение 



//ОТПРАВКА ЗАПРОСА НА СЕРВЕР

xhr.open('get', 'http://www.github.com', true)
// - метод передачи запроса
//- URL
//- true - асинхронный (работает как бы в фоне, т.е. страница не будет ждать когда придет ответ, она будет
//функционировать как раньше),
// false - синхронный - "заблокироует" работу страницы до тех пор пока не придет ответ - АНТИПАТТЕРН, 
// не рекомендуется использовать!


xhr.timeout = 15000; //ждем ответа 15с после чего будет выдана ошибка

xhr.ontimeout = function() { //обработчик вызываемый в случае наступления таймаута
	console.log('Страница обновляется дольше обычного...');
}

//метод для отправки запроса
// xhr.send('param1=value1&param2=value2'); //в качестве аргуметов может передаватся строка запроса понимаемая 
//бекэндом
//В данном примере параметров нет, получем просто главную страницу с гитхаба
xhr.send();



//когда приходят данные их нужно как то обработать,
// назначение обработчика: (когда как-то меняется статус AJAX запроса... (этих статусов несколько))
xhr.onreadystatechange = function() {

	//свойство содержащее состояния объекта XMLHttpRequest
	
	//xhr.readyState = 0; //когда только создали
	//xhr.readyState = 1; //когда осуществляется загрузка
	//xhr.readyState = 2; //когда запрос принят
	//xhr.readyState = 3; //когда обмен данными осуществляется
	//xhr.readyState = 4; //когда запрос выполене

	//в соотвествии со статусум производятся нужные действия
	//к примеру когда пришел ответ от сервира проверяем
	//if(xhr.readyState == 4); //когда запрос выполенен	
	//но для этого существует спец константа и правильнее использовать её:
	if(xhr.readyState == XMLHttpRequest.DONE) {
		if(xhr.status == 200) {//дополнительно проверяется код ошибки возвращаемый сервером
			//200  означает что все хорошо //коды ответов веб сервера ..

//ПОЛУЧЕНИЕ ОТВЕТА 
			//xhr.responseText //ответ в виде строки
			//xht.responseXML //в формате xml (если сервер отправляет в xml)

			console.log(xhr.responseText);

		}
	}

}