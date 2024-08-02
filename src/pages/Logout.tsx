import { useEffect } from "react";
import { useLayout } from "layout";

const Logout = () => {
  const { setUser } = useLayout();

  useEffect(() => {
    setUser(null);
    window.location.href = "/login"
  }, []);

  return <>logout</>;
};

export default Logout;
