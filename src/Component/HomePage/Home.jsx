import React, { useState } from 'react';
import './Home.css';
import { FaGreaterThan } from 'react-icons/fa';
import { FaLessThan } from 'react-icons/fa';
import image1 from '../images/clothes_sale.jpeg';
import image2 from '../images/makeup_sale.jpg';
import image3 from '../images/laptop_sale.png';
import moreImg1 from '../images/MoreItemsImages/img1.jpg';
import moreImg2 from '../images/MoreItemsImages/img2.jpeg';
import moreImg3 from '../images/MoreItemsImages/img3.jpeg';
import moreImg4 from '../images/MoreItemsImages/img4.jpg';
import imgCont1 from '../images/ImageContent/imgCont1.jpg';
import imgCont21 from '../images/ImageContent/imgCont21.png';
import imgCont22 from '../images/ImageContent/ImgCont22.jpg';
import imgCont23 from '../images/ImageContent/imgCont23.png';
import imgCont31 from '../images/ImageContent/imgCont31.jpg';
import imgCont32 from '../images/ImageContent/imgCont32.png';

function Home() {
    const [imageInd, setImageInd] = useState(0);

    const imageArr = [image1, image2, image3];

    const leftSlide = () => {
        const nextIndex = imageInd - 1;
        if (nextIndex < 0) {
            setImageInd(imageArr.length - 1);
        } else {
            setImageInd(nextIndex);
        }
    }

    const rightSlide = () => {
        setImageInd((imageInd + 1) % imageArr.length);
    }

    return <div>
        <div className='home'>
            <div className='image_slider'>
                <div className='left_btn'><button onClick={leftSlide}><FaLessThan /></button></div>
                <div className='all_images'><img src={imageArr[imageInd]} alt={imageInd} className='images' /></div>
                <div className='right_btn'><button onClick={rightSlide}><FaGreaterThan /></button></div>
            </div>

            <div className='imageContent'>
                <div className='imageContent-block-1'>
                    <img src={imgCont1} alt='imgCont1' />
                </div>
                <div className='imageContent-block-2'>
                    <div className='imageContent-block-2-1'>
                        <img src={imgCont21} alt='imgCont21' />
                    </div>
                    <div className='imageContent-block-2-main'>
                        <div className='imageContent-block-2-2'>
                            <img src={imgCont22} alt='imgCont22' />
                        </div>
                        <div className='imageContent-block-2-3'>
                            <img src={imgCont23} alt='imgCont23' />
                        </div>
                    </div>
                </div>
                <div className='imageContent-block-3'>
                    <div className='imageContent-block-3-1'>
                        <img src={imgCont31} alt='imgCont31' />
                    </div>
                    <div className='imageContent-block-3-2'>
                        <img src={imgCont32} alt='imgCont32' />
                    </div>
                </div>
            </div>

            <div className='moreItems'>
                <h2>More items to explore</h2>
                <ul className='moreItems-images'>
                    <li><img src={moreImg1} alt='moreImg1' /></li>
                    <li><img src={moreImg2} alt='moreImg2' /></li>
                    <li><img src={moreImg3} alt='moreImg3' /></li>
                    <li><img src={moreImg4} alt='moreImg4' /></li>
                </ul>
            </div>
        </div>

    </div>;
}

export default Home;
