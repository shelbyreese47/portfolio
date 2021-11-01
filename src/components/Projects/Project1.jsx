import React, {useState} from 'react';

// const next = document.querySelector('.next');
// const prev = document.querySelector('.prev');



function Project1(props) {
    const [currentImg, setCurrentImg] = useState(0);
    let currentImgIndex = 0;
    // let previousImgIndex = 0;
    
    const nextClick = ((event) => {
        if (currentImg >= 3) {
            setCurrentImg(0);
        }
        else setCurrentImg(currentImg + 1);
    });
  
    
    const prevClick =( () => {
        // previousImgIndex = currentImgIndex;
        
        if (currentImg <= 0) {
            setCurrentImg(3)
        } else {
            setCurrentImg(currentImg - 1);
            console.log(currentImg)
        }
    });
    return (
    <div className="projectContainer">
        <div div className="secondBackground">
            <div className="individualProject">
                    <div className="projectHeaders">
                        <h2>Build a Minion</h2>
                        <h4><em>Balthazar has taken over Gru's lab and is making evil minions! Help Gru and his minions by guessing words correctly.</em></h4>
                    </div>
                <div className='projectDetails'>
                    <div className="projectTech">
                        <h4>Technologies Used:</h4>
                        <ul>
                            <li>JavaScript</li>
                            <li>CSS</li>
                            <li>HTML</li>
                        </ul>
                    <div className="projectLink pl1">
                        <div className="logoContainer">
                            <img className="projectLogo" src='https://i.imgur.com/qeWoktn.png?1' alt='github logo'/>
                        </div>
                            <a className="projectAnchorTag" href="https://github.com/shelbyreese47/BuildAMinion">Check out the code</a>
                    </div>
                    <div className="projectLink pl2">
                        <div className="logoContainer">
                            <img className="projectLogo" src={process.env.PUBLIC_URL + "/evilStep.png"}  alt='music icon'/>
                        </div>
                            <a className="projectAnchorTag" href="https://shelbyreese47.github.io/BuildAMinion/">Check out the website</a>
                    </div>
                    </div>
                        
                    <div className = "projectImages">
                            <div class="carousel-button prev" onClick={prevClick}> ◀︎ 
                            </div>
                        <div class="carousel-images">
                            <img 
                                style={ currentImg === 0 ? { display: 'block' } : { display : 'none'}}
                                className= "mainImage" 
                                src= {process.env.PUBLIC_URL + "/minionLandingPage.png"} 
                                alt="" />
                            <img style={ currentImg === 1 ? { display: 'block' } : { display : 'none'}}
                                className="mainImage" 
                                src={process.env.PUBLIC_URL + "/minionLevel1.png"} 
                                alt="" />
                            <img 
                                style={ currentImg === 2 ? { display: 'block' } : { display : 'none'}}
                                className="mainImage" 
                                src={process.env.PUBLIC_URL + "/minionLevel3.png"} 
                                alt="" />
                            <img
                                style={ currentImg === 3 ? { display: 'block' } : { display : 'none'}} 
                                className="mainImage" 
                                src={process.env.PUBLIC_URL + "/minionLose.png"} 
                                alt="" />
                        </div>
                        <div class="carousel-button next" onClick={nextClick}>
                        ►
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Project1;