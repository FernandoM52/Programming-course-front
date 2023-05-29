import styled from "styled-components";

export default function Header({ children }) {
  return (
    <StyledHeader>
      <div>
        {children}
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: black;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 65px;
  border-bottom: solid 1px white;
  div{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;

    button{
      color: purple;
      font-size: 20px;
      text-decoration: underline;
      background: transparent;
      border: none;
      cursor: pointer;

      &:hover{
        color: white;
      }
    }
  }
`;
