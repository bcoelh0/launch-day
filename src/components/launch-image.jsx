import React, { useMemo } from "react";
import styled from "styled-components";

const LaunchImageContent = styled.img`
  object-fit: cover;
  width: 200px;
  height: 200px;
`;

const imageThumbnail = imagePath => {
  let underscoreIndex = imagePath.lastIndexOf("_");
  let dotIndex = imagePath.lastIndexOf(".");
  let strToReplace = imagePath.substring(underscoreIndex, dotIndex);
  return imagePath.replace(strToReplace, "_320");
};

const getImage = imagePath => {
  if (imagePath.includes("placeholder")) {
    return (
      "https://loremflickr.com/320/320/hubble-telescope?l=" + Math.random()
    );
  } else {
    return imageThumbnail(imagePath);
  }
};

const LaunchImage = props => {
  const src = useMemo(() => getImage(props.imagePath), [props.imagePath]);
  return <LaunchImageContent src={src} />;
};

export default LaunchImage;
