import React from "react";
import "./options.styles.scss";
import svg from "../../assets/images/earth-globe-tool-svgrepo-com.svg";

export const Options = () => {
  return (
    <div className='options'>
      <div className='options__top'>
        <input type='checkbox' className='options__checkbox--input' />
        <label className='options__checkbox--label'>Full time</label>
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
        <div className='options__location--items'>
          <input type='radio' className='options__location--radio' />
          <label className='options__location--label'>London</label>
        </div>
        <div className='options__location--items'>
          <input type='radio' className='options__location--radio' />
          <label className='options__location--label'>Amsterdam</label>
        </div>
        <div className='options__location--items'>
          <input type='radio' className='options__location--radio' />
          <label className='options__location--label'>New York</label>
        </div>
        <div className='options__location--items'>
          <input
            type='radio'
            className='options__location--radio'
            id='radio1'
          />
          <label className='options__location--label' htmlFor='raidio1'>
            Berlin
          </label>
        </div>
      </div>
    </div>
  );
};
