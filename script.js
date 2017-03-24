//1

function exPrint100()
{
	console.log('#1 printing integers from 0 to 100 using "while": ')

	var a = 100, i = 0;
	//document.write('Print from 0 to 100 by "While"');
	//document.write('A = ' + a);
	while (i <= a) {
	//	document.write();
		console.log(i);
		i++;
	}
}

function exDoWile0100()
{
	console.log('#2 printing integers from 0 to 10 and text messages using "do while": ')
	var a = 10, i = 0;

	do {
		if (i == 0) {
			console.log(i + '- this is zero!');
			i++;
			continue;
		} else if (i % 2 == 0) {
			console.log(i + '- this is an even integer');
		} else {
			console.log(i + '- this is an odd integer');
		}
		i++;
	} while (i <= a);
}

function exFor()
{
	console.log('#3 printing integers from 0 to 9 using "for" without body operators: ');

	for (var i = 0; i < 10; console.log(i++))
	{}
}


function exPyramid(i, a, str = '*')
{
	
	if (i == a) {
		console.log(str);
	} else {
		console.log(str);
		exPyramid(++i, a, str += '*');
	}
}




exPrint100();
exDoWile0100();
exFor();
exPyramid(0, 20);


