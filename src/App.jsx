import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import StudentsClassesPage from "./pages/StudentsClassesPage/index.jsx";
import RegisterStudentPage from "./pages/RegisterStudentPage/index.jsx";
import StudentPage from "./pages/StudentPage/index.jsx";
import EditStudentPage from "./pages/EditStudentPage/index.jsx";
import ProjectsPage from "./pages/ProjectsPage/index.jsx";
import DeliveryProjectsPage from "./pages/DeliveryProjectsPage/index.jsx";
import { useState } from "react";
import HeaderContex from "./contexts/HeaderContext.js";
import Header from "./components/Header.jsx";
import styled from "styled-components";

function App() {
  const [header, setHeader] = useState();

  return (
    <PagesContainer>
      <HeaderContex.Provider value={{ header, setHeader }}>
        <BrowserRouter>
          <Header>
            {header}
          </Header>
          <Routes>
            <Route path="/" element={<Navigate to="/students" />} />
            <Route path="/students" element={<StudentsClassesPage />} />
            <Route path="/students/register" element={<RegisterStudentPage />} />
            <Route path="/students/:id" element={<StudentPage />} />
            <Route path="/students/edit/:id" element={<EditStudentPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/deliver" element={<DeliveryProjectsPage />} />
          </Routes>
        </BrowserRouter>
      </HeaderContex.Provider>
    </PagesContainer>
  );
}

export default App;

const PagesContainer = styled.main`
  max-height: 100vh;
`;
