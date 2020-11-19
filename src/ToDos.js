//this module focuses on the logic revolving around tasks and projects

const taskList = [];
const projectList = [];

//------------------------------------Tasks--------------------------------------------------------------

//This class serves as the template for new task items
const Task = class {
    constructor(title, description, dueDate, priority, assignedProject) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.assignedProject = assignedProject;
    }
}

//This function is responsible for creating the new task objectd\s
const createNewTask = (title, description, dueDate, priority) => {
    
    //this constructs the new object
    const newTask = new Task(title, description, dueDate, priority);

    const addToTaskList = (() => taskList.push(newTask))();

}

//----------------------------Projects------------------------------------------------------------------

const Project = class {
    constructor(title, description, dueDate) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.tasks = [];
    }
}

const createNewProject = (title, description, dueDate) => {
    //this constructs the new object
    const newProject = new Project(title, description, dueDate);

    const addToProjectList = (() => projectList.push(newProject))();
}

//this function creates the "General" project which is default project tasks get added to
const createDefaultProject = (() => createNewProject("General", "Unorganized tasks"))();








export { createNewTask, taskList, projectList, createNewProject }

