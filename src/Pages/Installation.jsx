import { Heading1 } from "lucide-react";
import React from "react";

const Installation = () => {
  const installedApp = JSON.parse(localStorage.getItem("installed"));
  console.log(installedApp);

  return (
    <div>
      {installedApp.map((data) => (
        <h1>{data.title}</h1>
      ))}
    </div>
  );
};

export default Installation;
