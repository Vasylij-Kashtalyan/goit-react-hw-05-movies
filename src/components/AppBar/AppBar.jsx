import Navigation from "../Navigation";
import s from "./AppBar.module.css";
import { Outlet } from "react-router-dom";

function AppBar() {
  return (
    <>
      <header className={s.header}>
        <Navigation />{" "}
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AppBar;
