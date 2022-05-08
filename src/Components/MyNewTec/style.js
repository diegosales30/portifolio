import styled from "styled-components";

export const MyNewTecContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 2px solid white;
  text-align: center;

  h1 {
    color: white;
  }
  h4 {
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
    height: 100%;
    div {
      margin-left: 35px;
      img {
        width: 150px;
        height: 150px;
        &:hover {
          border: 2px solid white;
          box-shadow: 0 0 10px black;
        }
      }
    }
    @media (max-width: 700px) {
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      div {
        margin-top: 20px;
        img {
          margin-bottom: 15px;
        }
      }
    }
  }
`;
