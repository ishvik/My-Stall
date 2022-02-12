import React from 'react';
import Page from '../Page/Page';

function Clothes() {

    const filterTypeOptions = ['Shirt', 'T-shirts', 'Pants', 'Trousers', 'Suits', 'Lehnga'];

    return (
        <div>
            <Page filterTypeOptions={filterTypeOptions} type='Type'/>
        </div>
    );
}

export default Clothes;
