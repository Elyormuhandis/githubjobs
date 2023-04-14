import React, { useEffect, useState } from "react";
import { JobCard } from "../job-card/job-card.component";
import jobs from "../../data/jobs.json";
import "./jobs.styles.scss";
import { Pagination } from "../pagination/pagination.component";

export const Jobs = ({ filter, isFulltime, location, city }) => {
  const [filteredJobs, setfilteredJobs] = useState(jobs);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage, setJobsPerPage] = useState(5);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currrentJob = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  useEffect(() => {
    setfilteredJobs(
      jobs.filter(
        (job) =>
          (job.company?.toLowerCase().includes(filter?.toLowerCase()) ||
            job.company?.toLowerCase().includes(filter?.toLowerCase())) &&
          job.location?.toLowerCase().includes(city?.toLowerCase())
      )
    );
    if (isFulltime)
      setfilteredJobs(jobs.filter((job) => (job.parttime ? true : false)));
    if (location)
      setfilteredJobs(
        jobs.filter(
          (job) =>
            job.location.toLowerCase().includes(location?.toLowerCase()) &&
            location
        )
      );
  }, [filter, isFulltime, location, city]);

  return (
    <div className='jobs'>
      {currrentJob?.map((job) => (
        <JobCard key={job.id} job={job} to={job.id} />
      ))}
      <div className='jobs__pagination'>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          jobsPerPage={jobsPerPage}
          totalPages={Math.ceil(filteredJobs.length / jobsPerPage)}
        />
      </div>
    </div>
  );
};
