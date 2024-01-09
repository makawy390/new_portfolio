import './App.css'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Root from './components/root/Root';
import { lazy } from 'react';
import ProjectDetails from './components/projects/ProjectDetails';
import SignUp from './forms/sign-up/SignUp';
import SignIn from './forms/sign-in/SignIn';
const Home = lazy(()=>import ('./components/home/Home'));
const About = lazy(()=>import ('./components/about-me/About'));
const Projects = lazy(()=>import ('./components/projects/Projects'));
const Contact = lazy(()=>import ('./components/contact/Contact'));
const Skills = lazy(()=> import ('./components/skills/Skills')) 
function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <Root />,
      errorElement :  <h2>Error..........</h2>,
      children : [
        {index : true , element : <Home />},
        {
          path : '/about',
          element : <About />
        },
        {
          path : '/skills',
          element : <Skills />
        },
        {
          path : '/portfolio',
          element : <Projects />
        },
        {
          index : true,
          path: 'portfolio/:id',
          element : <ProjectDetails />
        },
        {
          path : '/contact',
          element : <Contact />
        },{   
          path : '/signup',
          element : <SignUp />
        },
        {   
          path : '/signin',
          element : <SignIn />
        }  

            
      ]
    },
   
  ])
  return (
    <>
    <RouterProvider router={router} />    
    </>
  )
}

export default App
