import React from 'react'
import './DestinationsStyles.css'

import oculos1 from '../../assets/pexels-donaldtong94-39716.jpg'
import oculos2 from '../../assets/oculos-2.webp'
import oculos3 from '../../assets/oculos-3.webp'
import oculos4 from '../../assets/oculos-4.webp'
import oculos5 from '../../assets/oculos-5.webp'

function Destinations() {
    return (
        <div name='destinations' className='destinations'>
            <div className="container">
                <h1>FEITOS PARA VOCÊ</h1>
                <p>Um visual elegante e moderno</p>
                <div className="img-container">
                    <img className='span-3 image-grid-row-2' src={oculos1} alt="/"/>
                    <img src={oculos2} alt="/"/>
                    <img src={oculos3} alt="/"/>
                    <img src={oculos4} alt="/"/>
                    <img src={oculos5} alt="/"/>
                </div>
            </div>
        </div>
    )
}

export default Destinations
