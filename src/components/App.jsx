import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  '../global.module.scss'



import React from 'react';
import Layout from './Page/Layout';
import HomePage from './HomePage/HomePage'
import ContactPage from './ContactPage/ContactPage';
import ProjectPage from './ProjectPage/ProjectPage';
import ProjectNavigation from './ProjectPage/ProjectPageNavigation';

function App() {
  return (
    <React.Fragment>
  
       <Router>
       
        <Routes> 

          <Route element={<Layout />}> 
            <Route index path='/' element={<HomePage/>}/>  
            <Route path='contact' element={<ContactPage/>}/>  
            <Route path='projects' element={<ProjectPage/>}/>  
            <Route  index element={<ProjectNavigation/>}/>  
         
          </Route>
       
        </Routes>
     
      </Router>
    </React.Fragment>
  );
}

export default App;
