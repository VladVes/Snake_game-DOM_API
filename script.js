var a = 50;
var b = 70;
var c = null;
var d = 0;
var res;

function compare(a, b)
{
	if (a >= 0 && b >= 0) {
		res = a - b;
		alert('a - b = ' + res);
	}else if (a <0 && b < 0) {
		res = a * b;
		alert('a + b = ' + res);
	}else {
		res = a + b;
		alert('a + b = ' + res);
	}
}


compare(a, b);

a = 10;

switch (a) {
	case 1:
		alert('1');
	case 2:
		alert('2');
	case 3:
		alert('3');
	case 4:
		alert('4');
	case 5:
		alert('5');
	case 6:
		alert('6');
	case 7:
		alert('7');
	case 8:
		alert('8');
	case 9:
		alert('9');
	case 10:
		alert('10');
	case 11:
		alert('11');
	case 12:
		alert('12');
	case 13:
		alert('13');	
	case 14:
		alert('14');
	case 15:
		alert('15');
		break;
}


function sum(a, b)
{
	return a + b;
}

function subtr(a, b)
{
	return a - b;
}

function div(a, b)
{
	return a / b;
}

function mult(a, b)
{
	return a * b;
}

function math(a, b, operation)
{
	switch (operation){
		case '+':
			res = sum(a,b);
			alert('Operation + ' + res);
			break;
		case '-':
			res = subtr(a,b);
			alert('Operation - ' + res);
			break;	
		case '/':
			res = div(a,b);
			alert('Operation / ' + res);
			break;	
		case '*':
			res = mult(a,b);
			alert('Operation * ' + res);
			break;	
	}
}

math(a, b, '+');
math(a, b, '-');
math(a, b, '/');
math(a, b, '*');

if (c == d) {
		alert ('c is ' + c + 'and d is ' + d + ' c = d ');
}else if (c > d) {
		alert ('c is ' + c + 'and d is ' + d + ' c > d');
}else if (c < d) {
		alert ('c is ' + c + 'and d is ' + d + ' c < d');
}else if (c === d){
	alert ('c is ' + c + 'and d is ' + d + ' c === d');
}else alert ('c is ' + c + ' and d is ' + d + ' c != d');


function power(val, pow)
{
	if (pow == 1) {
	  return(val);
	 } else return (val * power(val, --pow));
}


res = power(2, 8);
alert('power(2, 8); Recursion is ' + res);








