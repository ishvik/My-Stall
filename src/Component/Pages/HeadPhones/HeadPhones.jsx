import React from 'react';
import Page from '../Page/Page';

function HeadPhones() {

  const filterTypeOptions = ['Handsfree','Neckbands','HeadPhones','EarBuds'];

  return <div>
      <Page filterTypeOptions={filterTypeOptions} type='Category'/>
  </div>;
}

export default HeadPhones;
