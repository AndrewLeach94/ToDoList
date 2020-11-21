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
    
    //this function submits the newly created tasks 
    const submitNewTask = () => {
        //this function finds the priority level to be passed to the next function
        const getPriority = () => {
            if ((createModal.inputPriorityHigh).checked == true) {
                return true;
            } 
            else {
                return false;
            }
        }
        
        createNewTask(
            (createModal.inputTitle).value,
            (createModal.inputDescription).value,
            (createModal.inputDueDate).value,
            getPriority()
            );
        
        const removeModal = (() => {
            createModal.modalContainer.remove();
        } )();

        console.table(taskList);
    }

    //this function creates the modal for the user to create a new task
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

        // priority inputs
        const inputPriorityNormal = document.createElement("input");
        inputPriorityNormal.type = "radio";
        inputPriorityNormal.id = "input_priority-normal";
        inputPriorityNormal.className = "input_radio";
        inputPriorityNormal.value = "Normal";
        inputPriorityNormal.name = "priority";
        modalContainer.appendChild(inputPriorityNormal);

        const labelPriorityNormal = document.createElement("Label");
        labelPriorityNormal.id = "label_priority-normal";
        labelPriorityNormal.for = "Normal";
        labelPriorityNormal.textContent = "Normal";
        modalContainer.appendChild(labelPriorityNormal);

        const inputPriorityHigh = document.createElement("input");
        inputPriorityHigh.type = "radio";
        inputPriorityHigh.id = "input_priority";
        inputPriorityHigh.className = "input_radio";
        inputPriorityHigh.value = "high";
        inputPriorityHigh.name = "priority";
        modalContainer.appendChild(inputPriorityHigh);

        const labelPriorityHigh = document.createElement("Label");
        labelPriorityHigh.id = "label_priority-high";
        labelPriorityHigh.for = "high";
        labelPriorityHigh.textContent = "High";
        modalContainer.appendChild(labelPriorityHigh);

        // this function creates the project selection input
        const generateProjectSelection = (() => {   
            const projectSelector = document.createElement("input");
            projectSelector.setAttribute("list", "projects-data"); // only way I could find to add list attribute with JS
            projectSelector.className = "input_text";
            projectSelector.id = "project-selector";
            modalContainer.appendChild(projectSelector);

            // create the datalist to populate dynamically with the user's projects
            const projectData = document.createElement("datalist");
            projectData.id = "projects-data";
            modalContainer.appendChild(projectData)

            const populateOptions = (() => {
                projectList.forEach(element => {
                    const newOption = document.createElement("option");
                    newOption.value = element.title;
                    projectData.appendChild(newOption);    
                })
            })()

        })()

        const submitButton = document.createElement("button");
        submitButton.type = "button";
        submitButton.textContent = "Create Task";
        submitButton.id = "button_submit-task"
        submitButton.addEventListener("click", submitNewTask);
        modalContainer.appendChild(submitButton);

        return { modalContainer, inputTitle, inputDescription, inputDueDate, inputPriorityNormal, inputPriorityHigh, submitButton };

    })();

}

// ------------------------Event Listeners ----------------------------------------------------
const newTaskButton = document.querySelector("#button_new-task");

newTaskButton.addEventListener("click", triggerNewTaskPrompt);


