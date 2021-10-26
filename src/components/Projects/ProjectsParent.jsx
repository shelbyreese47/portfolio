import React, {useState} from 'react';

// const next = document.querySelector('.next');
// const prev = document.querySelector('.prev');



function Projects(props) {
    const [currentProject, setCurrentProject] = useState(0);

    // let previousProjectIndex = 0;
    
    const nextClick = ((event) => {
        if (currentProject >= 3) {
            setCurrentProject(0);
        }
        else setCurrentProject(currentProject + 1);
    });
  
    
    const prevClick =( () => {
        
        if (currentProject <= 0) {
            setCurrentProject(3)
        } else {
            setCurrentProject(currentProject - 1);
            console.log(currentProject)
        }
    });
    return (
    <div className="projectContainer">
        <div className="secondBackground">
            
        
        </div>
    </div>
    );
}

export default Projects;