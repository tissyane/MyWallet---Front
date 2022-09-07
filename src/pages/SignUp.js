import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Context from "../components/Context";
import { Button } from "../styles/Button";
import { Input } from "../styles/Input";
import { Title } from "../styles/Title";
import { LinkWrapper } from "../styles/LinkWrapper";
import { MutatingDots } from "react-loader-spinner";
import styled from "styled-components";

const inputs = [
  {
    name: "nome",
    type: "text",
    value: "",
    placeholder: "Nome",
  },
  {
    name: "email",
    type: "email",
    value: "",
    placeholder: "E-mail",
  },
  {
    name: "password",
    type: "password",
    value: "",
    placeholder: "Senha",
  },
  {
    name: "passwordConfirm",
    type: "password",
    value: "",
    placeholder: "Confirme a senha",
  },
];

export default function Signup() {
  const { theme } = useContext(Context);
  const [disabled, setDisabled] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    email: "",
    password: "",
  });

  function handleForm({ name, value }) {
    setForm({
      ...form,
      [name]: value,
    });
  }

  function sendForm() {
    setDisabled(true);
  }

  return (
    <>
      <TitleSingUp theme={theme}>My Wallet</TitleSingUp>
      <Form onSubmit={sendForm}>
        {inputs.map((input, index) => (
          <Input
            theme={theme}
            key={index}
            name={input.name}
            type={input.type}
            placeholder={input.placeholder}
            required
            onChange={(e) =>
              handleForm({
                name: e.target.name,
                value: e.target.value,
              })
            }
          />
        ))}

        <Button theme={theme} type="submit" disabled={disabled}>
          {disabled ? (
            <MutatingDots
              height="100"
              width="100"
              color="#FFFFFF"
              secondaryColor="#8C11BE"
              radius="12.5"
              ariaLabel="mutating-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              disabled={disabled}
            />
          ) : (
            "Cadastrar"
          )}
        </Button>
      </Form>

      <LinkWrapper theme={theme}>
        <Link to="/">Já tem uma conta? Entre agora!</Link>
      </LinkWrapper>
    </>
  );
}

const Form = styled.form``;

const TitleSingUp = styled(Title)`
  margin-top: 95px;
`;
