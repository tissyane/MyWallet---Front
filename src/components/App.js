import GlobalStyle from "../styles/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Context from "./Context";
import Balance from "../pages/Balance";
import NewIncome from "../pages/NewIncome";
import NewExpense from "../pages/NewExpense";
import LoginPage from "../pages/LogIn";
import SignupPage from "../pages/SignUp";

const theme = {
  violet: "#8C11BE",
  orchid: "#A328D6",
  red: "#C70000",
  green: "#03AC00",
  black: "#000000",
  white: "#FFFFFF",
  gray: "#868686",
  lightgray: "#C6C6C6",
};

export default function App() {
  // const [login, setLogin] = useState(getWalletUser());
  const [login, setLogin] = useState(null);
  const [transactions, setTransactions] = useState([]);

  return (
    <>
      <GlobalStyle theme={theme} />
      <Context.Provider
        value={{
          theme,
          login,
          setLogin,
          transactions,
          setTransactions,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignupPage />} />
            <Route path="/balance" element={<Balance />} />
            <Route path="/newIncome" element={<NewIncome />} />
            <Route path="/newExpense" element={<NewExpense />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}
