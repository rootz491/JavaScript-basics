const todo = [
	"abc", 
	"xyz"
];

const createTask = () => {
    let task = document.getElementById("task").value;
	addTask(task);
}

const addTask = (task) => {
    todo.push(task);
}

const showTask = () => {
	for (var i = 0; i < todo.length; i++) {
	//	document.getElementById("taskDisplay")[i].style.display = block;
	//	document.getElementById("taskDisplay")[i].innerHTML = task[i];			

		document.appendChild('li')[i];	
	}
}