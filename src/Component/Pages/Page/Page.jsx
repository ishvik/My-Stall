import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { yellow } from '@mui/material/colors';
import './Page.css'
import Product from '../Product/Product';

function Page(props) {

    const filterTypeOptions = props.filterTypeOptions;
    const filterPriceOptions = ['Under ₹500', '₹500 - ₹750', '₹750 - ₹1,000', '₹1,000 - ₹1,500', 'Over ₹1,500'];
    const filterDiscountOptions = ['10% Off or more', '25% Off or more', '35% Off or more', '50% Off or more', '60% Off or more', '70% Off or more']
    const FilterCheckbox = (props) => {
        return <div className='filter-type-options'><Checkbox sx={{
            color: yellow[800],
            '&.Mui-checked': {
                color: yellow[600],
            },
        }} /><h4>{props.type}</h4></div>
    }

  return <div>
      <div className='page-outer'>
        <div className='filters'>
            <div className='filter-type'>
                <h2>{props.type}</h2>
                {filterTypeOptions.map((type, index) => {
                    return <FilterCheckbox type={type} key={index} />;
                })}
            </div>
            <div className='filter-price'>
                <h2>Price</h2>
                {filterPriceOptions.map((price, index) => {
                    return <FilterCheckbox type={price} key={index} />;
                })}
            </div>
            <div className='filter-discount'>
                <h2>Discount</h2>
                {filterDiscountOptions.map((discount, index) => {
                    return <FilterCheckbox type={discount} key={index} />;
                })}
            </div>
        </div>
        <div className='content'>
            {filterDiscountOptions.map((discount, index) => {
                return <div className='product-single' key={index}><Product /></div>;
            })}
        </div>
    </div>
  </div>;
}

export default Page;
