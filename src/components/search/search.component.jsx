import React from "react";
import "./search.styles.scss";
export const Search = ({ setFilter }) => {
  return (
    <div className='search'>
      <div className='search__searchbox'>
        <span className='search__searchbox--icon'>
          <svg
            fill=' #B9BDCF'
            xmlns='http://www.w3.org/2000/svg'
            width='18'
            height='18'
            viewBox='0 0 24 24'
            id='work-outline'
          >
            <path fill='none' d='M0 0h24v24H0V0z'></path>
            <path d='M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z'></path>
          </svg>
        </span>
        <input
          onChange={(e) => setFilter(e.target.value)}
          className='search__searchbox--input'
          placeholder='Title, companies, expertise or benefits'
        />
        <button className='search__searchbox--btn'>Search</button>
      </div>
    </div>
  );
};
