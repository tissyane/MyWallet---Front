import styled from "styled-components";

export const Input = styled.input`
  width: 85vw;
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
    color: ${(props) => props.theme.black};
  }

  &:focus {
    outline-color: none;
  }

  &:disabled {
    background-color: ${(props) => props.theme.ligthgray};
    color: ${(props) => props.theme.ligthgray};
  }
`;
