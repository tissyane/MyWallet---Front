import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { TitlePage } from "../styles/TitlePage";
import { Page } from "../styles/Page";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { RiLogoutBoxRLine } from "react-icons/ri";
import Context from "../components/Context";
import { deleteSession } from "../services/api.js";

const transactions = [
  {
    date: "05/09",
    value: "15,90",
    description: "Almoço",
    type: "income",
  },
  {
    date: "08/09",
    value: "66,90",
    description: "Passagem",
    type: "expense",
  },
  {
    date: "09/09",
    value: "3.500,00",
    description: "Salário",
    type: "income",
  },
];

export default function Balance() {
  const { theme, token } = useContext(Context);
  const navigate = useNavigate();

  function logout() {
    console.log(token);
    const confirm = window.confirm("Tem certeza que deseja sair?");

    if (confirm) {
      const promise = deleteSession(token);
      promise.then((res) => {
        navigate("/");
      });
      promise.catch((err) => {
        console.log(err);
      });
    }
  }

  return (
    <Page>
      <TitlePage theme={theme}>
        Olá, Fulano {/* TODO:Mudar Fulando pela variável nome */}
        <RiLogoutBoxRLine color="#FFFFFF" size="25px" onClick={logout} />
      </TitlePage>

      <AccountBalance theme={theme} registers={transactions.length}>
        <div>
          {transactions.length ? (
            transactions.map((transaction) => (
              <Transactions theme={theme} type={transaction.type}>
                <div className="left">
                  <span className="date">{transaction.date}</span>
                  <span>{transaction.description}</span>
                </div>

                <span className="valor">{transaction.value}</span>
              </Transactions>
            ))
          ) : (
            <NoTransactions theme={theme}>
              Não há registros de entrada ou saída
            </NoTransactions>
          )}
        </div>
        <FinalBalance>
          <h1>SALDO</h1>
          <span>Valor</span>
        </FinalBalance>
      </AccountBalance>

      <Footer theme={theme}>
        <Link to="/newIncome">
          <div className="button">
            <AiOutlinePlusCircle color="#FFFFFF" size="25px" />
            Nova <br /> entrada
          </div>
        </Link>

        <Link to="/newExpense">
          <div className="button">
            <AiOutlineMinusCircle color="#FFFFFF" size="25px" />
            Nova <br /> saída
          </div>
        </Link>
      </Footer>
    </Page>
  );
}

const AccountBalance = styled.div`
  height: calc(100vh - 220px);
  background-color: ${(props) => props.theme.white};
  border-radius: 5px;
  margin-top: 22px;
  padding: 23px 11px 10px 12px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.registers ? "space-between" : "center")};
  justify-content: ${(props) => (props.registers ? "flex-start" : "center")};
  position: relative;
`;

const Transactions = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  .date {
    color: ${(props) => props.theme.gray};
  }

  .valor {
    color: ${(props) =>
      props.type === "income" ? props.theme.green : props.theme.red};
  }
`;

const NoTransactions = styled.h2`
  font-size: 20px;
  color: ${(props) => props.theme.gray};
  width: 180px;
  text-align: center;
`;

const FinalBalance = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 10px;
  left: 11px;
  right: 12px;
  font-size: 17px;
  line-height: 20px;

  h1 {
    font-weight: 700;
  }
`;

const Footer = styled.footer`
  margin-top: 13px;
  gap: 15px;
  display: flex;
  justify-content: space-between;

  .button {
    height: 114px;
    width: 155px;
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: ${(props) => props.theme.orchid};
    color: ${(props) => props.theme.white};

    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    text-align: justify;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
