import React, { Component } from 'react';
import DataStore from './../stores/DataStore';
import DataActions from './../actions/DataActions';

const Locations = (props) => {
  if(props.error) {
    return (
      <div>There is a disturbance in the force</div>
    )
  }

  if(!props.pages.length) {
    return (
      <div>
        LOADING
      </div>
    )
  }

  return (
    <ul>
      {props.pages.map((page, i) => {
        return (
          <li key={page.id}>{page.title.rendered}</li>
        )
      })}
    </ul>
  )
}

export default Locations;
