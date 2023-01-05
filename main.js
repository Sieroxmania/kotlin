import TaskBuilder from './taskBuilder.js';
/*
In dieser Aufgabe sollte eine DSL im Stile eiunes Expression Builders / Fluent Interfaces gebaut werden.
Das Fluent Interface Pattern wurde dafür innerhalb von vanilla JavaScript auf Objekte angewendet (siehe taskBuilder.js);
Als weiteres Beispiel für Fluent Interfaces wurde jQUery mit der Technik des "Method Chaining" verwendet.
Aus diesem Grund sind in dieser Datei auch vanilla JS und jQuery gemischt vorhanden.
*/

//jquery Method Chaining example
$(document).ready(function () {
    $('<h2>Task-List:</h2>')
        .appendTo($('#taskForm'));
    $('<div></div>')
        .attr("id", "taskListContainer")
        .append('<ul id="taskList"></ul>')
        .appendTo($('#taskForm'));
    $('#createTask')
        .click(function () {
            createTask();
        });
});


function createTask() {
    let taskName = document.getElementById('taskName').value;
    let taskDue = document.getElementById('taskDue').value;
    let taskDesc = document.getElementById('taskDescription').value;
    let taskStatus = document.getElementById('taskStatus').value;
    const outputError = document.getElementById("outputError");
    if (taskName.length === 0) {
        outputError.innerHTML = "Please insert a Taskname.";
        return
    } else {
        outputError.innerHTML = "";
        /**
         * Durch das Nutzen eines Fluent Interfaces koennen die einzelnen Methoden der Klasse
         * nacheinander aufgerufen werden. Die Objekteigenschaften können nur mit den
         * klasseneigenen Methoden gesetzt werden, wodurch es leichter sein kann verschiedene
         * Objekte mit vielen verschiedenen Eigenschaften zu einer bestimmten Spezifikation 
         * zu erstellen, beispielsweise für Testverfahren. 
         */
        const task = new TaskBuilder()
            .name(taskName)
            .dueOn(taskDue)
            .description(taskDesc)
            .status(taskStatus)
            .create()
        showTask(task);
    }
    clearInputs();
}

function clearInputs() {
    document.getElementById('taskName').value = "";
    document.getElementById('taskDue').value = "";
    document.getElementById('taskDescription').value = "";
    document.getElementById('taskStatus').value = "open";
}

function deleteTask(taskElem) {
    taskElem.remove();
}

function showTask(task) {
    const taskList = document.getElementById("taskList");
    const taskContainer = document.createElement("li");
    let taskItem = task.name + " | <b>Description:</b> " + task.description + " | <b>Due to:</b> " + task.dueOn + " | <b>Status:</b> " + task.status + " ";

    taskContainer.innerHTML = taskItem;
    taskList.insertAdjacentElement("afterbegin", taskContainer);

    /*
        //vanilla JavaScript not fluent example
        let deleteBtn = document.createElement('input');
        deleteBtn.value = "Delete"
        deleteBtn.type = "button"
        deleteBtn.addEventListener('click', function () {
            deleteTask(this.parentElement);
        });
        taskContainer.insertAdjacentElement("beforeend", deleteBtn);

        //jQuery not fluent example
        var $deleteBtn = $('<button>');
        $deleteBtn.attr('type','button');
        $deleteBtn.html('Delete');
        $deleteBtn.appendTo(taskContainer);
        $deleteBtn.click(function () {
            deleteTask(this.parentElement);
        });
    */
    
    //jQuery fluent example
    /**
     * Vorteile sind eine kürzere Schreibweise, eine bessere Lesbarkeit. 
     * Außerdem muss keine Variable für den $('<button>) erstellt werden, dieser Schritt entfällt.
     */
    $('<button>', {
        type: "button",
        html: "Delete",
    })
        .appendTo(taskContainer)
        .click(function () {
            deleteTask(this.parentElement);
        });
        
}
