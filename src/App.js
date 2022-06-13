import { Toaster } from 'react-hot-toast';
import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/Header/NavBar';
import Home from './components/Pages/Home';
import { Routes, Route } from "react-router-dom";
import About from './components/Pages/About';
import Projects from './components/Pages/Projects';
import Blog from './components/Pages/Blog';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer></Footer>
      <Toaster />
    </div>
  );
}

export default App;
