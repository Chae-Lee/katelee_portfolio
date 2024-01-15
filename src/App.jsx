import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Navbar/Header";
import Home from "./components/Home/Home";
import About from "./components/pages/About";
import Footer from "./components/Footer/Footer";
import Skills from "./components/pages/Skills";
import Projects from "./components/Projects/Projects";
import projectData from "./projects.json";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const [projects, setProjects] = useState(projectData);

  const removeProjects = (id) => {
    const newProjects = projects.filter((projects) => projects.id !== id);
    setProjects(newProjects);
  };

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
    }
  };

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
