import styled from "styled-components";

export const ContainerLand = styled.div`
  background-color: var(--tertiary);
  width: 100%;
  max-width: 1250px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  height: 100vh;
  min-width: 320px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: var(--senary);
    margin: auto;
    text-align: center;
    font-size: 2.5rem;
  }

  img {
    width: 80%;
    min-width: 300px;
  }

  div {
    button {
      width: 350px;
      height: 200px;
      margin-top: 20px;
      border: none;
      background-color: var(--tertiary);
      color: var(--senary);
      font-size: 17px;
      font-weight: 500;
    }
    @keyframes fa-blink {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
      100% {
        opacity: 0;
      }
    }
    button.fa-blink {
      -webkit-animation: fa-blink 1.3s linear infinite;
      -moz-animation: fa-blink 1.3s linear infinite;
      -ms-animation: fa-blink 1.3s linear infinite;
      -o-animation: fa-blink 1.3s linear infinite;
      animation: fa-blink 1.3s linear infinite;
    }
  }
`;
