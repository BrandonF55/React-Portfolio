import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../global.module.scss'

import React from 'react';
import Layout from './Page/Layout';
import HomePage from './HomePage/HomePage'
import ContactPage from './ContactPage/ContactPage';
import ProjectPage from './ProjectPage/ProjectPage';
import ProjectPageNavigation from './ProjectPage/ProjectPageNavigation';
import GalleryGram from './ProjectPage/GalleryGram';
import MrFenksSnowboards from './ProjectPage/MrFenksSnowboards';
import { useThemeContext } from '../state/ThemeProvider';


function App() {
  const { theme } = useThemeContext();

  return (
    <div className={`App ${theme}`}>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route index path='/' element={<HomePage />} />
            <Route path='contact' element={<ContactPage />} />
            <Route path='projects' element={<ProjectPage />} />
            <Route index element={<ProjectPageNavigation />} />
            <Route path='projects/gallerygram' element={<GalleryGram />} />
            <Route path='projects/mrfenks-snowboards' element={<MrFenksSnowboards />} />
          </Route>
        </Routes>
      </Router>
    </div>


  );
}

export default App;
