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
        newProject.className = "project-selector";
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
            if ((createModal.prioritySwitch).checked == true) {
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

        //update the projects nav bar

        const updateUI = (() => {
            updateProjectsNav();

            //update the project viewer with the project the user selected
            const projectName = document.querySelector("#project-selector").value;
            
            const selectedProject = projectList.find(element => element.title == projectName)
            updateProjectViewer(selectedProject);
        })();
        

        const removeModal = (() => {
            createModal.modalContainer.remove();
        } )();

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
        //this function creates the current date to use as the default due date
        const getCurrentDate = () => {
            let today = new Date();

            const day = String(today.getDate()).padStart(2, '0');
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const year = today.getFullYear();

            today = `${year}-${month}-${day}`;
            return today
        };

        inputDueDate.value = getCurrentDate();
        inputDueDate.id = "input_duedate";
        inputDueDate.className = "input_date";
        modalContainer.appendChild(inputDueDate);

        // priority inputs

        const prioritySwitchLabel = document.createElement("label");
        prioritySwitchLabel.textContent = "Make High Priority?";
        prioritySwitchLabel.className = "switch-wrapper";
        modalContainer.appendChild(prioritySwitchLabel);

        const prioritySwitch = document.createElement("input")
        prioritySwitch.type = "checkbox";
        prioritySwitch.id = "input_priority";
        prioritySwitch.className = "checkbox";
        prioritySwitch.value = "high-priority";
        prioritySwitchLabel.appendChild(prioritySwitch);

        // this function creates the project selection input
        const generateProjectSelection = (() => {   
            const projectSelector = document.createElement("select");
            projectSelector.className = "input_dropdown";
            projectSelector.placeholder = "Select Project";
            projectSelector.id = "project-selector";
            modalContainer.appendChild(projectSelector);

            // create the datalist to populate dynamically with the user's projects
            const projectData = document.createElement("datalist");
            projectData.id = "projects-data";
            modalContainer.appendChild(projectData)

            const populateOptions = (() => {
                projectList.forEach(element => {
                    const newOption = document.createElement("option");
                    newOption.textContent = element.title;
                    projectSelector.appendChild(newOption);    
                })
            })()

        })()

        const submitButton = document.createElement("button");
        submitButton.type = "button";
        submitButton.textContent = "Create Task";
        submitButton.className = "modal_button-primary";
        submitButton.id = "button_submit-task"
        submitButton.addEventListener("click", submitNewTask);
        modalContainer.appendChild(submitButton);
        
        const cancelButton = document.createElement("button");
        cancelButton.type = "button";
        cancelButton.textContent = "Cancel";
        cancelButton.className = "modal_button-secondary";
        cancelButton.id = "button_cancel-task"
        cancelButton.addEventListener("click", () => modalContainer.remove());
        modalContainer.appendChild(cancelButton);


        return { modalContainer, inputTitle, inputDueDate, inputDescription, prioritySwitch, submitButton };

    })();

}

const triggerNewProjectPrompt = () => {
        //this function submits the newly created project 
        const submitNewProject = () => {
            const newProject = createNewProject((createModal.inputTitle).value, (createModal.inputDescription).value);

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
            inputTitle.placeholder = "Project Name";
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
            submitButton.textContent = "Create Project";
            submitButton.id = "button_submit-project"
            submitButton.className = "modal_button-primary"
            submitButton.addEventListener("click", submitNewProject);
            modalContainer.appendChild(submitButton);
            
            const cancelButton = document.createElement("button");
            cancelButton.type = "button";
            cancelButton.textContent = "Cancel";
            cancelButton.id = "button_cancel-project"
            cancelButton.className = "modal_button-secondary"
            cancelButton.addEventListener("click", () => modalContainer.remove());
            modalContainer.appendChild(cancelButton);

            return { modalContainer, inputTitle, inputDescription };
    
        })();
    
}

// --------------------------------main content section logic-----------------------------------------

//this function updates the main section. It receives the project object
export const updateProjectViewer = (activeProject) => {
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

     const createContextMenu = (e) => {
        //prevent the default browser context menu from appearing 
        e.preventDefault();

        //this function removes context menu
        const removeContextMenu = () => (buildContextMenu.contextMenu).remove();

        //this function checks and removes the existing context menu if one is already present
        const removeDuplicateContextMenu = (() => {
            const oldMenu = document.getElementById("context-menu");

            if (oldMenu != null) {
                oldMenu.remove();
            }
        })();

        //store the clicked element for context menu referencing 
        const selectedTaskTitle = (e.currentTarget).dataset.id;

        const buildContextMenu = (() => {
            const contextMenu = document.createElement("ul");
            contextMenu.id = "context-menu";
            document.body.appendChild(contextMenu);

            //build context menu items
            const markComplete = document.createElement("li");
            markComplete.id = "context_item-complete";
            markComplete.className = "context_item";
            //this function placeholder text based on completion status
            const setCompletionPlaceHolderText = (() => {
                const task = (activeProject.tasks).find(element => element.title == selectedTaskTitle);
                if ((task.completed == false) ? markComplete.textContent = "Mark as Complete" : markComplete.textContent = "Mark as Incomplete");
            })();
            contextMenu.appendChild(markComplete);
            
            const changePriority = document.createElement("li");
            changePriority.id = "context_item-priority";
            changePriority.className = "context_item";
            //this function creates placeholder text based on completion status
            const setPriorityPlaceHolderText = (() => {
                const task = (activeProject.tasks).find(element => element.title == selectedTaskTitle);
                if ((task.highPriority == false) ? changePriority.textContent = "Make High Priority" : changePriority.textContent = "Make Normal Priority");
            })();
            
            // changePriority.textContent = "Change to High Priority"
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

            const changeCompleteStatus = () => {
                //identify the task clcked on
                const task = (activeProject.tasks).find(element => element.title == selectedTaskTitle);

                //change task completed status
                if ((task.completed == false) ? task.completed = true : task.completed = false);

                //update the UI
                if (task.completed == true) {
                    const completedSection = document.querySelector("#tasks_container-completed");

                    //locate the task container in a nodelist
                    const nodeList = document.querySelectorAll(`.task-container[data-id=${selectedTaskTitle}]`);
                    
                    //move the container in the nodelist to the completed section
                    nodeList.forEach(element => {
                        completedSection.appendChild(element);
                    })

                }

                else {
                    const normalSection = document.querySelector("#tasks_container-normal");

                    //locate the task container in a nodelist
                    const nodeList = document.querySelectorAll(`.task-container[data-id=${selectedTaskTitle}]`);
                    
                    //move the container in the nodelist to the completed section
                    nodeList.forEach(element => {
                        normalSection.appendChild(element);
                    })

                }
            }

            const changeTaskPriority = () => {
                const task = (activeProject.tasks).find(element => element.title == selectedTaskTitle);
                
                //this function updates the UI
                const updatePosition = () => {
                    const highPriorityContainer = document.querySelector("#tasks_container-high");
                    const normalPriorityContainer = document.querySelector("#tasks_container-normal");

                    if(task.highPriority == true) {
                        //locate the task container in a nodelist
                        const nodeList = document.querySelectorAll(`.task-container[data-id=${selectedTaskTitle}]`);
                        
                        //move the container in the nodelist to the completed section
                        nodeList.forEach(element => {
                            highPriorityContainer.appendChild(element);
                        })

                    }

                    else {
                        //locate the task container in a nodelist
                        const nodeList = document.querySelectorAll(`.task-container[data-id=${selectedTaskTitle}]`);

                        //move the container in the nodelist to the completed section
                        nodeList.forEach(element => {
                            normalPriorityContainer.appendChild(element);
                        })

                    }
                }
                
                if (task.highPriority == false) {
                    task.highPriority = true;
                    updatePosition();
                }

                else {
                    task.highPriority = false;
                    updatePosition();
                }
            }

            const deleteSelectedTask =() => {
                const taskIndex = (activeProject.tasks).findIndex(element => element.title == selectedTaskTitle);
                
                //remove the task
                (activeProject.tasks).splice(taskIndex, 1);
                

                //update the UI
                const updateUI = (() => {
                    updateProjectsNav()
                    updateProjectViewer(activeProject);
                })();
            }

            
            const applyListeners = (() => {
                //this function removes the context menu when the user clicks outside of it
                const hideMenu = (() => {
                    (document.body).addEventListener("click", hideContextMenu);
                    
                    function hideContextMenu(e){
                        if (e.target.id != "context-menu" && e.target.className != "context_item") {
                            removeContextMenu();
                            (document.body).removeEventListener("click", hideContextMenu);
                        }
                    }
                })();

                //these functions add event listeners for the menu items
                const markTaskComplete = (() => {
                    markComplete.addEventListener("click", () => {
                        changeCompleteStatus();
                        removeContextMenu();
                    });
                    
                })();

                const modifyTaskPriority = (() => {
                    changePriority.addEventListener("click", () => {
                        changeTaskPriority();
                        removeContextMenu();
                    })
                })();

                const removeTask = (() => {
                    deleteTask.addEventListener("click", () => {
                        deleteSelectedTask();
                        removeContextMenu();
                    })
                })();
                
            })();
        

            return { contextMenu };
        })();

    };


    const displayTasks = (() => {
        //create the container

        const createParentContainers = (() => {
            const highPriorityHeading = document.createElement("h5");
            highPriorityHeading.textContent = "High Priority";
            highPriorityHeading.className = "priority-heading";
            highPriorityHeading.id = "priority-heading-high";
            contentArea.appendChild(highPriorityHeading);

            const highPriorityTaskContainer = document.createElement("div");
            highPriorityTaskContainer.id = "tasks_container-high";
            highPriorityTaskContainer.className = "tasks_container";
            contentArea.appendChild(highPriorityTaskContainer);
            
            const normalPriorityHeading = document.createElement("h5");
            normalPriorityHeading.textContent = "Normal Priority";
            normalPriorityHeading.className = "priority-heading";
            contentArea.appendChild(normalPriorityHeading);
            
            const normalPriorityTaskContainer = document.createElement("div");
            normalPriorityTaskContainer.id = "tasks_container-normal";
            highPriorityTaskContainer.className = "tasks_container";
            contentArea.appendChild(normalPriorityTaskContainer);    

            const completedHeading = document.createElement("h5");
            completedHeading.textContent = "Completed";
            completedHeading.className = "priority-heading";
            contentArea.appendChild(completedHeading);
            
            const completedContainer = document.createElement("div");
            completedContainer.id = "tasks_container-completed";
            highPriorityTaskContainer.className = "tasks_container";
            contentArea.appendChild(completedContainer);    
            return { highPriorityTaskContainer, normalPriorityTaskContainer, completedContainer };
        })();


        //add task information to the container
        (activeProject.tasks).forEach(element => {
            
            const taskContainer = document.createElement("div");
            taskContainer.className = "task-container";
            taskContainer.dataset.id = element.title; // used for context menu referencing
            
            //place the tasks in their right containers based on completion status and priority
            if (element.highPriority == true ) {
                (createParentContainers.highPriorityTaskContainer).appendChild(taskContainer);
            }
            
            else if (element.completed == false) {
                (createParentContainers.normalPriorityTaskContainer).appendChild(taskContainer);
            }

            else {
                (createParentContainers.completedContainer).appendChild(taskContainer);
            }

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
                taskContainer.addEventListener("contextmenu", createContextMenu);
            })();
        })
    })();

}


// ------------------------Event Listeners ----------------------------------------------------
const newTaskButton = document.querySelector("#button_new-task");
const newProjectButton = document.querySelector("#button_new-project");

newTaskButton.addEventListener("click", triggerNewTaskPrompt);
newProjectButton.addEventListener("click", triggerNewProjectPrompt);


