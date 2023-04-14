import React from "react";
import { Outlet } from "react-router";
import "./layout.styles.scss";

export const Layout = () => {
  return (
    <div className='layout'>
      <div className='layout__container'>
        <header>
          <h1 className='layout__title'>
            Github <span className='layout__title--unbold'>Jobs</span>
          </h1>
        </header>
        <main>
          <Outlet />
        </main>
        <footer className='footer'>
          created by username - devChallenges.io
        </footer>
      </div>
    </div>
  );
};
