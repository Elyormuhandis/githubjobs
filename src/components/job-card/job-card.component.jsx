import React from "react";
import "./job-card.styles.scss";
import globus from "../../assets/images/earth-globe-tool-svgrepo-com.svg";
import accesstime from "../../assets/images/access-time.svg";
import { Link } from "react-router-dom";

export const JobCard = ({ job, to }) => {
  return (
    <Link className='jobcard' to={"/" + to}>
      <div className='jobcard__img'>
        <img src={job.logo} width={"90px"} alt='jobimg' />
      </div>
      <div className='jobcard__content'>
        <div className='jobcard__content--title'>{job.company}</div>
        <div className='jobcard__content--description'>{job.vacancy}</div>
        <div className='jobcard__content--bottom'>
          {job?.parttime ? (
            <button className='jobcard__content--btn'>{job.parttime}</button>
          ) : (
            <div></div>
          )}
          <div>
            <div>
              <img width={"15px"} src={globus} alt='earth' />
              <div className='jobcard__content--country'>{job.location}</div>
            </div>
            <div>
              <img
                width={"15px"}
                src={accesstime}
                alt='earth'
                className='jobcard__content--timeicon'
              />
              <div className='jobcard__content--accesstime'>
                {Math.ceil(
                  (new Date() - new Date(job.created_at)) / (1000 * 3600 * 24)
                )}{" "}
                days ago
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
