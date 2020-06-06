import React from "react";

const JobBoardComponent = ({ job }) => {
    const langAndTools = [];

    if (job.tools) {
        langAndTools.push(...job.tools);
    }

    if (job.languages) {
        langAndTools.push(...job.languages);
    }

    return (
  <div className="flex bg-white shadow-md m-4 p-4">
    <div>
      <img src={job.logo} alt={job.company} />
    </div>
    <div className="flex flex-col justify-between ml-4">
        <h3 className="font-bold text-teal-500">{job.company}</h3>
        <h2 className="font-bold text-xl">{job.position}</h2>
        <p className="text-gray-700">
            {job.postedAt} · {job.contract} · {job.location}
        </p>
    </div> 
    <div>
        {job.languages ? (
            job.languages.map((language) => <span>{language}</span>)
        ) : ( '' )}
        {job.tools ? (
            job.tools.map((tool) => <span>{tool}</span>)
        ) : ( '' )}
    </div>
  </div>
)};

export default JobBoardComponent;
