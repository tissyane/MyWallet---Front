import { useContext, useState } from "react";
import { Page } from "../styles/Page";
import { TitlePage } from "../styles/TitlePage";
import { Form } from "../styles/Form";
import { loading } from "../styles/Loading";
import Context from "../components/Context";

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
  const { theme } = useContext(Context);
  const [disabled, setDisabled] = useState(false);
  const [form, setForm] = useState({ value: "", description: "" });

  function handleForm({ name, value }) {
    setForm({
      ...form,
      [name]: value,
    });
  }

  function sendForm() {
    setDisabled(true);
    console.log(form);
    //TODO:Send to Server
  }

  return (
    <Page>
      <TitlePage theme={theme}>Nova entrada</TitlePage>
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
          {disabled ? loading : "Salvar entrada"}
        </button>
      </Form>
    </Page>
  );
}
