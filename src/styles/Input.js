import styled from "styled-components";

export const Input = styled.input`
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

  & ::placeholder {
    color: ${(props) => props.theme.red};
  }

  &:focus {
    outline-color: ${(props) => props.theme.white};
  }

  &:disabled {
    background-color: ${(props) => props.theme.ligthgray};
    color: ${(props) => props.theme.ligthgray};
  }
`;
