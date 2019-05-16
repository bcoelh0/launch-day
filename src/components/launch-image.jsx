import React, { Component } from "react";

class LaunchImage extends Component {
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
    return <img className="image" src={this.getImage(this.props.imagePath)} />;
  }
}

export default LaunchImage;
