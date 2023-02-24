import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React from 'react';
import Layout from './Page/Layout';
import HomePage from './HomePage/HomePage'

function App() {
  return (
    <React.Fragment>
  
       <Router>
       
        <Routes> 

          <Route index element={<Layout />}> 
            <Route index path='/' element={<HomePage/>}/>  

          </Route>
       
        </Routes>
     
      </Router>
    </React.Fragment>
  );
}

export default App;
