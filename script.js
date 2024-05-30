function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    // Create a new list item
    var li = document.createElement("li");
    var inputValue = taskInput.value;
    var textNode = document.createTextNode(inputValue);

    // Create a checkbox
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function() {
        // If checkbox is checked, add completed class to li; otherwise, remove it
        if (this.checked) {
            li.classList.add("completed");
        } else {
            li.classList.remove("completed");
        }
    };

    // Append checkbox, text, and delete button to list item
    li.appendChild(checkbox);
    li.appendChild(textNode);
    taskList.appendChild(li);

    if (inputValue === '') {
        alert("You must write something!");
    }

    // Clear input field after adding task
    taskInput.value = "";
}
