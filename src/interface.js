// this module handles all the code related to handling the UI
import { taskList, createNewTask, projectList, createNewProject } from './ToDos.js';

export const updateProjectsNav = () => {
    const projectNav = document.querySelector("#project-list");

    //loop through project array to create buttons lsting the project titls
    projectList.forEach(element => {
        const newProject = document.createElement("ul");
        newProject.id = `project-selector-${element.title}`;
        newProject.class = "project-selector";
        newProject.textContent = element.title;
        projectNav.appendChild(newProject);

        const appendTasks = (() => {
        // loop through the array of tasks and append each task to its respected project
            projectList.forEach(element => {
                if ((element.tasks).length != 0) {
                    const newTask = document.createElement("li");
                    newTask.class = "project-selector-task";
                    newTask.id = `project-task-${element.title}`;
                    newTask.textContent = element.title;

                    // nest task in project list
                    newProject.appendChild(newTask); 
                }
            })    
    })();
    });
    
}
//this function handles the UI when a user wants to create a new task 
const triggerNewTaskPrompt = () => {
    const createModal = (() => {
        const modalContainer = document.createElement("div");
        modalContainer.className = "modal_container";
        modalContainer.id = "modal_task";
        document.body.appendChild(modalContainer);

        const modalHeading = document.createElement("h3");
        modalHeading.className = "modal_heading";
        modalHeading.textContent = "Create a New Task";
        modalContainer.appendChild(modalHeading);

        //this code creates the inputs
        const inputTitle = document.createElement("input");
        inputTitle.type = "text";
        inputTitle.placeholder = "Task Name";
        inputTitle.id = "input_title";
        inputTitle.className = "input_text";
        modalContainer.appendChild(inputTitle);

        const inputDescription = document.createElement("textarea");
        inputDescription.placeholder = "Description";
        inputDescription.id = "input_description";
        inputDescription.className = "input_text";
        modalContainer.appendChild(inputDescription);

        const inputDueDate = document.createElement("input");
        inputDueDate.type = "date";
        inputDueDate.placeholder = "Task Name";
        inputDueDate.id = "input_duedate";
        inputDueDate.className = "input_text";
        modalContainer.appendChild(inputDueDate);

        const inputPriority = document.createElement("input");
        inputPriority.type = "datalist";
        inputPriority.placeholder = "Priority";
        inputPriority.id = "input_priority";
        inputPriority.className = "input_dropdown";
        modalContainer.appendChild(inputPriority);


    })();
}

// ------------------------Event Listeners ----------------------------------------------------
const newTaskButton = document.querySelector("#button_new-task");

newTaskButton.addEventListener("click", triggerNewTaskPrompt);

