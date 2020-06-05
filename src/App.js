import React, { useState, useEffect } from "react";
import data from ".assets/data.json";
import JobBoardComponent from "./components/JobBoardComponent";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    //        fetch('API_URL')              // if we are using a real API
    //            .then((res) => res.json())
    //            .then((data) => {
    //                setJobs(data);
    //            });
    setJobs(data);
  }, []);

  return (
    <div className="App">
      <h2 className="text-4xl">Hello Worlds</h2>
      {jobs.length === 0 ? (
        <p>Fetching Jobs...</p>
      ) : (
        jobs.map(job => <JobBoardComponent job={job} key={job.id} />)
      )}
    </div>
  );
}

export default App;

// TODOs
// 1. Design and json
// 2. Job Board Component
// 3. get data from Json
// 4. Pass data to Job Board Comp
// 5. style it
// 6. Filter it
