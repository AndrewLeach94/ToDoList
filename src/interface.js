// this module handles all the code related to handling the UI
import { taskList, createNewTask, projectList, createNewProject } from './ToDos.js';

//------------------------------------------------nav bar logic----------------------------------------------
export const updateProjectsNav = () => {    
    
    const projectNav = document.querySelector("#project-list");
    //reset the navigation
    while (projectNav.firstChild) {
        projectNav.removeChild(projectNav.firstChild);
    }

    //loop through project array to create divs lsting the project titls
    projectList.forEach(element => {
        const newProject = document.createElement("ul");
        newProject.id = `project-selector-${element.title}`;
        newProject.class = "project-selector";
        newProject.textContent = element.title;
        projectNav.appendChild(newProject);

        const appendTasks = (() => {
            const tasks = element.tasks;
        // loop through the array of tasks and append each task to its respected project
            if (tasks.length != 0) {
                tasks.forEach(taskElement => {
                    const appendTask = document.createElement("li");
                    appendTask.class = "project-selector-task";
                    appendTask.id = `project-task-${taskElement.title}`;
                    appendTask.textContent = taskElement.title;

                    // nest task in project list
                    newProject.appendChild(appendTask); 
                })
            }
    })();
        //this function applies the event listener to update the main section on-click
        const applyEventListeners = (() => {
            
            newProject.addEventListener("click", () => {
                updateProjectViewer(element);
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
        
        const newTask = createNewTask(
                        (createModal.inputTitle).value,
                        (createModal.inputDescription).value,
                        (createModal.inputDueDate).value,
                        getPriority()
                        );
        
        //this function pushes the task to the project's tasks array
        const assignTasktoProject = (() => {
            //store the user's selected project
            const selectedProject = document.querySelector("#project-selector").value;
            
            //locate the requested project using the user's input
            const requestedProject = projectList.find(element => element.title == selectedProject);

            //push the task to the project's array
            (requestedProject.tasks).push(newTask);
        })();

        const removeModal = (() => {
            createModal.modalContainer.remove();
        } )();

        //update the projects nav bar
        
        const updateNavigation = (() => {
            updateProjectsNav();
        })();

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

const triggerNewProjectPrompt = () => {
        //this function submits the newly created project 
        const submitNewProject = () => {
            const newProject = createNewProject((createModal.inputTitle).value, (createModal.inputDescription).value);

            console.table(projectList);

            const removeModal = (() => createModal.modalContainer.remove())();


            //update the projects nav bar
            
            const updateNavigation = (() => {
                updateProjectsNav();
            })();
        }

        //this function creates the modal for the user to create a new task
        const createModal = (() => {
            const modalContainer = document.createElement("div");
            modalContainer.className = "modal_container";
            modalContainer.id = "modal_project";
            document.body.appendChild(modalContainer);
    
            const modalHeading = document.createElement("h3");
            modalHeading.className = "modal_heading";
            modalHeading.textContent = "Create a New Project";
            modalContainer.appendChild(modalHeading);
    
            //this code creates the inputs
            const inputTitle = document.createElement("input");
            inputTitle.type = "text";
            inputTitle.placeholder = "project Name";
            inputTitle.id = "input_title";
            inputTitle.className = "input_text";
            modalContainer.appendChild(inputTitle);
    
            const inputDescription = document.createElement("textarea");
            inputDescription.placeholder = "Description";
            inputDescription.id = "input_description";
            inputDescription.className = "input_text";
            modalContainer.appendChild(inputDescription);
    
            
            const submitButton = document.createElement("button");
            submitButton.type = "button";
            submitButton.textContent = "Create project";
            submitButton.id = "button_submit-project"
            submitButton.addEventListener("click", submitNewProject);
            modalContainer.appendChild(submitButton);

            return { modalContainer, inputTitle, inputDescription };
    
        })();
    
}

// --------------------------------main content section logic-----------------------------------------

//this function updates the main section. It receives the project object
const updateProjectViewer = (activeProject) => {
    const contentArea = document.querySelector("#content-area");

    //this function preforms the initial reset when a new project is selected
    const resetContentArea = (() => {
        while (contentArea.firstChild) {
            contentArea.removeChild(contentArea.firstChild);
        }    
    })();
    
    const displayHeading = (() => {
        const heading = document.createElement("h2");
        heading.className = "project-heading";
        heading.textContent = activeProject.title;
        contentArea.appendChild(heading);
    })();

    const displayDescription = (() => {
        const description = document.createElement("p");
        description.className = "project-description";
        description.textContent = activeProject.description;
        contentArea.appendChild(description);

    })();

    const createContextMenus = (e) => {
        console.log("working");
        console.log( e.clientX, e.clientY )
        //prevent the default browser context menu from appearing 
        e.preventDefault();

        const buildContextMenu = (() => {
            const contextMenu = document.createElement("ul");
            contextMenu.className = "context-menu";
            document.body.appendChild(contextMenu);

            //build context menu items
            const markComplete = document.createElement("li");
            markComplete.id = "context_item-complete";
            markComplete.className = "context_item";
            markComplete.textContent = "Mark as Complete";
            contextMenu.appendChild(markComplete);
            
            const changePriority = document.createElement("li");
            changePriority.id = "context_item-priority";
            changePriority.className = "context_item";
            changePriority.textContent = "Change to High Priority"
            contextMenu.appendChild(changePriority);

            
            const deleteTask = document.createElement("li");
            deleteTask.id = "context_item-delete";
            deleteTask.className = "context_item";
            deleteTask.textContent = "Delete Task";
            contextMenu.appendChild(deleteTask);

            //position the context menu on user's mouse click
            const positionMenu = (() => {
                contextMenu.style.top = `${e.clientY - 20}px`;
                contextMenu.style.left = `${e.clientX - 20}px`;
            })();
        })();

    };


    const displayTasks = (() => {
        //create the container

        const createParentContainers = (() => {
            const highPriorityTaskContainer = document.createElement("div");
            highPriorityTaskContainer.className = "tasks_container-high";
            contentArea.appendChild(highPriorityTaskContainer);    
            
            const normalPriorityTaskContainer = document.createElement("div");
            normalPriorityTaskContainer.className = "tasks_container-normal";
            contentArea.appendChild(normalPriorityTaskContainer);    
            return { highPriorityTaskContainer, normalPriorityTaskContainer };
        })();


        //add task information to the container
        (activeProject.tasks).forEach(element => {
            
            const taskContainer = document.createElement("div");
            taskContainer.className = "task-container";
            (createParentContainers.normalPriorityTaskContainer).appendChild(taskContainer);

            const titleContainer = document.createElement("div");
            titleContainer.className = "tasks_container-title";
            taskContainer.appendChild(titleContainer);                 

            const createHeading = (() => {
                const title = document.createElement("h4");
                title.className = "task-title";
                title.textContent = element.title;    
                titleContainer.appendChild(title);

            })();

            const createDescription = (() => {
                const description = document.createElement("p");
                description.className = "task-description";
                description.textContent = element.description;
                titleContainer.appendChild(description);
            })();
            
            const createDueDate = (() => {
                const dueDate = document.createElement("p");
                dueDate.className = "task-due-date";
                dueDate.textContent = `Due: ${element.dueDate}`;
                taskContainer.appendChild(dueDate);
            })();

            const applyContextMenuListeners = (() => {
                taskContainer.addEventListener("contextmenu", createContextMenus);
            })();
        })
    })();

}


// ------------------------Event Listeners ----------------------------------------------------
const newTaskButton = document.querySelector("#button_new-task");
const newProjectButton = document.querySelector("#button_new-project");

newTaskButton.addEventListener("click", triggerNewTaskPrompt);
newProjectButton.addEventListener("click", triggerNewProjectPrompt);


