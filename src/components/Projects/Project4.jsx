import React, {useState} from 'react';

// const next = document.querySelector('.next');
// const prev = document.querySelector('.prev');



function Project4(props) {
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
                        <h2>Wandr</h2>
                        <h4><em>Are you a live music enthusiast? Do you love adventuring out and trying new things?! Welcome to Wandr! Where you can find events near you, save past and future events to your passport, and save memories from events.</em></h4>
                    </div>
                <div className='projectDetails'>
                    <div className="projectTech">
                        <h4>Technologies Used:</h4>
                        <ul>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Postgres</li>
                            <li>Python</li>
                            <li>AWS</li>
                            <li>Sass</li>
                        </ul>
                    <div className="projectLink pl1">
                        <div className="logoContainer">
                            <img className="projectLogo" src='https://i.imgur.com/qeWoktn.png?1' alt='github logo'/>
                        </div>
                            <a className="projectAnchorTag" href="https://github.com/MusicPassport">Check out the code</a>
                    </div>
                    <div className="projectLink pl2">
                        <div className="logoContainer">
                            <img className="projectLogo" src={process.env.PUBLIC_URL + '/wandrlogo.png'} alt='music icon'/>
                        </div>
                            <a className="projectAnchorTag" href="https://wandr.netlify.app/">Check out the website</a>
                    </div>
                    </div>
                        
                    <div className = "projectImages">
                            <div class="carousel-button prev" onClick={prevClick}> ◀︎ 
                            </div>
                        <div class="carousel-images">
                            <img 
                                style={ currentImg === 0 ? { display: 'block' } : { display : 'none'}}
                                className= "mainImage" 
                                src={process.env.PUBLIC_URL + "/wandrLandingPage.png"} 
                                alt="" />
                            <img style={ currentImg === 1 ? { display: 'block' } : { display : 'none'}}
                                className="mainImage" 
                                src={process.env.PUBLIC_URL + "/wandrDiscover.png"}  
                                alt="" />
                            <img 
                                style={ currentImg === 2 ? { display: 'block' } : { display : 'none'}}
                                className="mainImage" 
                                src={process.env.PUBLIC_URL + "/wandrDashboard.png"} 
                                alt="" />
                            <img
                                style={ currentImg === 3 ? { display: 'block' } : { display : 'none'}} 
                                className="mainImage" 
                                src={process.env.PUBLIC_URL + "/wandrMemories.png"} 
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

export default Project4;