import { Outlet } from "react-router-dom";
import Header from "./Header";

const MainApp = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainApp;
