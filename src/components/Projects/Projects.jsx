import React, {useState} from 'react';

// const next = document.querySelector('.next');
// const prev = document.querySelector('.prev');



function Projects(props) {
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
        <div className="flexLeft"></div>
        <div className="secondBackground">
            <div className="individualProject">
                    <div className="projectHeaders">
                        <h2>Music Passport</h2>
                        <h4><em>Are you a live music enthusiast? Do you struggle with keeping track of your past and upcoming events? Welcome to Music Passport! Where you can find events near you, save past and future events to your passport, and review music festivals and venues.</em></h4>
                    </div>
                <div className='projectDetails'>
                    <div className="projectTech">
                        <h4>Technologies Used:</h4>
                        <ul>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Mongoose</li>
                            <li>Mongodb</li>
                            <li>CSS</li>
                        </ul>
                    <div className="projectLink">
                            <img className="projectLogo" src='https://i.imgur.com/qeWoktn.png?1' alt='github logo'/>
                            <a className="projectAnchorTag" href="https://github.com/MusicPassport">Check out the code</a>
                    </div>
                    <div className="projectLink">
                            <img className="projectLogo" src='https://i.imgur.com/atoJt8J.png?1' alt='music icon'/>
                            <a className="projectAnchorTag" href="www.dismusic.com">Check out the website</a>
                    </div>
                    </div>
                        
                    <div className = "projectImages">
                            <div class="carousel-button prev" onClick={prevClick}> ◀︎ 
                            </div>
                        <div class="carousel-images">
                            <img 
                                style={ currentImg === 0 ? { display: 'block' } : { display : 'none'}}
                                className= "mainImage" 
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ1OQZ775PHbWnknSG0HQ9uiXxItIDn16hCA&usqp=CAU" 
                                alt="" />
                            <img style={ currentImg === 1 ? { display: 'block' } : { display : 'none'}}
                                className="mainImage" 
                                src="https://bit.ly/3AY99if" 
                                alt="" />
                            <img 
                                style={ currentImg === 2 ? { display: 'block' } : { display : 'none'}}
                                className="mainImage" 
                                src="https://bit.ly/3aSDiEP" 
                                alt="" />
                            <img
                                style={ currentImg === 3 ? { display: 'block' } : { display : 'none'}} 
                                className="mainImage" 
                                src="https://bit.ly/3ARyj1S" 
                                alt="" />
                        </div>
                        <div class="carousel-button next" onClick={nextClick}>
                        ►
                        </div>
                    </div>
                </div>
            </div>
            <div className="individualProject">
            <div className='projectDetails'>
                <h2>Personal Planner</h2>
                <h4><em>Do you love organization? Are most online planners too busy and complicated? You have come to the right place!</em></h4>
                <h4>Technologies Used:</h4>
                <ul>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Express</li>
                    <li>Mongoose</li>
                    <li>Mongodb</li>
                    <li>CSS</li>
                </ul>
                <div className="projectLink">
                        <img className="projectLogo" src='https://i.imgur.com/qeWoktn.png?1' alt='github logo'/>
                        <a className="projectAnchorTag" href="https://github.com/JSN-SEIR-809">Check out the code</a>
                </div>
                <div className="projectLink">
                        <img className="projectLogo" src='https://i.imgur.com/atoJt8J.png?1' alt='music icon'/>
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
                            src="https://i.imgur.com/G9XuQFj.png" 
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
            <div className="individualProject">
            <div className='projectDetails'>
                <h2>Hopalicious</h2>
                <h4><em>This one's for all you homebrewers out there!</em></h4>
                <h4>Technologies Used:</h4>
                <ul>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Express</li>
                    <li>Mongoose</li>
                    <li>Mongodb</li>
                    <li>CSS</li>
                </ul>
            <div className="projectLink">
                            <img className="projectLogo" src='https://i.imgur.com/qeWoktn.png?1' alt='github logo'/>
                            <a className="projectAnchorTag" href="https://github.com/shelbyreese47/hopalicious">Check out the code</a>
                    </div>
                    <div className="projectLink">
                            <img className="projectLogo" src='https://i.imgur.com/atoJt8J.png?1' alt='music icon'/>
                            <a className="projectAnchorTag" href="https://hopalicious.netlify.app/">Check out the website</a>
                    </div>
                        
                </div>
            <div className = "projectImages">
                    <div class="carousel-button prev" onClick={prevClick}> ◀︎ 
                    </div>
                <div class="carousel-images">
                    <img 
                        style={ currentImg === 0 ? { display: 'block' } : { display : 'none'}}
                        className= "mainImage" 
                        src="https://user-images.githubusercontent.com/75228135/134451661-57a0db2a-9a38-4d95-86f8-7561c585c602.png" 
                        alt="" />
                    <img style={ currentImg === 1 ? { display: 'block' } : { display : 'none'}}
                        className="mainImage" 
                        src="https://user-images.githubusercontent.com/75228135/134451674-9274faef-5319-47e7-9483-87cfab9b74d6.png" 
                        alt="" />
                    <img 
                        style={ currentImg === 2 ? { display: 'block' } : { display : 'none'}}
                        className="mainImage" 
                        src="https://user-images.githubusercontent.com/75228135/134451679-def70403-3b78-4016-9767-7d02bb54791c.png" 
                        alt="" />
                    <img
                        style={ currentImg === 3 ? { display: 'block' } : { display : 'none'}} 
                        className="mainImage" 
                        src="https://i.imgur.com/0iERePj.png" 
                        alt="" />
                </div>
                    <div class="carousel-button next" onClick={nextClick}>
                    ►
                    </div>
            </div>
            </div>
            <div className="individualProject">
                <div className='projectDetails'>
                    <h2>Build a Minion</h2>
                    <h4><em>Do you love organization? Are most online planners too busy and complicated? You have come to the right place!</em></h4>
                    <h4>Technologies Used:</h4>
                    <ul>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Express</li>
                        <li>Mongoose</li>
                        <li>Mongodb</li>
                        <li>CSS</li>
                    </ul>
                    <div className="projectLink">
                        <img className="projectLogo" src='https://i.imgur.com/qeWoktn.png?1' alt='github logo'/>
                        <a className="projectAnchorTag" href="https://github.com/MusicPassport">Check out the code</a>
                    </div>
                    <div className="projectLink">
                        <img className="projectLogo" src='https://i.imgur.com/atoJt8J.png?1' alt='music icon'/>
                        <a className="projectAnchorTag" href="www.dismusic.com">Check out the website</a>
                    </div>
                            
                </div>
                <div className = "projectImages">
                    <div class="carousel-button prev" onClick={prevClick}> ◀︎ 
                    </div>
                <div class="carousel-images">
                    <img 
                        style={ currentImg === 0 ? { display: 'block' } : { display : 'none'}}
                        className= "mainImage" 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ1OQZ775PHbWnknSG0HQ9uiXxItIDn16hCA&usqp=CAU" 
                        alt="" />
                    <img style={ currentImg === 1 ? { display: 'block' } : { display : 'none'}}
                        className="mainImage" 
                        src="https://bit.ly/3AY99if" 
                        alt="" />
                    <img 
                        style={ currentImg === 2 ? { display: 'block' } : { display : 'none'}}
                        className="mainImage" 
                        src="https://bit.ly/3aSDiEP" 
                        alt="" />
                    <img
                        style={ currentImg === 3 ? { display: 'block' } : { display : 'none'}} 
                        className="mainImage" 
                        src="https://bit.ly/3ARyj1S" 
                        alt="" />
                </div>
                <div class="carousel-button next" onClick={nextClick}>
                    ►
                </div>
            </div>
        </div>
    </div>
    </div>
    );
}

export default Projects;