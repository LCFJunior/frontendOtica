import React, { useState } from 'react';
import './HeroStyles.css';
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import Modal from 'react-modal';
import Video from '../../assets/background-video4.mp4';

Modal.setAppElement('#root'); // Necessário para acessibilidade

function Hero() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

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
                        <button type="button" onClick={openModal}>
                            <BsFillTelephoneFill className='icon' />
                        </button>
                    </div>
                </form>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Contate-nos Modal"
                className="ReactModal__Content"
                overlayClassName="ReactModal__Overlay"
            >
                <div className="modal-header">
                    <h2>Contate-nos</h2> 
                    <button className="close-button" onClick={closeModal}>
                        <AiOutlineClose />
                    </button>
                    
                </div>
                <div>
                    <form>
                        <label>Nome</label>
                        <input type="text" />
                        <label>Celular</label>
                        <input type="telephone" />
                        <label>Email</label>
                        <input type="email" />
                        <label>Assunto</label>
                        <select>
                            <option value="" disabled selected>Selecione um assunto</option>
                            <option value="suporte">Suporte</option>
                            <option value="vendas">Vendas</option>
                            <option value="geral">Geral</option>
                        </select>
                        <label>Mensagem</label>
                        <textarea></textarea>
                    
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </Modal>
        </div>
    );
}

export default Hero;
