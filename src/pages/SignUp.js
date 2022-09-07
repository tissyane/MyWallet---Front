import { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../components/Context";
import { Button } from "../styles/Button";
import { Input } from "../styles/Input";
import { Title } from "../styles/Title";
import { LinkWrapper } from "../styles/LinkWrapper";

const inputs = [
  {
    type: "text",
    value: "",
    placeholder: "Nome",
  },
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
  {
    type: "password",
    value: "",
    placeholder: "Confirme a senha",
  },
];

export default function Signup() {
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

      <Button theme={theme}>Cadastre-se</Button>
      <LinkWrapper theme={theme}>
        <Link to="/">Já tem uma conta? Entre agora!</Link>
      </LinkWrapper>
    </>
  );
}
