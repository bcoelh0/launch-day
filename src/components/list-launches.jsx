import React, { Component } from "react";
import Launch from "./launch";

class ListLaunches extends Component {
  state = {
    data: { ola: "ola" },
    launches: []
  };

  componentDidMount() {
    fetch("https://launchlibrary.net/1.4/launch/next/25")
      .then(response => response.json())
      .then(data => {
        this.setState({ launches: data.launches });
        console.log(this.state.launches);
      });
  }

  render() {
    const launches = this.state.launches.map(launch => (
      <Launch key={launch.id} data={launch} />
    ));
    return <div>{launches}</div>;
  }
}

export default ListLaunches;
