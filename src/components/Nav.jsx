import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DataStore from './../stores/DataStore';
import _ from 'lodash';

class Nav extends Component {
  render() {
    let mainNav = DataStore.getMenu('main-nav');
    console.log(mainNav);

    return (
      <header>

      </header>
    );
  }
}

export default Nav;
