import React from 'react'
import './ImgCarouselStyles.css'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import oculos1 from '../../assets/pexels-asim-razan-343720.jpg'
import oculos2 from '../../assets/pexels-pluyar-1493112.jpg'
import oculos3 from '../../assets/pexels-rohan001-4037163.jpg'

function ImgCarousel() {
    return (
        <div name='carousel' className='container'>
            <h1>Tendências</h1>
            <Carousel className='carousel' showArrows={true} autoPlay={false} infiniteLoop={true} >
                <div>
                    <img src={oculos1} alt='/' />
                    {/* <p className="legend">oculos3 1</p> */}
                </div>
                <div>
                    <img src={oculos2} alt='/' />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={oculos3} alt='/' />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        </div>


    )
}

export default ImgCarousel
