import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Navbar/Header";
import Home from "./components/Home/Home";
import About from "./components/pages/About";
import Footer from "./components/Footer/Footer";
import Skills from "./components/pages/Skills";
import Projects from "./components/Projects/Projects";
import projectData from "./projects.json";
import Contact from "./components/pages/Contact";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const [projects, setProjects] = useState(projectData);

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    } else if (currentPage === "About") {
      return <About />;
    } else if (currentPage === "Skills") {
      return <Skills />;
    } else if (currentPage === "Projects") {
      return projects.map((projects) => (
        <Projects
          id={projects.id}
          title={projects.title}
          image={projects.image}
          description={projects.description}
          link={projects.link}
        />
      ));
    } else if (currentPage === "Contact") {
      return <Contact />;
    }
  };

  return (
    <Router>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </Router>
  );
}

export default App;
