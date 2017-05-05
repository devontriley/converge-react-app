import React, { Component } from 'react';
import alt from './../alt/alt';
import AltContainer from 'alt-container';
import DataStore from './../stores/DataStore';
import DataActions from './../actions/DataActions';
import Locations from './Locations';

class LocationsContainer extends Component {
  componentDidMount() {
    DataActions.getPages();
  }

  render() {
    return (
      <AltContainer store={DataStore}>
        <Locations />
      </AltContainer>
    )
  }
}

export default LocationsContainer;
