import React from "react";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "./../components/JobListings";
import VeiwAllJobs from "../components/VeiwAllJobs";

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <HomeCards></HomeCards>
      <JobListings isHome={true}></JobListings>
      <VeiwAllJobs></VeiwAllJobs>
    </>
  );
};

export default Home;
