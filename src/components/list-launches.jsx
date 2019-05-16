import React, { Component } from "react";
import Launch from "./launch";

class ListLaunches extends Component {
  state = {
    launches: [],
    loading: true
  };

  componentDidMount() {
    fetch("https://launchlibrary.net/1.4/launch/next/25")
      .then(response => response.json())
      .then(data => this.setState({ launches: data.launches, loading: false }));
  }

  render() {
    return (
      <div>
        <h1 className="title">Upcoming Launches</h1>
        {this.state.loading ? (
          <img
            src="https://cdn.dribbble.com/users/475723/screenshots/2666648/loading-animation.gif"
            className="loading"
          />
        ) : this.state.launches.length == 0 ? (
          <p>No Launches available... :/</p>
        ) : (
          this.state.launches.map(launch => (
            <div>
              <Launch key={launch.id} data={launch} />
              <hr className="item-divider" />
            </div>
          ))
        )}
      </div>
    );
  }
}

export default ListLaunches;
