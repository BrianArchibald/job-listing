import React from "react";

const JobBoardComponent = ({
    job: {
        company,
        logo,
        featured,
        position,
        role,
        level,
        postedAt,
        contract,
        location,
        languages,
        tools,
    },
    }) => { 
        const tags = [ role, level ];

    if (tools) {
        tags.push(...tools);
    }

    if (languages) {
        tags.push(...languages);
    }
    
    return (
  <div className="flex bg-white shadow-md m-4 p-6 rounded">
    <div>
      <img src={logo} alt={company} />
    </div>
    <div className="flex flex-col justify-between ml-4">
        <h3 className="font-bold text-teal-500">
            {company}
            {featured && <span className="bg-teal-500 text-teal-100 font-bold rounded-full py-1 px-2 m-2">Featured</span>}
        </h3>
        <h2 className="font-bold text-xl">{position}</h2>
        <p className="text-gray-700">
            {postedAt} · {contract} · {location}
        </p>
    </div> 
    <div className="flex items-center ml-auto">
        {tags ? (
            tags.map((tag) => <span className="text-teal-500 bg-teal-100 font-bold m-3 p-2 rounded">{tag}</span>)
        ) : ( '' )}
    </div>
  </div>
)};

export default JobBoardComponent;
