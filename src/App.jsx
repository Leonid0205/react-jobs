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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />,
      <Route path="/jobs" element={<JobsPage />} />,
      <Route path="/jobs/:id" element={<JobPage />} loader={jobLoader}/>,
      <Route path="*" element={<NotFoundPage />} />,
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
