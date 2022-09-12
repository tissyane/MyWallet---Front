import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { TitlePage } from "../styles/TitlePage";
import { Page } from "../styles/Page";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { RiLogoutBoxRLine } from "react-icons/ri";
import Context from "../components/Context";
import { deleteSession, getTransactions } from "../services/api.js";
import { setWalletUser } from "../services/storage/getWalletUser";

export default function Balance() {
  const { theme, transactions, setTransactions, login } = useContext(Context);
  const navigate = useNavigate();

  function logout() {
    const confirm = window.confirm("Tem certeza que deseja sair?");

    if (confirm) {
      const promise = deleteSession(login.token);
      promise.then((res) => {
        navigate("/");
      });
      promise.catch((err) => {
        console.log(err);
      });
    }
  }

  useEffect(() => {
    const promise = getTransactions(login.token);

    promise.then((res) => {
      setTransactions(res.data);
    });
  }, [setTransactions, login.token]);

  let finalBalance = 0;
  transactions.forEach((transaction) => {
    if (transaction.typeSetting === "income") {
      finalBalance += transaction.value;
    } else {
      finalBalance -= transaction.value;
    }
  });

  return (
    <Page>
      <TitlePage theme={theme}>
        Olá, {login.name}
        <RiLogoutBoxRLine color="#FFFFFF" size="25px" onClick={logout} />
      </TitlePage>

      <AccountBalance theme={theme} registers={transactions.length}>
        <div>
          {transactions.length ? (
            transactions.map((transaction) => (
              <Transactions theme={theme} type={transaction.typeSetting}>
                <div className="left">
                  <span className="date">{transaction.date}</span>
                  <span>{transaction.description}</span>
                </div>

                <span className="valor">
                  {transaction.value.toFixed(2).replace(".", ",")}
                </span>
              </Transactions>
            ))
          ) : (
            <NoTransactions theme={theme}>
              Não há registros de entrada ou saída
            </NoTransactions>
          )}
        </div>
        <FinalBalance theme={theme} isPositive={finalBalance >= 0}>
          <h1>SALDO</h1>
          <span>{finalBalance.toFixed(2).replace(".", ",")}</span>
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

  span {
    color: ${(props) =>
      props.isPositive ? props.theme.green : props.theme.red};
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
