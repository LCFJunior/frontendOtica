import React from 'react'
import './HeroStyles.css'
import {AiOutlineSearch} from 'react-icons/ai'
import { BsFillTelephoneFill } from "react-icons/bs";

import Video from '../../assets/background-video4.mp4'

function Hero() {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className="overlay"></div>
            <div className="content">
                <h1>MELHOR FORMA DE ENXERGAR O MUNDO</h1>
                <h2>Venha conosco!</h2>
                <form className="form">
                    <div>
                        <h1>Contate-nos</h1>
                    </div>
                    <div>
                        <button><BsFillTelephoneFill className='icon'/></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero
