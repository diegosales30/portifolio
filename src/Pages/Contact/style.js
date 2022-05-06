import styled from "styled-components";

export const ContainerContact = styled.div`
  width: 100%;
  max-width: 1250px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  height: 100vh;
  min-width: 320px;
  margin: auto;
  main {
    margin: auto;
    width: 80%;
    border: 1px solid red;
    display: flex;
    justify-content: space-around;
  }
  figure {
    border: 1px solid black;
  }
  section {
    width: 400px;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
  }
`;
