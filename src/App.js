import About from "./Components/About";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Resume from "./Components/Resume";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mouseOverWindow, setMouseOverWindow] = useState(true);
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    axios.get(`https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae`)
      .then(resp => setData(resp.data.user))
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
        setIsVisible(true);
    }, 200); 
    return () => clearTimeout(timer);
  }, [data]);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnterWindow = () => {
    setMouseOverWindow(true);
  };

  const handleMouseLeaveWindow = () => {
    setMouseOverWindow(false);
  };

  return (
    <div className="App"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnterWindow}
      onMouseLeave={handleMouseLeaveWindow}
    >
      <BrowserRouter>
        <div className="container">
          <Navbar />
          <Routes>
            <Route element={<About data={data} isVisible={isVisible}  />} path="/" />
            <Route element={<Resume data={data} isVisible={isVisible} />} path="/resume" />
            <Route element={<Projects data={data} isVisible={isVisible}/>} path="/projects" />
            <Route element={<Skills data={data} isVisible={isVisible}/>} path="/skills" />
            <Route element={<Contact data={data} isVisible={isVisible}/>} path="/contact" />
          </Routes>
        </div>
      </BrowserRouter>
      {mouseOverWindow && <CustomCursor position={mousePosition} />}
    </div>
  );
}

const CustomCursor = ({ position }) => {
  const { x, y } = position;

  return (
  <div className="custom-cursor" style={{ left: x, top: y, opacity: 0.5 }}></div>
  );
};


export default App;
