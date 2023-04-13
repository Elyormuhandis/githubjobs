import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/header/header.component";
import "./layout.styles.scss";
import { Options } from "../../components/options/options.component";

export const Layout = () => {
  return (
    <div className='layout'>
      <div className='layout__container'>
        <h1 className='layout__title'>
          Github <span className='layout__title--unbold'>Jobs</span>
        </h1>
        <div className='layout__box'>
          <header>
            <Header />
          </header>
          <main>
            <Options />
            <div className='jobs'>
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
