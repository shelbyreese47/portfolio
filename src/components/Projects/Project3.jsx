import React, {useState} from 'react';

// const next = document.querySelector('.next');
// const prev = document.querySelector('.prev');



function Project3(props) {
    const [currentImg, setCurrentImg] = useState(0);
    
    const nextClick = ((event) => {
        if (currentImg >= 3) {
            setCurrentImg(0);
        }
        else setCurrentImg(currentImg + 1);
    });
  
    
    const prevClick =( () => {
        
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
                        <h2>Personal Planner</h2>
                        <h4><em>Do you love organization? Are most online planners too busy and complicated? You have come to the right place!</em></h4>
                    </div>
                <div className='projectDetails'>
                    <div className="projectTech">
                        <h4>Technologies Used:</h4>
                        <ul>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Express</li>
                            <li>Mongoose</li>
                            <li>Mongodb</li>
                            <li>CSS</li>
                        </ul>
                    <div className="projectLink pl1">
                        <div className="logoContainer">
                            <img className="projectLogo" src='https://i.imgur.com/qeWoktn.png?1' alt='github logo'/>
                        </div>
                            <a className="projectAnchorTag" href="https://github.com/JSN-SEIR-809">Check out the code</a>
                    </div>
                    <div className="projectLink pl2">
                        <div className="logoContainer">
                            <img className="projectLogo" src='https://png.pngtree.com/png-clipart/20200225/original/pngtree-notes-icon-in-neon-style-png-image_5272620.jpg' alt='music icon'/>
                        </div>
                            <a className="projectAnchorTag" href="https://eloquent-saha-0c9194.netlify.app/">Check out the website</a>
                    </div>
                    </div>
                        
                    <div className = "projectImages">
                            <div class="carousel-button prev" onClick={prevClick}> ◀︎ 
                            </div>
                        <div class="carousel-images">
                            <img 
                                style={ currentImg === 0 ? { display: 'block' } : { display : 'none'}}
                                className= "mainImage" 
                                src="https://i.imgur.com/4uTTTgX.png"
                                alt="" />
                            <img style={ currentImg === 1 ? { display: 'block' } : { display : 'none'}}
                                className="mainImage" 
                                src="https://bit.ly/3AY99if" 
                                alt="" />
                            <img 
                                style={ currentImg === 2 ? { display: 'block' } : { display : 'none'}}
                                className="mainImage" 
                                src="https://i.imgur.com/24yqzOE.png" 
                                alt="" />
                            <img
                                style={ currentImg === 3 ? { display: 'block' } : { display : 'none'}} 
                                className="mainImage" 
                                src="https://i.imgur.com/5A0zZpP.png"
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

export default Project3;