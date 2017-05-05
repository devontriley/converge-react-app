import React, { Component } from 'react';
import DataStore from './../stores/DataStore';
import DataActions from './../actions/DataActions';
import PageBanner from './modules/PageBanner';
import FeaturedEntrepreneurs from './modules/FeaturedEntrepreneurs';

class Home extends Component {
  render() {
    //let allData = DataStore.getAll();
    let pageData = DataStore.getPages([4]),
        all = DataStore.getAll(0),
        pageBanner = pageData.acf,
        entrepreneurs = DataStore.getEntrepreneurs(),
        acfData = pageData[0].acf;

    return (
      <div>
        <PageBanner data={acfData.page_banner} />
        <FeaturedEntrepreneurs data={entrepreneurs} />
      </div>
    )
  }
}

export default Home;
