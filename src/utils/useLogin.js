import { useEffect, useState } from "react";

const useLogin = () => {
  const [islogin, setIsLogIn] = useState(true);
  const getLogin = () => {
    return setIsLogIn(true);
  };
  const getLogout = () => {
    return setIsLogIn(false);
  };
  useEffect(() => {
    window.addEventListener("click", getLogin);
    window.addEventListener("click", getLogout);

    return () => {
      window.removeEventListener("click", getLogin);
      window.removeEventListener("click", getLogout);
    };
  }, []);

  return islogin;
};
export default useLogin;
