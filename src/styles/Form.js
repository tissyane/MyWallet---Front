import styled from "styled-components";

export const Form = styled.form`
  & input {
    width: 100%;
    height: 58px;
    background-color: ${(props) => props.theme.white};
    border-radius: 5px;

    border: none;
    display: block;
    margin: 13px auto;
    font-size: 20px;
    line-height: 23px;
    padding-left: 15px;

    input ::placeholder {
      color: ${(props) => props.theme.red};
    }

    input:focus {
      outline-color: ${(props) => props.theme.white};
    }

    input:disabled {
      background-color: ${(props) => props.theme.ligthgray};
      color: ${(props) => props.theme.ligthgray};
    }
  }

  & button {
    width: 100%;
    height: 46px;
    margin: 13px auto;
    background-color: ${(props) => props.theme.orchid};
    border-radius: 5px;
    color: ${(props) => props.theme.white};
    font-family: "Raleway";
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    border: none;
    display: block;
    cursor: pointer;

    &:disabled {
      opacity: 0.7;
      cursor: default;
    }
  }
`;
