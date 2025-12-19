import React from "react";
import HeroItems from "../Component/HeroItems";
import HomeApps from "../Component/HomeApps";
import Spinner from "./Spinner";
import useApps from "../Hooks/useApps";
import Error404 from "./Error404";
import DetailsApp from "./DetailsApp";

const Home = () => {
  const { loading } = useApps();
  if (loading) {
    return <Spinner></Spinner>;
  } else {
    return (
      <div>
        <HeroItems></HeroItems>
        <HomeApps></HomeApps>
      </div>
    );
  }
};

export default Home;
