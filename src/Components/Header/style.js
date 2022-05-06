import styled from "styled-components";

export const HeaderPage = styled.header`
  background-color: var(--tertiary);
  width: 100%;
  max-width: 1250px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  height: 100px;
  min-width: 320px;
  margin: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    margin-left: 15px;
    width: 75px;
    height: 75px;
    cursor: pointer;
    &:hover {
      border-radius: 100%;
      background-color: var(--quinary);
      border: 1px solid var(--senary);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }
  }

  div {
    margin-right: 55px;
    ul {
      padding: 10px;
      display: flex;
      justify-content: space-between;

      display: flex;
      width: 450px;
      height: 70px;
      li {
        padding: 10px;
        list-style: none;
        color: var(--senary);
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        &:hover {
          border-bottom: 2px solid var(--senary);
          margin-top: 2px;
        }
      }
    }
  }
`;
