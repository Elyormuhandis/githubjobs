import React from "react";
import "./options.styles.scss";
import svg from "../../assets/images/earth-globe-tool-svgrepo-com.svg";

export const Options = ({ setLocation, location, setIsFulltime, setCity }) => {
  return (
    <div className='options'>
      <div className='options__top'>
        <input
          onChange={(e) => setIsFulltime(e.target.checked)}
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
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className='options__location--items'>
          <input
            type='radio'
            className='options__location--radio'
            id='radio1'
            checked={location === "London"}
            onChange={() => {}}
          />
          <label
            className='options__location--label'
            htmlFor='radio1'
            onClick={() => setLocation(location !== "London" ? "London" : null)}
          >
            London
          </label>
        </div>
        <div className='options__location--items'>
          <input
            type='radio'
            className='options__location--radio'
            id='radio2'
            checked={location === "Amsterdam"}
            onChange={() => {}}
          />
          <label
            className='options__location--label'
            htmlFor='radio2'
            onClick={() =>
              setLocation(location !== "Amsterdam" ? "Amsterdam" : null)
            }
          >
            Amsterdam
          </label>
        </div>
        <div className='options__location--items'>
          <input
            type='radio'
            className='options__location--radio'
            id='radio3'
            checked={location === "New York"}
            onChange={() => {}}
          />
          <label
            className='options__location--label'
            htmlFor='radio3'
            onClick={() =>
              setLocation(location !== "New York" ? "New York" : null)
            }
          >
            New York
          </label>
        </div>
        <div className='options__location--items'>
          <input
            type='radio'
            className='options__location--radio'
            id='radio4'
            checked={location === "Berlin"}
            onChange={() => {}}
          />
          <label
            className='options__location--label'
            htmlFor='radio4'
            onClick={() => setLocation(location !== "Berlin" ? "Berlin" : null)}
          >
            Berlin
          </label>
        </div>
      </div>
    </div>
  );
};
