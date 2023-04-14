import React, { useState } from "react";
import { Search } from "../../components/search/search.component";
import { Options } from "../../components/options/options.component";
import { Jobs } from "../../components/jobs/jobs.component";
import "./home.styles.scss";

export const Home = () => {
  const [filter, setFilter] = useState("");
  const [city, setCity] = useState("");
  const [isFulltime, setIsFulltime] = useState(false);
  const [location, setLocation] = useState("");

  return (
    <div className='home'>
      <Search setFilter={setFilter} />
      <div className='home__content'>
        <Options
          setIsFulltime={setIsFulltime}
          setLocation={setLocation}
          setCity={setCity}
          location={location}
        />
        <Jobs
          filter={filter}
          isFulltime={isFulltime}
          location={location}
          city={city}
        />
      </div>
    </div>
  );
};
