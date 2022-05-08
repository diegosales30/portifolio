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
      margin-top: 50px;

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

      h1,
      h3 {
        text-align: center;
        color: white;
        letter-spacing: 3px;
        margin-top: 17px;
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
