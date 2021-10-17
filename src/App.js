
import './App.css';
import { Route, Link } from 'react-router-dom'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import './App.css';

function App() {
  return (
		<div className='App'>
			<header>
				<Link to='/home'> Home </Link>
				<Link to='/aboutme'>About Me</Link>
				<Link to='/projects'>Projects</Link>
				<Link to='/skills'>Skills</Link>
				<Link to='/resume'>Resume</Link>
				<Link to='/contact'>Contact Me</Link>
			</header>
			<main>
				<div className='outerTitle'>
					<div className='title'>
						<h2>Shelby Reese</h2>
						<h3 className='softwareEngineer'>Software Engineer</h3>
					</div>
				</div>
				<Route path='/home' component={Home} />
				<Route path='/aboutme' component={AboutMe} />
				<Route path='/projects' component={Projects} />
			</main>
		</div>
	);
}

export default App;
