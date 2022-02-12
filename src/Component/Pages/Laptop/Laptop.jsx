import React from 'react';
import Page from '../Page/Page';

function Laptop() {

    const filterTypeOptions = ['Dell','Asus','Hp','Lenovo','Apple','Acer','Toshiba'];

  return <div>
      <Page filterTypeOptions={filterTypeOptions} type='Company'/>
  </div>;
}

export default Laptop;
