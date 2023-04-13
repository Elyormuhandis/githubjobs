import React, { useState } from "react";
import "./options.styles.scss";
import svg from "../../assets/images/earth-globe-tool-svgrepo-com.svg";

export const Options = () => {
  const [location, setLocation] = useState(null);

  return (
    <div className='options'>
      <div className='options__top'>
        <input
          type='checkbox'
          className='options__checkbox--input'
          id='fulltime'
        />
        <label className='options__checkbox--label' htmlFor='fulltime'>
          Full time
        </label>
      </div>
      <div className='options__location'>
        <div className='options__location--text'>LOCATION</div>
        <div className='options__location--search'>
          <img className='options__location--icon' src={svg} alt='earth' />
          <input
            className='options__location--input'
            placeholder='City, state, zip code or country'
          />
        </div>
        <div options__location--cities></div>
        <div
          className='options__location--items'
          onClick={() => setLocation("London")}
        >
          <input
            type='radio'
            className='options__location--radio'
            id='radio1'
            checked={location === "London"}
          />
          <label className='options__location--label' htmlFor='radio1'>
            London
          </label>
        </div>
        <div
          className='options__location--items'
          onClick={() => setLocation("Amsterdam")}
        >
          <input
            type='radio'
            className='options__location--radio'
            id='radio2'
            checked={location === "Amsterdam"}
          />
          <label className='options__location--label' htmlFor='radio2'>
            Amsterdam
          </label>
        </div>
        <div
          className='options__location--items'
          onClick={() => setLocation("New York")}
        >
          <input
            type='radio'
            className='options__location--radio'
            id='radio3'
            checked={location === "New York"}
          />
          <label className='options__location--label' htmlFor='radio3'>
            New York
          </label>
        </div>
        <div
          className='options__location--items'
          onClick={() => setLocation("Berlin")}
        >
          <input
            type='radio'
            className='options__location--radio'
            id='radio4'
            checked={location === "Berlin"}
          />
          <label className='options__location--label' htmlFor='radio4'>
            Berlin
          </label>
        </div>
      </div>
    </div>
  );
};
