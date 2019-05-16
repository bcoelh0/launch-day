import React, { useState } from "react";
import Launch from "./launch";
import styled from "styled-components";

const Loading = styled.img`
  display: block;
  width: 250px;
  margin: auto;
  margin-top: 70px;
  text-align: center;
`;

const LaunchDivider = styled.hr`
  width: 50%;
  border: 0.5px solid #969696;
`;

const MainTitle = styled.h1`
  text-align: center;
`;

const ListLaunches = () => {
  const [loading, setLoading] = useState(true);
  const [launches, setLaunches] = useState([]);

  fetch("https://launchlibrary.net/1.4/launch/next/25")
    .then(response => response.json())
    .then(data => {
      setLaunches(data.launches);
      setLoading(false);
    });

  return (
    <div>
      <MainTitle>Upcoming Launches</MainTitle>
      {loading ? (
        <Loading src="https://cdn.dribbble.com/users/475723/screenshots/2666648/loading-animation.gif" />
      ) : launches.length == 0 ? (
        <p>No Launches available... :/</p>
      ) : (
        launches.map(launch => (
          <div>
            <Launch key={launch.id} data={launch} />
            <LaunchDivider />
          </div>
        ))
      )}
    </div>
  );
};

export default ListLaunches;
