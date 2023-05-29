import { useContext, useEffect } from "react";
import styled from "styled-components";
import HeaderContext from "../../contexts/HeaderContext.js";
import { useNavigate } from "react-router-dom";
import { useGetClasses } from "../../services/classes.js";
import { useGetStudents } from "../../services/students.js";

export default function StudentsClassesPage() {
  const { setHeader } = useContext(HeaderContext);
  const { classes, getClasses } = useGetClasses();
  const { students, getStudents } = useGetStudents();
  const navigate = useNavigate();

  useEffect(() => {
    getClasses();
    setHeader(
      <>
        <button onClick={() => navigate("/students/register")}>Cadastrar estudante</button>
        <button onClick={() => navigate("/projects/deliver")}>Entregar projeto</button>
        <button onClick={() => navigate("/projects")}>Projetos entregues</button>
        <button onClick={() => navigate(-1)}>Voltar</button>
      </>
    );

  }, []);

  function navigateToStudentPage(id) {
    navigate(`/students/${id}`);
  }

  return (
    <Container>
      <StyledSidebar>
        {!classes && <>Carregando turmas...</>}
        {classes && classes.length > 0 && (
          <>
            Turmas
            {classes?.map(({ id, code }) => (
              <li key={id}>
                <button onClick={() => getStudents(code)}>{code}</button>
              </li>
            ))}
          </>
        )
        }

      </StyledSidebar >
      <StudentsList>
        {!students && <></>}
        {students && students.length > 0 && (
          <>
            {students?.map(({ id, image, name }) => (
              <li key={id} onClick={() => navigateToStudentPage(id)}>
                <img src={image} alt="Foto do aluno" />
                {name}
              </li>
            ))}
          </>
        )}

      </StudentsList>
    </Container >
  );
}

const Container = styled.div`
  display: flex;
  padding-top: 65px;
  overflow: hidden;
  height: 100vh;
`;

const StyledSidebar = styled.ul`
  padding-top: 35px;
  width: 25%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  border-right: 1px solid;
  font-size: 20px;
  button{
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
    &:hover{
      filter: opacity(0.3);
      text-decoration: underline;
    }
  }

`;

const StudentsList = styled.ul`
  padding-top: 35px;
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  font-size: 20px;
  li{
    width: 75%;
    display: flex;
    align-items: center;
    border: solid 1px;
    gap: 25px;
    img{
      margin-left: 15px;
      width: 80px;
      border-radius: 100%;
    }
  }
`;
