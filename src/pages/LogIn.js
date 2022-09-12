import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Page } from "../styles/Page";
import { Title } from "../styles/Title";
import { Form } from "../styles/Form";
import { loading } from "../styles/Loading";
import { LinkWrapper } from "../styles/LinkWrapper";
import Context from "../components/Context";
import { signIn } from "../services/api.js";
import { setWalletUser } from "../services/storage/getWalletUser";

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

export default function LoginPage() {
  const { theme, login, setLogin } = useContext(Context);
  const [disabled, setDisabled] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  function handleForm({ name, value }) {
    setForm({
      ...form,
      [name]: value,
    });
  }

  function sendForm(e) {
    e.preventDefault();

    const promise = signIn(form);
    promise.then((res) => {
      setLogin(res.data);
      navigate("/balance");
    });

    promise.catch((err) => {
      alert("Verifique seus dados!");
      setDisabled(false);
    });

    setDisabled(true);
  }

  // useEffect(() => {
  //   if (login !== null) {
  //     navigate("/balance");
  //   }
  // }, [login, navigate]);

  return (
    <Page>
      <Title theme={theme}>My Wallet</Title>
      <Form theme={theme} onSubmit={sendForm}>
        {inputs.map((input, index) => (
          <input
            key={index}
            name={input.name}
            type={input.type}
            value={form[input.name]}
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
          {disabled ? loading : "Entrar"}
        </button>
      </Form>

      <LinkWrapper theme={theme}>
        <Link to="/sign-up">Primeira vez? Cadastre-se!</Link>
      </LinkWrapper>
    </Page>
  );
}
