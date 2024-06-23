import React from 'react'
import './SelectsStyles.css'

import SantaCatarina from '../../assets/loja-1.webp'
import SaoPaulo from '../../assets/loja-2.jpg'
import Parana from '../../assets/loja-3.webp'
import Brasilia from '../../assets/loja-4.webp'
import Acre from '../../assets/loja-5.png'
import Alagoas from '../../assets/loja-6.avif'

import SelectsImg from '../SelectsImg/SelectsImg'


function Selects() {
    return (
        <div name='views' className='selects'>
            <h1>Conheça Nossas Lojas</h1>
            <div className='container'>
                <div className='container-img'>
                    <SelectsImg bgImg={SantaCatarina} text='Santa Catarina' />
                </div>
                <div className='container-img'>
                    <SelectsImg bgImg={SaoPaulo} text='São Paulo' />
                </div>
                <div className='container-img'>
                    <SelectsImg bgImg={Parana} text='Parana' />
                </div>
                <div className='container-img'>
                    <SelectsImg bgImg={Brasilia} text='Brasilia' />
                </div>
                <div className='container-img'>
                    <SelectsImg bgImg={Acre} text='Acre' />
                </div>
                <div className='container-img'>
                    <SelectsImg bgImg={Alagoas} text='Alagoas' />
                </div>
            </div>

        </div>
    )
}

export default Selects
