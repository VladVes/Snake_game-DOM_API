console.log('Start!');

var menuItems = [
	{title: 'Main', href: '#'},
	{title: 'Products', href: '#'},
	{title: 'About', href: '#'},
	{title: 'Contacts', href: '#'}
	];

//console.log(menuItems);

function MainMenu(items)
{
	this.parentElementId; //outer container
	
	var self = this;

	function createMenuItems(items)
	{
		var li = [], a = [];
		var ul = document.createElement('ul');

		for (var i = 0; i < items.length; i++)
		{
			li[i] = document.createElement('li');
			a[i] = document.createElement('a');
			for (var prop in items[i])
			{
				switch (prop) {	
					case 'title': 
						a[i].innerHTML = items[i][prop];
						break;
					case 'href':
						a[i].setAttribute('href', items[i][prop]);
						break;				
				}
			li[i].appendChild(a[i]);
			ul.appendChild(li[i]);
			}
		//console.log(li);
		}
		return ul;

	}

	function ()




	createMenuItems(items);

}

var menu = new MainMenu(menuItems);