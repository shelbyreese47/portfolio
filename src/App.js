
import './App.css';
import { Route, Link, Redirect } from 'react-router-dom'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Skills from './components/Skills'
import ContactMe from './components/ContactInfo'

import './App.css';

function App() {
  return (
		<div className='App'>
			<header className='nav'>
				<Link to='/home'>
					<img
						className='logoImage'
						src='https://i.imgur.com/wlKpYJF.png?1'
						alt='SR home'
					/>
				</Link>
				<Link className='navLink' to='/aboutme'>
					About Me
				</Link>
				<Link className='navLink' to='/projects'>
					Projects
				</Link>
				<Link className='navLink' to='/skills'>
					Skills
				</Link>
				<Link className='navLink' to='/resume'>
					Resume
				</Link>
				<Link className='navLink' to='/contact'>
					Contact Me
				</Link>
			</header>
			<main>
				<Route
					exact
					path='/'
					render={() => {
						return <Redirect to='/home' />;
					}}
				/>
				<Route path='/home' component={Home} />
				<Route path='/aboutme' component={AboutMe} />
				<Route path='/projects' component={Projects} />
				<Route path='/skills' component={Skills} />
				<Route path='/resume' component={Resume} />
				<Route path='/contact' component={ContactMe} />
			</main>
		</div>
	);
}

export default App;
