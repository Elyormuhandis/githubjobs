import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/header/header.component";
import "./layout.styles.scss";

export const Layout = () => {
  return (
    <div className='container'>
      <header>
        <Header />
      </header>
      <main>
        <h3>Main</h3>
        <Outlet />
      </main>
      <aside>Aside</aside>
      <footer>footer</footer>
    </div>
  );
};
