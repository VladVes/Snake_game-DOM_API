var FILD_SIZE_X = 20;
var FILD_SIZE_Y = 20;
var SNAKE_SPEED = 300;
var NEW_FOOD_TIME = 5000;

var isGameRunning = false;
var snakeTimer;
var snake = [];
var direction = 'x-';



function init() {
	var startButton = document.getElementById('snake-start');
	startButton.addEventListener('click', startGame);

	var renewButton = document.getElementById('snake-renew');
	renewButton.addEventListener('click', renewGame);

	//слушаем события на окне
	addEventListener('keydown', changeDirection);

	bildGameFild();
}

function bildGameFild()
{
	var gameTable = document.createElement('table');
	gameTable.classList.add('game-table');

	for (var i = 0; i < FILD_SIZE_X; i++) {
		var row = document.createElement('tr');
		row.classList.add('game-table-row');
		row.classList.add('row-' + i);

		for (var j = 0; j < FILD_SIZE_Y; j++) {
			var cell = document.createElement('td');
			cell.classList.add('game-table-cell');
			cell.classList.add('cell-' + i + "-" + j);

			row.appendChild(cell);
		}
		gameTable.appendChild(row);
	}
	document.getElementById('snake-field').appendChild(gameTable);
}


function changeDirection(event)
{
	//код нажатой клавиши
	switch (event.keyCode) {
		case 37:
			if (direction != 'y+') {
				direction = 'y-';
			}
			break;
		case 38:
			if (direction != 'x+') {
				direction = 'x-';
			}
			break;
		case 39:
			if (direction != 'y-') {
				direction = 'y+';
			}
			break;
		case 40:
			if (direction != 'x-') {
				direction = 'x+';
			}
			break;
	}
}

function startGame()
{
	isGameRunning = true;
	respawn(); //очищает игровое поле и размещает змейку

	snakeTimer = setInterval(move, SNAKE_SPEED); //змейка всевремя провдигается вперед на одну клетку через интервал времени
	setTimeout(createFood, NEW_FOOD_TIME);

}

function respawn()
{
	//начальная позиция в центре
	var startCoordX = Math.floor(FILD_SIZE_X / 2);
	var startCoordY = Math.floor(FILD_SIZE_Y / 2);

	var snakeHead = document.getElementsByClassName('cell-' + startCoordX + '-' + startCoordY)[0]; //т.к. возвращается коллекция, то берем певый элемент (он же и единственный)
	snakeHead.classList.add('snakeUnit');

	var snakeTail = document.getElementsByClassName('cell-' + (startCoordX - 1) + '-' + startCoordY)[0]; //т.к. возвращается коллекция, то берем певый элемент (он же и единственный)
	snakeTail.classList.add('snakeUnit');

	snake.push(snakeHead);
	snake.push(snakeTail);
}


function move()
{
	//console.log(snake);
	var snakeHeadClasses = snake[snake.length - 1].classList;
	//console.log(snakeHeadClasses);

	//следующая клетка которую займет змейка
	var newUnit;

	//получае координаты головы
	var snakeCoords = snakeHeadClasses[1].split('-');

	var coordX = parseInt(snakeCoords[1]);
	var coordY = parseInt(snakeCoords[2]);

	switch (direction) {
		case 'x-':
			newUnit = document.getElementsByClassName('cell-' + (coordX - 1) + '-' + coordY)[0];
			break;
		case 'x+':
			newUnit = document.getElementsByClassName('cell-' + (coordX + 1) + '-' + coordY)[0];
			break;
		case 'y-':
			newUnit = document.getElementsByClassName('cell-' + coordX + '-' + (coordY - 1))[0];
			break;
		case 'y+':
			newUnit = document.getElementsByClassName('cell-' + coordX + '-' + (coordY + 1))[0];
			break;
	}

	if(newUnit !== undefined && !newUnit.classList.contains('snakeUnit')) {
		newUnit.classList.add('snakeUnit');
		snake.push(newUnit);

			if(!newUnit.classList.contains('foodUnit')) {
				var removed = snake.splice(0, 1)[0];
				removed.classList.remove('snakeUnit');
			} else {
				newUnit.classList.remove('foodUnit');
				createFood();
			} 
		}else {
			finishGame();

	}

}

function createFood()
{
	var foodCreated = false;

	while(!foodCreated) {
		//случайные координаты для еды
		var foodX = Math.floor(Math.random() * FILD_SIZE_X);
		var foodY = Math.floor(Math.random() * FILD_SIZE_Y);
		var foodCell = document.getElementsByClassName('cell-' + foodX + '-' + foodY)[0];
		
		//если координата не пренадлежить змейке (т.е. если у нее нет класса snakeUnit)
		if (!foodCell.classList.contains('snakeUnit'))
		{
			
			foodCell.classList.add('foodUnit');
			foodCreated = true;

		}
	}
}

function finishGame()
{
	clearInterval(snakeTimer);
	isGameRunning = false;
	alert('GAME OVER');
}


function renewGame()
{
	//location хранит текущий URL
	location.reload();
}



window.onload = init();