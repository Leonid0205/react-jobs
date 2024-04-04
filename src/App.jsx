// const App = () => {
//   const name = "John";
//   const x = 10;
//   const y = 20;
//   const names = ["brad", "mary", "john", "sara"];
//   const loggedIn = false;
//   const styles = {
//     color: "red",
//     fontSize: "36px",
//   };

//   return (
//     <>
//       <div classNameName="text-5xl">App</div>
//       <p style={{ color: "red", fontSize: "24px" }}>Hello {name}</p>
//       <p style={styles}>Hello {name}</p>
//       <p>
//         The sum of {x} and {y} is {x + y}
//       </p>
//       <ul>
//         {names.map((name, index) => (
//           <li key={index}>{name}</li>
//         ))}
//       </ul>
//       {loggedIn ? <h1>Hello member</h1> : <h1>Hello guest</h1>}
//       {loggedIn ? <h1>Hello member</h1> : ""}
//       {loggedIn && <h1>Hello member</h1>}
//     </>
//   );
// };
// export default App;

import {
  Router,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import React from "react";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { jobLoader } from "./pages/JobPage.jsx";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage.jsx";

const addJob = async (newJob) => {
  const res = await fetch("/api/jobs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newJob),
  });
  return;
};

//Delete job
const deleteJob = async (id) => {
  const res = await fetch(`/api/jobs/${id}`, {
    method: "DELETE",
  });
  return;
};

//Update job
const updateJob = async (job) => {
  const res = await fetch(`/api/jobs/${job.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(job),
  });
  return;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />,
      <Route path="/jobs" element={<JobsPage />} />,
      <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />,
      <Route
        path="/edit-job/:id"
        element={<EditJobPage updateJobSubmit={updateJob} />}
        loader={jobLoader}
      />
      ,
      <Route
        path="/jobs/:id"
        element={<JobPage deleteJob={deleteJob} />}
        loader={jobLoader}
      />
      <Route path="*" element={<NotFoundPage />} />,
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
