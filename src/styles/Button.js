import styled from "styled-components";

export const Button = styled.button`
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
`;
