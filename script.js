console.time('start');

var menuItems = [
	{title: 'Main', href: '#'},
	{title: 'Products', href: '#'},
	{title: 'About', href: '#'},
	{title: 'Contacts', href: '#'}
	];

//console.log(menuItems);

function MainMenu(items, parentElementId)
{
	this.id = parentElementId; //outer container
	this.outerContClass; //parent container class

	this.outerContainer = document.getElementById(parentElementId);
	this.outerContClass = this.outerContainer.className;

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

	this.render = function()
	{
		
		this.outerContainer.appendChild(createMenuItems(items));
	}
}

var menu = new MainMenu(menuItems, 'navi');
console.log('menu parent container class: ' + menu.outerContClass);
console.log('menu id: ' + menu.id);

menu.render();





console.timeEnd('start');