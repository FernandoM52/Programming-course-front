import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HeaderContext from "../../contexts/HeaderContext.js";
import styled from "styled-components";

export default function StudentPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { setHeader } = useContext(HeaderContext);

  useEffect(() => {
    setHeader(
      <>
        <button onClick={() => navigate(`/students/edit/${id}`)}>Editar dados do estudante</button>
        <button onClick={() => navigate(-1)}>Voltar</button>
      </>
    );

  }, []);

  return (
    <div>
      StudentPage
    </div>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img{
    width: 100px;
    border: 100%;
  }
`;
