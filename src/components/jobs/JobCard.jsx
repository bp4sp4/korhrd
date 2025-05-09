// components/jobs/JobCard.js
import React from "react";

export default function JobCard({ job }) {
  return (
    <div className="job-card-home">
      <div className="job-logo-home">
        <img src={job.logo} alt="회사 로고" className="logo-img-home" />{" "}
        <div className="company-info-home">
          <h3>{job.company}</h3>
          <p>{job.location}</p>
        </div>
      </div>
      <div className="job-details-home">
        <div className="job-position-home">{job.position}</div>
        <div className="job-meta-home">
          <span>
            <i className="fas fa-won-sign"></i> {job.salary}
          </span>{" "}
          <span>
            <i className="fas fa-briefcase"></i> {job.experience}
          </span>
        </div>
        <div className="job-tags-home">
          {job.tags.map((tag, index) => (
            <div key={index} className="job-tag-home">
              {tag}
            </div>
          ))}
        </div>
        <div className="job-deadline-home">~ {job.deadline}</div>
      </div>
      <div className={`d-day-home ${job.status}`}>D-{job.daysLeft}</div>
    </div>
  );
}
