/* eslint-disable no-unused-vars */

import React from 'react';
import Form from './components/Form/Form';
import Details from './components/DetailsBoard/Details';
import genStyles from './components/GenStyles'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

  return (
    <div className={genStyles.pageCont}>
      <Form />
      <Details />
    </div>
  )
}

export default App
