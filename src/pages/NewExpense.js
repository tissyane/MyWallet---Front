import { Input } from "../styles/Input";
import { Page } from "../styles/Page";
import { TitlePage } from "../styles/TitlePage";
import { useContext, useState } from "react";
import Context from "../components/Context";
import { Button } from "../styles/Button";
import { MutatingDots } from "react-loader-spinner";
import styled from "styled-components";

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

export default function NewExpense() {
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
  }
  return (
    <Page>
      <TitlePage theme={theme}>Nova saída</TitlePage>
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
            "Salvar saída"
          )}
        </Button>
      </Form>
    </Page>
  );
}

const Form = styled.form``;
