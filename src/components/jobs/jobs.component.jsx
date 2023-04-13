import React, { useState } from "react";
import { JobCard } from "../job-card/job-card.component";
import jobs from "../../data/jobs.json";
import "./jobs.styles.scss";
import { Pagination } from "../pagination/pagination.component";

export const Jobs = () => {
  const [tempJobs, setTempJobs] = useState(jobs);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage, setJobsPerPage] = useState(5);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currrentJob = jobs.slice(indexOfFirstJob, indexOfLastJob);

  return (
    <div className='jobs'>
      {currrentJob?.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
      <div className='jobs__pagination'>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          jobsPerPage={jobsPerPage}
          totalPages={Math.ceil(jobs.length / jobsPerPage)}
        />
      </div>
    </div>
  );
};
