// this module handles all the code related to handling the UI
import { taskList, createNewTask, projectList, createNewProject } from './ToDos.js';

export const updateProjectsTab = () => {
    const projectNav = document.querySelector("#project-list");

    //loop through project array to create buttons lsting the project titls
    projectList.forEach(element => {
        const newButton = document.createElement("button");
        newButton.id = `project-${element.name}-toggle`;
        newButton.class = "project-toggle";
        newButton.textContent = element.title;
        projectNav.appendChild(newButton);
    });
    
}