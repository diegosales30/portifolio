import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1250px;
  border-radius: 10px;

  height: 100%;

  margin: auto;

  main {
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      margin-top: 100px;

      padding: 0;

      box-sizing: border-box;
      img {
        width: 90%;
        min-width: 250px;
      }
    }
    div {
      height: 70vh;
      width: 450px;
      margin-left: 50px;
      h1,
      h3 {
        text-align: center;
        color: white;
        margin-top: 18px;
      }
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;

      div {
        width: 300px;
        height: 50%;
        margin-bottom: 20px;
      }
    }
  }
`;
