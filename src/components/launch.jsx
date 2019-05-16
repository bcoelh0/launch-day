import React, { Component } from "react";

class Launch extends Component {
  state = {
    launch: this.props.data,
    counter: 0
  };

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

  imageThumbnail = imagePath => {
    let underscoreIndex = imagePath.lastIndexOf("_");
    let dotIndex = imagePath.lastIndexOf(".");
    let strToReplace = imagePath.substring(underscoreIndex, dotIndex);
    return imagePath.replace(strToReplace, "_320");
  };

  getImage = imagePath => {
    if (imagePath.includes("placeholder")) {
      return (
        "https://loremflickr.com/320/320/hubble-telescope?l=" + Math.random()
      );
    } else {
      return this.imageThumbnail(imagePath);
    }
  };

  render() {
    const { launch } = this.state;
    let i = Math.random();
    return (
      <div className="item">
        <div class="row">
          <div class="column">
            <img
              className="image"
              src={this.getImage(launch.rocket.imageURL)}
            />
          </div>
          <div class="column center-middle">
            <h3>{launch.name}</h3>
            <p>{this.launchDate(launch.windowstart, launch.windowend)}</p>
            <small>Location: {launch.location.name}</small>
            <br />
            {launch.location.pads[0].mapURL.length > 0 ? (
              <a href={launch.location.pads[0].mapURL} target="blank">
                <button>Get There</button>
              </a>
            ) : (
              <small>No public access :(</small>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Launch;
