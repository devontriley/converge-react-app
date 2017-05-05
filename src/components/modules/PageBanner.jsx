import React from 'react';
import PropTypes from 'prop-types';

const PageBanner = (props) => {
  let data = props.data;
  const styles = {
    fillViewport: {
      height: '100vh',
      width: '100%',
      backgroundColor: 'red',
      textAlign: 'center',
      color: '#fff',
      display: 'table',
      verticalAlign: 'middle',
      position: 'relative',
      backgroundImage: 'url('+ data.hero_image[0] +')',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed'
    },
    overlay: {
      display: 'table-cell',
      verticalAlign: 'middle',
      position: 'relative',
      zIndex: '1'
    }
  }
  
  return (
    <div style={styles.fillViewport}>
      <div style={styles.overlay}>
        {data.hero_header && <h1>{data.hero_header}</h1>}
        {data.hero_subheader && <h3>{data.hero_subheader}</h3>}
      </div>
    </div>
  )
}

PageBanner.propTypes = {
  data: PropTypes.object.isRequired
}

export default PageBanner;
