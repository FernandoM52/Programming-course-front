import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import StudentsClassesPage from "./pages/StudentsClassesPage";
import RegisterStudentPage from "./pages/RegisterStudentPage";
import StudentPage from "./pages/StudentPage";
import EditStudentPage from "./pages/EditStudentPage";
import ProjectsPage from "./pages/ProjectsPage";
import DeliveryProjectsPage from "./pages/DeliveryProjectsPage";

function App() {

  return (
    <BrowserRouter>
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
  )
}

export default App;
