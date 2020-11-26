/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ToDos.js":
/*!**********************!*\
  !*** ./src/ToDos.js ***!
  \**********************/
/*! namespace exports */
/*! export assignTasktoProject [provided] [no usage info] [missing usage info prevents renaming] */
/*! export completedProjects [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createNewProject [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createNewTask [provided] [no usage info] [missing usage info prevents renaming] */
/*! export projectList [provided] [no usage info] [missing usage info prevents renaming] */
/*! export taskList [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"taskList\": () => /* binding */ taskList,\n/* harmony export */   \"projectList\": () => /* binding */ projectList,\n/* harmony export */   \"completedProjects\": () => /* binding */ completedProjects,\n/* harmony export */   \"createNewTask\": () => /* binding */ createNewTask,\n/* harmony export */   \"createNewProject\": () => /* binding */ createNewProject,\n/* harmony export */   \"assignTasktoProject\": () => /* binding */ assignTasktoProject\n/* harmony export */ });\n//this module focuses on the logic revolving around tasks and projects\r\n\r\nconst taskList = [];\r\nconst projectList = [];\r\nconst completedProjects = [];\r\n\r\n//------------------------------------Tasks--------------------------------------------------------------\r\n\r\n//This class serves as the template for new task items\r\nconst Task = class {\r\n    constructor(title, description, dueDate, highPriority) {\r\n    this.title = title;\r\n    this.description = description;\r\n    this.dueDate = dueDate;\r\n    this.highPriority = highPriority;\r\n    this.completed = false;\r\n    }\r\n}\r\n\r\n//This function is responsible for creating the new task objectd\\s\r\nconst createNewTask = (title, description, dueDate, highPriority) => {\r\n    \r\n    //this constructs the new object\r\n    const newTask = new Task(title, description, dueDate, highPriority);\r\n\r\n    const addToTaskList = (() => taskList.push(newTask))();\r\n\r\n    return newTask;\r\n\r\n}\r\n\r\n\r\n\r\n//----------------------------Projects------------------------------------------------------------------\r\n\r\nconst Project = class {\r\n    constructor(title, description) {\r\n        this.title = title;\r\n        this.description = description;\r\n        this.tasks = [];\r\n    }\r\n}\r\n\r\nconst createNewProject = (title, description, dueDate) => {\r\n    //this constructs the new object\r\n    const newProject = new Project(title, description, dueDate);\r\n\r\n    const addToProjectList = (() => projectList.push(newProject))();\r\n}\r\n\r\n//this function creates the \"General\" project which is the default project tasks get added to\r\nconst createDefaultProject = (() => createNewProject(\"Miscellaneous\", \"Unorganized tasks\"))();\r\n\r\n//this function assigns tasks to projects\r\nconst assignTasktoProject = (project, task) => (project.tasks).push(task);\r\n\n\n//# sourceURL=webpack://ToDoList/./src/ToDos.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ToDos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDos.js */ \"./src/ToDos.js\");\n/* harmony import */ var _interface_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interface.js */ \"./src/interface.js\");\n\r\n\r\n\r\n(0,_ToDos_js__WEBPACK_IMPORTED_MODULE_0__.createNewTask)(\"Buy Christmas Gifts\", \"buy gifts for family\", \"12/22/2020\", false);\r\n(0,_interface_js__WEBPACK_IMPORTED_MODULE_1__.updateProjectsNav)();\r\n\r\n\r\n\n\n//# sourceURL=webpack://ToDoList/./src/index.js?");

/***/ }),

/***/ "./src/interface.js":
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
/*! namespace exports */
/*! export updateProjectsNav [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateProjectsNav\": () => /* binding */ updateProjectsNav\n/* harmony export */ });\n/* harmony import */ var _ToDos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDos.js */ \"./src/ToDos.js\");\n// this module handles all the code related to handling the UI\r\n\r\n\r\n//------------------------------------------------nav bar logic----------------------------------------------\r\nconst updateProjectsNav = () => {    \r\n    \r\n    const projectNav = document.querySelector(\"#project-list\");\r\n    //reset the navigation\r\n    while (projectNav.firstChild) {\r\n        projectNav.removeChild(projectNav.firstChild);\r\n    }\r\n\r\n    //loop through project array to create divs lsting the project titls\r\n    _ToDos_js__WEBPACK_IMPORTED_MODULE_0__.projectList.forEach(element => {\r\n        const newProject = document.createElement(\"ul\");\r\n        newProject.id = `project-selector-${element.title}`;\r\n        newProject.class = \"project-selector\";\r\n        newProject.textContent = element.title;\r\n        projectNav.appendChild(newProject);\r\n\r\n        const appendTasks = (() => {\r\n            const tasks = element.tasks;\r\n        // loop through the array of tasks and append each task to its respected project\r\n            if (tasks.length != 0) {\r\n                tasks.forEach(taskElement => {\r\n                    const appendTask = document.createElement(\"li\");\r\n                    appendTask.class = \"project-selector-task\";\r\n                    appendTask.id = `project-task-${taskElement.title}`;\r\n                    appendTask.textContent = taskElement.title;\r\n\r\n                    // nest task in project list\r\n                    newProject.appendChild(appendTask); \r\n                })\r\n            }\r\n    })();\r\n        //this function applies the event listener to update the main section on-click\r\n        const applyEventListeners = (() => {\r\n            \r\n            newProject.addEventListener(\"click\", () => {\r\n                updateProjectViewer(element);\r\n            })\r\n        })();\r\n    });\r\n    \r\n}\r\n//this function handles the UI when a user wants to create a new task \r\nconst triggerNewTaskPrompt = () => {\r\n    \r\n    //this function submits the newly created tasks \r\n    const submitNewTask = () => {\r\n        //this function finds the priority level to be passed to the next function\r\n        const getPriority = () => {\r\n            if ((createModal.inputPriorityHigh).checked == true) {\r\n                return true;\r\n            } \r\n            else {\r\n                return false;\r\n            }\r\n        }\r\n        \r\n        const newTask = (0,_ToDos_js__WEBPACK_IMPORTED_MODULE_0__.createNewTask)(\r\n                        (createModal.inputTitle).value,\r\n                        (createModal.inputDescription).value,\r\n                        (createModal.inputDueDate).value,\r\n                        getPriority()\r\n                        );\r\n        \r\n        //this function pushes the task to the project's tasks array\r\n        const assignTasktoProject = (() => {\r\n            //store the user's selected project\r\n            const selectedProject = document.querySelector(\"#project-selector\").value;\r\n            \r\n            //locate the requested project using the user's input\r\n            const requestedProject = _ToDos_js__WEBPACK_IMPORTED_MODULE_0__.projectList.find(element => element.title == selectedProject);\r\n\r\n            //push the task to the project's array\r\n            (requestedProject.tasks).push(newTask);\r\n        })();\r\n\r\n        const removeModal = (() => {\r\n            createModal.modalContainer.remove();\r\n        } )();\r\n\r\n        //update the projects nav bar\r\n        \r\n        const updateNavigation = (() => {\r\n            updateProjectsNav();\r\n        })();\r\n\r\n    }\r\n\r\n    //this function creates the modal for the user to create a new task\r\n    const createModal = (() => {\r\n        const modalContainer = document.createElement(\"div\");\r\n        modalContainer.className = \"modal_container\";\r\n        modalContainer.id = \"modal_task\";\r\n        document.body.appendChild(modalContainer);\r\n\r\n        const modalHeading = document.createElement(\"h3\");\r\n        modalHeading.className = \"modal_heading\";\r\n        modalHeading.textContent = \"Create a New Task\";\r\n        modalContainer.appendChild(modalHeading);\r\n\r\n        //this code creates the inputs\r\n        const inputTitle = document.createElement(\"input\");\r\n        inputTitle.type = \"text\";\r\n        inputTitle.placeholder = \"Task Name\";\r\n        inputTitle.id = \"input_title\";\r\n        inputTitle.className = \"input_text\";\r\n        modalContainer.appendChild(inputTitle);\r\n\r\n        const inputDescription = document.createElement(\"textarea\");\r\n        inputDescription.placeholder = \"Description\";\r\n        inputDescription.id = \"input_description\";\r\n        inputDescription.className = \"input_text\";\r\n        modalContainer.appendChild(inputDescription);\r\n\r\n        const inputDueDate = document.createElement(\"input\");\r\n        inputDueDate.type = \"date\";\r\n        inputDueDate.placeholder = \"Task Name\";\r\n        inputDueDate.id = \"input_duedate\";\r\n        inputDueDate.className = \"input_text\";\r\n        modalContainer.appendChild(inputDueDate);\r\n\r\n        // priority inputs\r\n        const inputPriorityNormal = document.createElement(\"input\");\r\n        inputPriorityNormal.type = \"radio\";\r\n        inputPriorityNormal.id = \"input_priority-normal\";\r\n        inputPriorityNormal.className = \"input_radio\";\r\n        inputPriorityNormal.value = \"Normal\";\r\n        inputPriorityNormal.name = \"priority\";\r\n        modalContainer.appendChild(inputPriorityNormal);\r\n\r\n        const labelPriorityNormal = document.createElement(\"Label\");\r\n        labelPriorityNormal.id = \"label_priority-normal\";\r\n        labelPriorityNormal.for = \"Normal\";\r\n        labelPriorityNormal.textContent = \"Normal\";\r\n        modalContainer.appendChild(labelPriorityNormal);\r\n\r\n        const inputPriorityHigh = document.createElement(\"input\");\r\n        inputPriorityHigh.type = \"radio\";\r\n        inputPriorityHigh.id = \"input_priority\";\r\n        inputPriorityHigh.className = \"input_radio\";\r\n        inputPriorityHigh.value = \"high\";\r\n        inputPriorityHigh.name = \"priority\";\r\n        modalContainer.appendChild(inputPriorityHigh);\r\n\r\n        const labelPriorityHigh = document.createElement(\"Label\");\r\n        labelPriorityHigh.id = \"label_priority-high\";\r\n        labelPriorityHigh.for = \"high\";\r\n        labelPriorityHigh.textContent = \"High\";\r\n        modalContainer.appendChild(labelPriorityHigh);\r\n\r\n        // this function creates the project selection input\r\n        const generateProjectSelection = (() => {   \r\n            const projectSelector = document.createElement(\"input\");\r\n            projectSelector.setAttribute(\"list\", \"projects-data\"); // only way I could find to add list attribute with JS\r\n            projectSelector.className = \"input_text\";\r\n            projectSelector.id = \"project-selector\";\r\n            modalContainer.appendChild(projectSelector);\r\n\r\n            // create the datalist to populate dynamically with the user's projects\r\n            const projectData = document.createElement(\"datalist\");\r\n            projectData.id = \"projects-data\";\r\n            modalContainer.appendChild(projectData)\r\n\r\n            const populateOptions = (() => {\r\n                _ToDos_js__WEBPACK_IMPORTED_MODULE_0__.projectList.forEach(element => {\r\n                    const newOption = document.createElement(\"option\");\r\n                    newOption.value = element.title;\r\n                    projectData.appendChild(newOption);    \r\n                })\r\n            })()\r\n\r\n        })()\r\n\r\n        const submitButton = document.createElement(\"button\");\r\n        submitButton.type = \"button\";\r\n        submitButton.textContent = \"Create Task\";\r\n        submitButton.id = \"button_submit-task\"\r\n        submitButton.addEventListener(\"click\", submitNewTask);\r\n        modalContainer.appendChild(submitButton);\r\n\r\n        return { modalContainer, inputTitle, inputDescription, inputDueDate, inputPriorityNormal, inputPriorityHigh, submitButton };\r\n\r\n    })();\r\n\r\n}\r\n\r\nconst triggerNewProjectPrompt = () => {\r\n        //this function submits the newly created project \r\n        const submitNewProject = () => {\r\n            const newProject = (0,_ToDos_js__WEBPACK_IMPORTED_MODULE_0__.createNewProject)((createModal.inputTitle).value, (createModal.inputDescription).value);\r\n\r\n            const removeModal = (() => createModal.modalContainer.remove())();\r\n\r\n\r\n            //update the projects nav bar\r\n            \r\n            const updateNavigation = (() => {\r\n                updateProjectsNav();\r\n            })();\r\n        }\r\n\r\n        //this function creates the modal for the user to create a new task\r\n        const createModal = (() => {\r\n            const modalContainer = document.createElement(\"div\");\r\n            modalContainer.className = \"modal_container\";\r\n            modalContainer.id = \"modal_project\";\r\n            document.body.appendChild(modalContainer);\r\n    \r\n            const modalHeading = document.createElement(\"h3\");\r\n            modalHeading.className = \"modal_heading\";\r\n            modalHeading.textContent = \"Create a New Project\";\r\n            modalContainer.appendChild(modalHeading);\r\n    \r\n            //this code creates the inputs\r\n            const inputTitle = document.createElement(\"input\");\r\n            inputTitle.type = \"text\";\r\n            inputTitle.placeholder = \"project Name\";\r\n            inputTitle.id = \"input_title\";\r\n            inputTitle.className = \"input_text\";\r\n            modalContainer.appendChild(inputTitle);\r\n    \r\n            const inputDescription = document.createElement(\"textarea\");\r\n            inputDescription.placeholder = \"Description\";\r\n            inputDescription.id = \"input_description\";\r\n            inputDescription.className = \"input_text\";\r\n            modalContainer.appendChild(inputDescription);\r\n    \r\n            \r\n            const submitButton = document.createElement(\"button\");\r\n            submitButton.type = \"button\";\r\n            submitButton.textContent = \"Create project\";\r\n            submitButton.id = \"button_submit-project\"\r\n            submitButton.addEventListener(\"click\", submitNewProject);\r\n            modalContainer.appendChild(submitButton);\r\n\r\n            return { modalContainer, inputTitle, inputDescription };\r\n    \r\n        })();\r\n    \r\n}\r\n\r\n// --------------------------------main content section logic-----------------------------------------\r\n\r\n//this function updates the main section. It receives the project object\r\nconst updateProjectViewer = (activeProject) => {\r\n    const contentArea = document.querySelector(\"#content-area\");\r\n\r\n    //this function preforms the initial reset when a new project is selected\r\n    const resetContentArea = (() => {\r\n        while (contentArea.firstChild) {\r\n            contentArea.removeChild(contentArea.firstChild);\r\n        }    \r\n    })();\r\n    \r\n    const displayHeading = (() => {\r\n        const heading = document.createElement(\"h2\");\r\n        heading.className = \"project-heading\";\r\n        heading.textContent = activeProject.title;\r\n        contentArea.appendChild(heading);\r\n    })();\r\n\r\n    const displayDescription = (() => {\r\n        const description = document.createElement(\"p\");\r\n        description.className = \"project-description\";\r\n        description.textContent = activeProject.description;\r\n        contentArea.appendChild(description);\r\n\r\n    })();\r\n\r\n     const createContextMenu = (e) => {\r\n        //prevent the default browser context menu from appearing \r\n        e.preventDefault();\r\n\r\n        //this function removes context menu\r\n        const removeContextMenu = () => (buildContextMenu.contextMenu).remove();\r\n\r\n        //this function checks and removes the existing context menu if one is already present\r\n        const removeDuplicateContextMenu = (() => {\r\n            const oldMenu = document.getElementById(\"context-menu\");\r\n\r\n            if (oldMenu != null) {\r\n                oldMenu.remove();\r\n            }\r\n        })();\r\n\r\n        //store the clicked element for context menu referencing \r\n        const selectedTaskTitle = (e.currentTarget).dataset.id;\r\n        console.log(selectedTaskTitle);\r\n\r\n        const buildContextMenu = (() => {\r\n            const contextMenu = document.createElement(\"ul\");\r\n            contextMenu.id = \"context-menu\";\r\n            document.body.appendChild(contextMenu);\r\n\r\n            //build context menu items\r\n            const markComplete = document.createElement(\"li\");\r\n            markComplete.id = \"context_item-complete\";\r\n            markComplete.className = \"context_item\";\r\n            //this function placeholder text based on completion status\r\n            const setCompletionPlaceHolderText = (() => {\r\n                const task = (activeProject.tasks).find(element => element.title == selectedTaskTitle);\r\n                if ((task.completed == false) ? markComplete.textContent = \"Mark as Complete\" : markComplete.textContent = \"Mark as Incomplete\");\r\n            })();\r\n            contextMenu.appendChild(markComplete);\r\n            \r\n            const changePriority = document.createElement(\"li\");\r\n            changePriority.id = \"context_item-priority\";\r\n            changePriority.className = \"context_item\";\r\n            //this function creates placeholder text based on completion status\r\n            const setPriorityPlaceHolderText = (() => {\r\n                const task = (activeProject.tasks).find(element => element.title == selectedTaskTitle);\r\n                if ((task.highPriority == false) ? changePriority.textContent = \"Make High Priority\" : changePriority.textContent = \"Make Normal Priority\");\r\n            })();\r\n            \r\n            // changePriority.textContent = \"Change to High Priority\"\r\n            contextMenu.appendChild(changePriority);\r\n\r\n            \r\n            const deleteTask = document.createElement(\"li\");\r\n            deleteTask.id = \"context_item-delete\";\r\n            deleteTask.className = \"context_item\";\r\n            deleteTask.textContent = \"Delete Task\";\r\n            contextMenu.appendChild(deleteTask);\r\n\r\n            //position the context menu on user's mouse click\r\n            const positionMenu = (() => {\r\n                contextMenu.style.top = `${e.clientY - 20}px`;\r\n                contextMenu.style.left = `${e.clientX - 20}px`;\r\n            })();\r\n\r\n            const changeCompleteStatus = () => {\r\n                //identify the task clcked on\r\n                const task = (activeProject.tasks).find(element => element.title == selectedTaskTitle);\r\n\r\n                //change task completed status\r\n                if ((task.completed == false) ? task.completed = true : task.completed = false);\r\n\r\n                //update the UI\r\n                if (task.completed == true) {\r\n                    const completedSection = document.querySelector(\"#tasks_container-completed\");\r\n\r\n                    //locate the task container in a nodelist\r\n                    const nodeList = document.querySelectorAll(`.task-container[data-id=${selectedTaskTitle}]`);\r\n                    \r\n                    //move the container in the nodelist to the completed section\r\n                    nodeList.forEach(element => {\r\n                        completedSection.appendChild(element);\r\n                    })\r\n\r\n                }\r\n            }\r\n\r\n            const changeTaskPriority = () => {\r\n                const task = (activeProject.tasks).find(element => element.title == selectedTaskTitle);\r\n                \r\n                //this function updates the UI\r\n                const updatePosition = () => {\r\n                    const highPriorityContainer = document.querySelector(\"#tasks_container-high\");\r\n                    const normalPriorityContainer = document.querySelector(\"#tasks_container-normal\");\r\n\r\n                    if(task.highPriority == true) {\r\n                        //locate the task container in a nodelist\r\n                        const nodeList = document.querySelectorAll(`.task-container[data-id=${selectedTaskTitle}]`);\r\n                        \r\n                        //move the container in the nodelist to the completed section\r\n                        nodeList.forEach(element => {\r\n                            highPriorityContainer.appendChild(element);\r\n                        })\r\n\r\n                    }\r\n\r\n                    else {\r\n                        //locate the task container in a nodelist\r\n                        const nodeList = document.querySelectorAll(`.task-container[data-id=${selectedTaskTitle}]`);\r\n\r\n                        //move the container in the nodelist to the completed section\r\n                        nodeList.forEach(element => {\r\n                            normalPriorityContainer.appendChild(element);\r\n                        })\r\n\r\n                    }\r\n                }\r\n                \r\n                if (task.highPriority == false) {\r\n                    task.highPriority = true;\r\n                    updatePosition();\r\n                }\r\n\r\n                else {\r\n                    task.highPriority = false;\r\n                    updatePosition();\r\n                }\r\n            }\r\n\r\n            const deleteSelectedTask =() => {\r\n                const taskIndex = (activeProject.tasks).findIndex(element => element.title == selectedTaskTitle);\r\n                \r\n                //remove the task\r\n                (activeProject.tasks).splice(taskIndex, 1);\r\n                \r\n\r\n                //update the UI\r\n                const updateUI = (() => {\r\n                    updateProjectsNav()\r\n                    updateProjectViewer(activeProject);\r\n                })();\r\n            }\r\n\r\n            \r\n            const applyListeners = (() => {\r\n                //this function removes the context menu when the user clicks outside of it\r\n                const hideMenu = (() => {\r\n                    (document.body).addEventListener(\"click\", hideContextMenu);\r\n                    \r\n                    function hideContextMenu(e){\r\n                        if (e.target.id != \"context-menu\" && e.target.className != \"context_item\") {\r\n                            removeContextMenu();\r\n                            (document.body).removeEventListener(\"click\", hideContextMenu);\r\n                        }\r\n                    }\r\n                })();\r\n\r\n                //these functions add event listeners for the menu items\r\n                const markTaskComplete = (() => {\r\n                    markComplete.addEventListener(\"click\", () => {\r\n                        changeCompleteStatus();\r\n                        removeContextMenu();\r\n                    });\r\n                    \r\n                })();\r\n\r\n                const modifyTaskPriority = (() => {\r\n                    changePriority.addEventListener(\"click\", () => {\r\n                        changeTaskPriority();\r\n                        removeContextMenu();\r\n                    })\r\n                })();\r\n\r\n                const removeTask = (() => {\r\n                    deleteTask.addEventListener(\"click\", () => {\r\n                        deleteSelectedTask();\r\n                        removeContextMenu();\r\n                    })\r\n                })();\r\n                \r\n            })();\r\n        \r\n\r\n            return { contextMenu };\r\n        })();\r\n\r\n    };\r\n\r\n\r\n    const displayTasks = (() => {\r\n        //create the container\r\n\r\n        const createParentContainers = (() => {\r\n            const highPriorityTaskContainer = document.createElement(\"div\");\r\n            highPriorityTaskContainer.id = \"tasks_container-high\";\r\n            highPriorityTaskContainer.className = \"tasks_container\";\r\n            contentArea.appendChild(highPriorityTaskContainer);    \r\n            \r\n            const normalPriorityTaskContainer = document.createElement(\"div\");\r\n            normalPriorityTaskContainer.id = \"tasks_container-normal\";\r\n            highPriorityTaskContainer.className = \"tasks_container\";\r\n            contentArea.appendChild(normalPriorityTaskContainer);    \r\n            \r\n            const completedContainer = document.createElement(\"div\");\r\n            completedContainer.id = \"tasks_container-completed\";\r\n            highPriorityTaskContainer.className = \"tasks_container\";\r\n            contentArea.appendChild(completedContainer);    \r\n            return { highPriorityTaskContainer, normalPriorityTaskContainer, completedContainer };\r\n        })();\r\n\r\n\r\n        //add task information to the container\r\n        (activeProject.tasks).forEach(element => {\r\n            \r\n            const taskContainer = document.createElement(\"div\");\r\n            taskContainer.className = \"task-container\";\r\n            taskContainer.dataset.id = element.title; // used for context menu referencing\r\n            (createParentContainers.normalPriorityTaskContainer).appendChild(taskContainer);\r\n\r\n            const titleContainer = document.createElement(\"div\");\r\n            titleContainer.className = \"tasks_container-title\";\r\n            taskContainer.appendChild(titleContainer);                 \r\n\r\n            const createHeading = (() => {\r\n                const title = document.createElement(\"h4\");\r\n                title.className = \"task-title\";\r\n                title.textContent = element.title;    \r\n                titleContainer.appendChild(title);\r\n\r\n            })();\r\n\r\n            const createDescription = (() => {\r\n                const description = document.createElement(\"p\");\r\n                description.className = \"task-description\";\r\n                description.textContent = element.description;\r\n                titleContainer.appendChild(description);\r\n            })();\r\n            \r\n            const createDueDate = (() => {\r\n                const dueDate = document.createElement(\"p\");\r\n                dueDate.className = \"task-due-date\";\r\n                dueDate.textContent = `Due: ${element.dueDate}`;\r\n                taskContainer.appendChild(dueDate);\r\n            })();\r\n\r\n            const applyContextMenuListeners = (() => {\r\n                taskContainer.addEventListener(\"contextmenu\", createContextMenu);\r\n            })();\r\n        })\r\n    })();\r\n\r\n}\r\n\r\n\r\n// ------------------------Event Listeners ----------------------------------------------------\r\nconst newTaskButton = document.querySelector(\"#button_new-task\");\r\nconst newProjectButton = document.querySelector(\"#button_new-project\");\r\n\r\nnewTaskButton.addEventListener(\"click\", triggerNewTaskPrompt);\r\nnewProjectButton.addEventListener(\"click\", triggerNewProjectPrompt);\r\n\r\n\r\n\n\n//# sourceURL=webpack://ToDoList/./src/interface.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;