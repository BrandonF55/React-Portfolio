import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React from 'react';
import Layout from './Page/Layout';
import HomePage from './HomePage/HomePage'
import ContactPage from './ContactPage/ContactPage';

function App() {
  return (
    <React.Fragment>
  
       <Router>
       
        <Routes> 

          <Route element={<Layout />}> 
            <Route index path='/' element={<HomePage/>}/>  
            <Route path='contact' element={<ContactPage/>}/>  

          </Route>
       
        </Routes>
     
      </Router>
    </React.Fragment>
  );
}

export default App;
