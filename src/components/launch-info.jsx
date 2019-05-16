import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${props =>
    props.color === "blue" ? "#24aae3" : "#2daa0e"};
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  padding: 10px 25px;
  text-decoration: none;
  font-weight: 600;
`;

const LaunchInfoContent = styled.div`
  margin-top: auto;
  margin-bottom: auto;
`;

const LaunchTitle = styled.h3`
  margin-bottom: 0px;
`;

const formatDate = date => {
  return date.substring(0, date.length - 7);
};

const getTime = date => {
  return date.split(" ")[3].substring(0, 5);
};

const launchDate = (start, end) => {
  if (start === end) {
    return formatDate(start);
  } else {
    return formatDate(start) + " - " + getTime(end);
  }
};

const LaunchInfo = props => {
  const { launch } = props;

  return (
    <LaunchInfoContent>
      <LaunchTitle>{launch.name}</LaunchTitle>
      <small>
        {launch.rocket.agencies !== null &&
        launch.rocket.agencies[0] !== undefined ? (
          <a href={launch.rocket.agencies[0].wikiURL} target="blank">
            {launch.rocket.agencies[0].name}
          </a>
        ) : (
          ""
        )}
      </small>
      <p>{launchDate(launch.windowstart, launch.windowend)}</p>
      <small>Location: {launch.location.name}</small>
      <br />
      <br />
      {launch.location.pads[0].mapURL.length > 0 ? (
        <a href={launch.location.pads[0].mapURL} target="blank">
          <Button color="blue">Get There</Button>
        </a>
      ) : (
        <small>No public access :(</small>
      )}
      &nbsp;&nbsp;
      {launch.rocket.wikiURL.length > 0 ? (
        <a href={launch.rocket.wikiURL} target="blank">
          <Button color="green">Rocket Info</Button>
        </a>
      ) : (
        <small>No rocket info :(</small>
      )}
    </LaunchInfoContent>
  );
};

export default LaunchInfo;
