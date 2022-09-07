function getWalletUser() {
  const data = localStorage.getItem("user");
  return data ? JSON.parse(data) : null;
}

function setWalletUser(data) {
  return localStorage.setItem("user", JSON.stringify(data));
}

export { getWalletUser, setWalletUser };
