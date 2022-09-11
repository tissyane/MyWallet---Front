import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Page } from "../styles/Page";
import { Title } from "../styles/Title";
import { Form } from "../styles/Form";
import { loading } from "../styles/Loading";
import { LinkWrapper } from "../styles/LinkWrapper";
import Context from "../components/Context";
import { signUp } from "../services/api.js";

const inputs = [
  {
    name: "name",
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

export default function SignupPage() {
  const { theme } = useContext(Context);
  const [disabled, setDisabled] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleForm({ name, value }) {
    setForm({
      ...form,
      [name]: value,
    });
    console.log(form);
  }

  function sendForm(e) {
    e.preventDefault();

    const promise = signUp(form);
    promise.then((res) => {
      console.log(form);
      navigate("/");
    });

    promise.catch((err) => {
      alert("Houve um erro no seu cadastro. Verifique seus dados!");
      setDisabled(false);
    });
    setDisabled(true);
  }

  return (
    <Page>
      <TitleSingUp theme={theme}>My Wallet</TitleSingUp>
      <Form theme={theme} onSubmit={sendForm}>
        {inputs.map((input, index) => (
          <input
            key={index}
            name={input.name}
            type={input.type}
            placeholder={input.placeholder}
            required
            disabled={disabled}
            onChange={(e) =>
              handleForm({
                name: e.target.name,
                value: e.target.value,
              })
            }
          />
        ))}

        <button type="submit" disabled={disabled}>
          {disabled ? loading : "Cadastrar"}
        </button>
      </Form>

      <LinkWrapper theme={theme}>
        <Link to="/">Já tem uma conta? Entre agora!</Link>
      </LinkWrapper>
    </Page>
  );
}

const TitleSingUp = styled(Title)`
  margin-top: 95px;
`;
