//1
function createObjFromNum(num)
{
	var obj = {}, props = ['units', 'dozens', 'hundreds'], arg = number(num), i = 0;
	if (typof(num) == 'number') {
		arg = num;
		
		if (arg < 0 || arg > 999) {
			console.log('incorrect range of argument! It must be from 0 to 999');
			return false;
		}

		while(i <= props.length) {
			obj[prop[i++]] = arg % 10;
			arg = Math.floor(arg / 10);
			
		} return obj;

	
	} else {
		console.log('wrong type of argument!');
		return false;
	}



}

createObjFromNum(567);


