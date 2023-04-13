import React from "react";
import "./job-card.styles.scss";
import kasisto from "../../assets/images/kasisto.png";
import globus from "../../assets/images/earth-globe-tool-svgrepo-com.svg";
import accesstime from "../../assets/images/access-time.svg";
export const JobCard = () => {
  return (
    <div className='jobcard'>
      <div className='jobcard__img'>
        <img src={kasisto} width={"90px"} alt='jobimg' />
      </div>
      <div className='jobcard__content'>
        <div className='jobcard__content--title'>Kasisto</div>
        <div className='jobcard__content--description'>
          Front-End Software Engineer
        </div>
        <div className='jobcard__content--bottom'>
          <button className='jobcard__content--btn'>Full time</button>
          <div>
            <div>
              <img width={"15px"} src={globus} alt='earth' />
              <div className='jobcard__content--country'>New york</div>
            </div>
            <div>
              <img
                width={"15px"}
                src={accesstime}
                alt='earth'
                className='jobcard__content--timeicon'
              />
              <div className='jobcard__content--accesstime'>5 days ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
