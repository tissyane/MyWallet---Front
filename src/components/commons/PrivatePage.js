import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { setWalletUser } from "../../services/storage/getWalletUser";
import Context from "../Context";

export default function PrivatePage({ children }) {
  const { login, setLogin } = useContext(Context);

  const data = localStorage.getItem("user");

  const navigate = useNavigate();

  useEffect(() => {
    if (!data) {
      alert("Por favor, faça login antes de acessar essa página");
      return navigate("/");
    } else if (!login) {
      setLogin(data.token);
      setWalletUser(data);
    }
  }, [data, login, navigate, setLogin]);

  if (!login) {
    return <></>;
  }

  return <>{children}</>;
}
