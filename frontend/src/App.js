
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navigation from './PortfolioContainer/Navbar/Navigation';
import Home from './PortfolioContainer/Home/Home';
import Profile from './PortfolioContainer/Home/Profile/Profile';
import About from './PortfolioContainer/AboutMe/About';
import Services from './PortfolioContainer/Services/Services';
import Skill from './PortfolioContainer/Skills/Skill';
import Project from './PortfolioContainer/Projects/Project';
import ContactMe from './PortfolioContainer/ContactMe/ContactMe';
import Blog from './PortfolioContainer/Blog/Blog';
import Footer from './PortfolioContainer/Footer/Footer'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navigation/>
    
      <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/profile' element={<Profile/>}/>
                <Route exact path='/about' element={<About/>}/>
                <Route exact path='/blog/*' element={<Blog/>}/>
                <Route exact path='/services' element={<Services/>}/>
                <Route exact path='/skills' element={<Skill/>}/>
                <Route exact path='/projects' element={<Project/>}/>
                <Route exact path='/contact' element={<ContactMe/>}/>
      </Routes>
    
      <Footer/>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
