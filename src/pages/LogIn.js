import { useContext } from "react";
import styled from "styled-components";
import Context from "../components/Context";
import { Button } from "../styles/Button";
import { Input } from "../styles/Input";

const inputs = [
  {
    type: "email",
    value: "",
    placeholder: "E-mail",
  },
  {
    type: "password",
    value: "",
    placeholder: "Senha",
  },
];

export default function Login() {
  const { theme } = useContext(Context);

  return (
    <>
      <Title theme={theme}>My Wallet</Title>

      {inputs.map((input, index) => (
        <Input
          theme={theme}
          key={index}
          type={input.type}
          value={input.value}
          placeholder={input.placeholder}
        />
      ))}

      <Button theme={theme}>Entrar</Button>
      <Link theme={theme} to="/sign-up">
        Primeira vez? Cadastre-se!
      </Link>
    </>
  );
}

const Title = styled.h1`
  font-family: "Saira Stencil One", cursive;
  font-size: 32px;
  line-height: 50px;
  color: ${(props) => props.theme.white};
  margin: 159px 0 28px;
  text-align: center;
`;

const Link = styled.div`
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  margin-top: 36px;
  color: ${(props) => props.theme.white};
  text-align: center;
`;
