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
    name: "email",
    type: "email",
    placeholder: "E-mail",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Senha",
  },
];

export default function Login() {
  const { theme } = useContext(Context);
  const [disabled, setDisabled] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

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
      <Title theme={theme}>My Wallet</Title>
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
            "Entrar"
          )}
        </Button>
      </Form>

      <LinkWrapper theme={theme}>
        <Link to="/sign-up">Primeira vez? Cadastre-se!</Link>
      </LinkWrapper>
    </>
  );
}

const Form = styled.form``;
