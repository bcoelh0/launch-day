import React, { Component } from "react";

class Launch extends Component {
  state = {
    launch: this.props.data
  };

  formatDate = date => {
    return date.substring(0, date.length - 7);
  };

  imageThumbnail = imagePath => {
    let underscoreIndex = imagePath.lastIndexOf("_");
    let dotIndex = imagePath.lastIndexOf(".");
    let strToReplace = imagePath.substring(underscoreIndex, dotIndex);

    return imagePath.replace(strToReplace, "_320");
  };

  render() {
    const { launch } = this.state;
    return (
      <div>
        <img src={this.imageThumbnail(launch.rocket.imageURL)} />
        {this.formatDate(launch.windowstart)} -{" "}
        {this.formatDate(launch.windowend)}
        <br />
        {launch.name}
        <br />
        <p>Location: {launch.location.name}</p>
        <br />
        <br />
      </div>
    );
  }
}

export default Launch;
