import React from 'react';
import { row, col } from '../styles/grid';
import { responsiveWidth } from '../styles/containers';
import Ratings from '../components/Ratings';

class GamesItem extends React.Component {
  render() {
    console.log(this.props);

    return (
      <div class = "container" style = {{row, paddingBottom: 10, padding: 20}}>
        <div style = {col(4)}>
          <img src={this.props.image} style = {responsiveWidth} />
        </div>
        <div style = {col(10)} style = {{ backgroundColor: "#e4e4e4", padding: 5 }}>
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
          <p>
            <a href ={this.props.link}>Read more...</a>
          </p>
          <div>
            <Ratings />
          </div>
        </div>
      </div>
    );
  }
}

export default GamesItem;
