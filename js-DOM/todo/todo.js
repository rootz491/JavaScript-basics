let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let deletebtn = document.getElementById('deleteBtn');

function additem(e) {
	e.preventDefault();
	
	//add item value
	let newitem = document.getElementById('addTask').value;
	if(newitem) {
		//create new li element
		let li = document.createElement('li');
		//add id
		li.id = 'items';
		//add text node
		li.appendChild(document.createTextNode(newitem));
		//create new deleteBtn
		let newDeleteBtn = document.createElement('button');
		//add class
		newDeleteBtn.className = 'deleteBtn';
		//add ID
		newDeleteBtn.id = 'deleteBtn'
		//apppend deleteBtn to li
		li.appendChild(newDeleteBtn);
		//append li
		itemList.appendChild(li);
	}
}	

function removeItem(e) {
	if(e.target.classList.contains('deleteBtn')) {
		if(confirm('are you sure?')) {
			var li = e.target.parentElement;
			itemList.removeChild(li);
		}
	}
}

//	form submit event
form.addEventListener('submit', additem);
itemList.addEventListener('click', removeItem); 