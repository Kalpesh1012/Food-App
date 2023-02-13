import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  const isOnlinef = () => {
    return setIsOnline(true);
  };
  const isOfflinef = () => {
    return setIsOnline(false);
  };
  useEffect(() => {
    window.addEventListener("online", isOnlinef);
    window.addEventListener("offline", isOfflinef);

    return () => {
      window.removeEventListener("online", isOnlinef);
      window.removeEventListener("offline", isOfflinef);
    };
  }, []);
  return isOnline;
};
export default useOnline;
