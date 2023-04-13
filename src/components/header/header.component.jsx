import React from "react";
import "./header.styles.scss";
export const Header = () => {
  return (
    <div className='header'>
      <div className='header__searchbox'>
        <input
          className='header__searchbox--input'
          placeholder='Title, companies, expertise or benefits'
        />
        <button className='header__searchbox--btn'>Search</button>
      </div>
    </div>
  );
};
