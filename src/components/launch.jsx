import React, { Component } from "react";
import LaunchImage from "./launch-image";

class Launch extends Component {
  formatDate = date => {
    return date.substring(0, date.length - 7);
  };

  getTime = date => {
    return date.split(" ")[3].substring(0, 5);
  };

  launchDate = (start, end) => {
    if (start === end) {
      return this.formatDate(start);
    } else {
      return this.formatDate(start) + " - " + this.getTime(end);
    }
  };

  render() {
    const launch = this.props.data;

    return (
      <div className="item">
        <div className="row">
          <div className="column">
            <LaunchImage imagePath={launch.rocket.imageURL} />
          </div>
          <div className="column center-middle">
            <div className="launch-info">
              <h3 className="launch-name">{launch.name}</h3>
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
              <p>{this.launchDate(launch.windowstart, launch.windowend)}</p>
              <small>Location: {launch.location.name}</small>
              <br />
              <br />
              {launch.location.pads[0].mapURL.length > 0 ? (
                <a href={launch.location.pads[0].mapURL} target="blank">
                  <button className="btn">Get There</button>
                </a>
              ) : (
                <small>No public access :(</small>
              )}
              &nbsp;&nbsp;
              {launch.rocket.wikiURL.length > 0 ? (
                <a href={launch.rocket.wikiURL} target="blank">
                  <button className="btn-secondary">Rocket Info</button>
                </a>
              ) : (
                <small>No rocket info :(</small>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Launch;
