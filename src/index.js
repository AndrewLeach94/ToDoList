import { taskList, createNewTask, projectList, createNewProject } from './ToDos.js'
import { updateProjectsNav, updateProjectViewer } from './interface.js'

updateProjectsNav();

//this function runs to populate the viewer on page load
    const initialPageLoad = (() => {
        window.addEventListener('load', (event) => {
            console.log('The page has fully loaded');
        
            updateProjectViewer(projectList[0]);
            })
    })();
