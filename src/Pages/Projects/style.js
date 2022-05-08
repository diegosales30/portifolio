import styled from "styled-components";

export const ContainerProject = styled.div`
  width: 100%;
  max-width: 1250px;
  border-radius: 10px;

  height: 100vh;
  min-width: 320px;
  margin: auto;
  h1 {
    margin-top: 10px;
    color: white;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  a {
    margin-top: 30px;
    color: white;
    font-size: 45px;
    text-align: center;
    p {
      font-size: 15px;
    }
  }
  section {
    display: flex;
    @media (max-width: 768px) {
      flex-direction: column;
    }

    figure {
      margin: 15px;
      width: 260px;
      height: 320px;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: 0 0 10px var(--primary);
      background-color: var(--primary);
      cursor: pointer;
      &:hover {
        background-color: black;
      }
      img {
        border-radius: 10px;
        width: 100%;
        height: 250px;
      }
      h4 {
        margin-top: 10px;
        text-align: center;
        color: #ffff;
      }
      p {
        margin-top: 10px;
        text-align: center;
        color: #ffff;
        font-size: 12px;
      }
    }
  }
`;
