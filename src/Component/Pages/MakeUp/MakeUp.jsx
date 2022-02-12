import React from 'react';
import Page from '../Page/Page';

function MakeUp() {

    const filterTypeOptions = ['Lipstick','EyeLiner','EyeShadows','Mascara','Kajal','Face Powder','Highlighter'];

  return <div>
      <Page filterTypeOptions={filterTypeOptions} type='Category'/>
  </div>;
}

export default MakeUp;
