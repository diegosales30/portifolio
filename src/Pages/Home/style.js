import styled from "styled-components";

export const ContainerHome = styled.div`
  width: 100%;
  max-width: 1250px;
  border-radius: 10px;

  height: 100%;
  min-width: 320px;
  margin: auto;
`;

export const ContainerMain = styled.main`
  width: 100%;
  max-width: 1250px;
  border-radius: 10px;

  height: 100vh;
  min-width: 320px;

  display: flex;
  justify-content: center;
  margin-top: 30px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    div {
      margin-top: 100px;

      display: flex;
      justify-content: center;
      align-items: center;
      h2 {
        font-size: 1rem;
      }
    }
    section {
      img {
        width: 320px !important;
      }
    }
  }
  div {
    width: 55%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
      font-size: 1.5rem;
      width: 90%;
      color: var(--senary);
      padding: 10px;
      margin: auto;
    }

    img {
      width: 250px;
      animation: spin 10s linear infinite;
    }
    @keyframes spin {
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  }

  section {
    width: 45%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    .swing:hover {
      -webkit-animation: swing 1s ease;
      animation: swing 1s ease;
      -webkit-animation-iteration-count: 1;
      animation-iteration-count: 1;
    }

    img {
      width: 400px;
      &:hover {
        padding: 10px;
      }
    }
  }
`;
