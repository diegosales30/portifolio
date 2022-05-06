import styled from "styled-components";

export const MyNewTecContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 2px solid white;
  h1 {
    color: white;
  }
  @media (max-width: 700px) {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    h1 {
      font-size: 25px;
    }
  }

  section {
    display: flex;
    width: 700px;
    justify-content: center;
    align-items: center;
    height: 300px;
    div {
      margin-left: 35px;
      img {
        width: 100%;
        &:hover {
          border: 2px solid white;
          box-shadow: 0 0 10px black;
        }
      }
    }
    @media (max-width: 700px) {
      margin-top: 50px;
      display: flex;
      flex-direction: column;
      div {
        margin-top: 35px;
        img {
        }
      }
    }
  }
`;
