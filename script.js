function addTask(){
	let input = document.getElementById("taskInput");
	let taskText = input.value.trim();
	if (taskText === "") return;

	let ul = document.getElementById("taskList");
	let li = document.createElement("li");

	let span = document.createElement("span");
	span.textContent = taskText;
	span.onclick = function() {
		this.classList.toggle("completed");
	};

	let button = document.createElement("button");
	button.textContent = "Remover";
	button.onclick = function(){
		ul.removeChild(li);
	};

	ul.appendChild(li);
	li.appendChild(span);
	li.appendChild(button);

	input.value= "";
}
