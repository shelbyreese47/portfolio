import React, {useState} from 'react';
import Project4 from './Project4';
import Project3 from './Project3';
import Project2 from './Project2';
import Project1 from './Project1';

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
    <div className="projectsContainer">
                <div class="carousel-button prev project-prev" onClick={prevClick}> 
                ◀︎ 
                </div>
                {/* these divs will contain the individual projects */}
                <div className="projects-container" >
                    <div style={ currentProject === 0 ? { display: 'block' } : { display : 'none'}}>
                        <Project4 />
                    </div>
                    <div style={ currentProject === 1 ? { display: 'block' } : { display : 'none'}}>
                        <Project3 />
                    </div>
                    <div style={ currentProject === 2 ? { display: 'block' } : { display : 'none'}}>
                        <Project2 />
                    </div>
                    <div style={ currentProject === 3 ? { display: 'block' } : { display : 'none'}}>
                        <Project1 />
                    </div>
                </div>
                        
                <div class="carousel-button next project-next" onClick={nextClick}>
                ►
                </div>
    </div>
    );
}

export default Projects;