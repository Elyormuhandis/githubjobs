import React from "react";
import { Header } from "../../components/header/header.component";
import "./layout.styles.scss";
import { Options } from "../../components/options/options.component";
import { Jobs } from "../../components/jobs/jobs.component";

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
            <Jobs />
          </main>
          <footer className='footer'>
            created by username - devChallenges.io
          </footer>
        </div>
      </div>
    </div>
  );
};
