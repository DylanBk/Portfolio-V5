import { Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home.tsx';
import About from './components/pages/About.tsx';
import Projects from './components/pages/Projects.tsx';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects />} />
    </Routes>
  );
}