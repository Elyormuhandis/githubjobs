import React from "react";
import { Search } from "../../components/search/search.component";
import "./layout.styles.scss";
import { Options } from "../../components/options/options.component";
import { Jobs } from "../../components/jobs/jobs.component";
import { Main } from "../../components/main/main.component";
import { Outlet } from "react-router";

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
