import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Navbar/Header";
import Home from "./components/Home/Home";
import About from "./components/pages/About";
import Contact from "./components/Footer/Contact";
import Skills from "./components/pages/Skills";
// import ProjectGallery from "./components/pages/ProjectGallery";
// import Skills from "./components/pages/Skills";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    } else if (currentPage === "About") {
      return <About />;
    } else if (currentPage === "Skills") {
      return <Skills />;
      // } else if (currentPage === "ProjectGallery") {
      //   return <ProjectGallery />;
      // }
    }
  };

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Contact />
    </div>
  );
}

export default App;
