import React from "react";
import { Search } from "../search/search.component";
import { Options } from "../options/options.component";
import { Jobs } from "../jobs/jobs.component";
import "./main.styles.scss";

export const Main = () => {
  return (
    <div className='main'>
      <Search />
      <div className='main__content'>
        <Options />
        <Jobs />
      </div>
    </div>
  );
};
