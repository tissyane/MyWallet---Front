import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "../styles/Page";
import { TitlePage } from "../styles/TitlePage";
import { Form } from "../styles/Form";
import { loading } from "../styles/Loading";
import Context from "../components/Context";

import { createExpense } from "../services/api.js";

const inputs = [
  {
    name: "value",
    type: "number",
    placeholder: "Valor",
  },
  {
    name: "description",
    type: "text",
    placeholder: "Descrição",
  },
];

export default function NewIncome() {
  const { theme, login } = useContext(Context);
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const [form, setForm] = useState({ value: "", description: "" });

  function handleForm({ name, value }) {
    setForm({
      ...form,
      [name]: value,
    });
  }

  function sendForm(e) {
    e.preventDefault();

    const promise = createExpense(form, login.token);
    promise.then((res) => {
      navigate("/balance");
    });

    promise.catch((err) => {
      alert("Não foi possível cadastrar essa saída!");
      console.log(err.message);
      setDisabled(false);
    });

    setDisabled(true);
  }

  return (
    <Page>
      <TitlePage theme={theme}>Nova saída</TitlePage>
      <Form theme={theme} onSubmit={sendForm}>
        {inputs.map((input, index) => (
          <input
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

        <button type="submit" disabled={disabled}>
          {disabled ? loading : "Salvar saída"}
        </button>
      </Form>
    </Page>
  );
}
