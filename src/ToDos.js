//this module focuses on the logic revolving around tasks and projects

export const taskList = [];
export const projectList = [];

//------------------------------------Tasks--------------------------------------------------------------

//This class serves as the template for new task items
const Task = class {
    constructor(title, description, dueDate, highPriority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.highPriority = highPriority;
    this.completed = false;
    }
}

//This function is responsible for creating the new task objectd\s
export const createNewTask = (title, description, dueDate, highPriority) => {
    
    //this constructs the new object
    const newTask = new Task(title, description, dueDate, highPriority);

    const addToTaskList = (() => taskList.push(newTask))();

    return newTask;

}



//----------------------------Projects------------------------------------------------------------------

const Project = class {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.tasks = [];
    }
}

export const createNewProject = (title, description, dueDate) => {
    //this constructs the new object
    const newProject = new Project(title, description, dueDate);

    const addToProjectList = (() => projectList.push(newProject))();
}

//this function creates the "General" project which is the default project tasks get added to
const createDefaultProject = (() => createNewProject("Miscellaneous", "Unorganized tasks"))();

//this function assigns tasks to projects
export const assignTasktoProject = (project, task) => (project.tasks).push(task);
