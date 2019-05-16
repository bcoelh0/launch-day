import React, { Component } from "react";
import LaunchImage from "./launch-image";
import LaunchInfo from "./launch-info";
import styled from "styled-components";

const Item = styled.div`
  width: 600px;
  margin: auto;
  align-items: flex-start;
  flex-direction: row;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`;

class Launch extends Component {
  render() {
    const launch = this.props.data;

    return (
      <Item>
        <Row>
          <Column>
            <LaunchImage imagePath={launch.rocket.imageURL} />
          </Column>
          <Column>
            <LaunchInfo launch={launch} />
          </Column>
        </Row>
      </Item>
    );
  }
}

export default Launch;
