import React, {useState} from 'react';

// const next = document.querySelector('.next');
// const prev = document.querySelector('.prev');



function Projects(props) {
    const [currentImg, setCurrentImg] = useState(0);
    let currentImgIndex = 0;
    // let previousImgIndex = 0;
    const images = document.getElementsByClassName('images');
    
    const nextClick = ((event) => {
        if (currentImg > 3) {
            setCurrentImg(0);
            console.log('I am ackno')
        }
        else setCurrentImg(currentImg + 1);
    });
  
    
    const prevClick =( () => {
        // previousImgIndex = currentImgIndex;
        currentImgIndex -= 1;
        console.log(currentImgIndex)
        if (currentImgIndex < 0) {
            currentImgIndex = images.length - 1;
        }
    });
    return (
    <div className="projectContainer">
        <div className="flexLeft"></div>
        <div className="secondBackground">
            <div className="individualProject">
                <div className='projectDetails'>
                    <h2>Music Passport</h2>
                    <h4><em>Are you a live music enthusiast? Do you struggle with keeping track of your past and upcoming events? Welcome to Music Passport! Where you can find events near you, save past and future events to your passport, and review music festivals and venues.</em></h4>
                    <h4>Technologies Used:</h4>
                    <ul>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Mongoose</li>
                        <li>Mongodb</li>
                        <li>CSS</li>
                    </ul>
                </div>
            <div className = "projectImages">
                <div class="carousel-container">
                    {/* <!-- previous button --> */}
                    <div class="carousel-button prev" onClick={prevClick}>
                    {/* <!-- from linearicons icon font --> */}
                    <span class="lnr lnr-chevron-left"></span>
                    </div>
                {/* <div className="mainImageDiv">
                    <img className= "mainImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ1OQZ775PHbWnknSG0HQ9uiXxItIDn16hCA&usqp=CAU" alt="" />
                </div> */}
                {/* <div> */}
                <div class="carousel-images">
                    <img 
                        style={ currentImgIndex === 0 ? { display: 'block' } : { display : 'none'}}
                        className= "mainImage" 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ1OQZ775PHbWnknSG0HQ9uiXxItIDn16hCA&usqp=CAU" 
                        alt="" />
                    <img style={ currentImgIndex === 1 ? { display: 'block' } : { display : 'none'}}
                        className="secondPicture" 
                        src="https://bit.ly/3AY99if" 
                        alt="" />
                    <img 
                        style={ currentImgIndex === 2 ? { display: 'block' } : { display : 'none'}}
                        className="thirdPicture" 
                        src="https://bit.ly/3aSDiEP" 
                        alt="" />
                    <img
                        style={ currentImgIndex === 3 ? { display: 'block' } : { display : 'none'}} 
                        className="fourthPicture" 
                        src="https://bit.ly/3ARyj1S" 
                        alt="" />
                    {/* </div> */}
                    {/* <!-- next button --> */}
                    <div class="carousel-button next" onClick={nextClick}>
                    {/* <!-- from linearicons icon font --> */}
                    <span class="lnr lnr-chevron-right">+</span>
                    </div>
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
            </div>
            <div className = "projectImages">
                <div className="mainImageDiv">
                    <img className= "mainImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ1OQZ775PHbWnknSG0HQ9uiXxItIDn16hCA&usqp=CAU" alt="" />
                </div>
                <div>
                    <img className="secondPicture" src="https://bit.ly/3AY99if" alt="" />
                    <img className="thirdPicture" src="https://bit.ly/3aSDiEP" alt="" />
                    <img className="fourthPicture" src="https://bit.ly/3ARyj1S" alt="" />
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
            </div>
            <div className = "projectImages">
                <div className="mainImageDiv">
                    <img className= "mainImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ1OQZ775PHbWnknSG0HQ9uiXxItIDn16hCA&usqp=CAU" alt="" />
                </div>
                <div>
                    <img className="secondPicture" src="https://bit.ly/3AY99if" alt="" />
                    <img className="thirdPicture" src="https://bit.ly/3aSDiEP" alt="" />
                    <img className="fourthPicture" src="https://bit.ly/3ARyj1S" alt="" />
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
            </div>
           <div className = "projectImages">
                <div className="mainImageDiv">
                    <img className= "mainImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ1OQZ775PHbWnknSG0HQ9uiXxItIDn16hCA&usqp=CAU" alt="" />
                </div>
                <div>
                    <img className="secondPicture" src="https://bit.ly/3AY99if" alt="" />
                    <img className="thirdPicture" src="https://bit.ly/3aSDiEP" alt="" />
                    <img className="fourthPicture" src="https://bit.ly/3ARyj1S" alt="" />
                </div>
            </div>
            </div>
        </div>
    </div>
    );
}

export default Projects;