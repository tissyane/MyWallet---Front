import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Context from "../components/Context";
import { Button } from "../styles/Button";
import { Page } from "../styles/Page";
import { TitlePage } from "../styles/TitlePage";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

export default function Balance() {
  const { theme } = useContext(Context);
  return (
    <Page>
      <TitlePage theme={theme}>Olá, Fulano</TitlePage>
      <AccountBalance theme={theme}>
        Não há registros de entrada ou saída
      </AccountBalance>
      <Footer>
        <Link to="/newIncome">
          <ButtonFooter theme={theme}>
            <AiOutlinePlusCircle color="#FFFFFF" size="25px" />
            Nova <br /> entrada
          </ButtonFooter>
        </Link>
        <Link to="/newExpense">
          <ButtonFooter theme={theme}>
            <AiOutlineMinusCircle color="#FFFFFF" size="25px" />
            Nova <br /> saída
          </ButtonFooter>
        </Link>
      </Footer>
    </Page>
  );
}

const AccountBalance = styled.div`
  height: calc(100vh - 220px);
  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme.gray};
  border-radius: 5px;
  margin-top: 22px;
  padding: 23px 11px 10px 12px;
  text-align: center;
`;

const Footer = styled.footer`
  display: flex;
  position: absolute;
  bottom: 0;
  left: 25px;

  gap: 15px;
`;

const ButtonFooter = styled(Button)`
  min-width: 48%;
  height: 114px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  text-align: justify;
  font-size: 17px;
  line-height: 20px;
`;
