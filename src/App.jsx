import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/pages/About";
// import ProjectGallery from "./components/pages/ProjectGallery";
// import Skills from "./components/pages/Skills";
// import Contact from "./components/Footer/Contact";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <Home />
      <About />
      {/* <ProjectGallery />
      <Skills />
      <Contact /> */}
    </div>
  );
}

export default App;
