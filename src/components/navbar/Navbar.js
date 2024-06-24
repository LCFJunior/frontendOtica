import React, { useState, useEffect } from 'react';
import { BsPerson } from 'react-icons/bs';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';
import { RiLoginBoxLine } from "react-icons/ri";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';

import './NavbarStyles.css';

function Navbar() {
    const [show, setShow] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [nav, setNav] = useState(false);
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [CPF, setCpf] = useState('');
    const [telephone, setTelephone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState('');

    useEffect(() => {
        const savedToken = localStorage.getItem('token');
        if (savedToken) {
            setIsLoggedIn(true);
            setToken(savedToken);
        }
    }, []);

    const handleNav = () => setNav(!nav);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCloseLoginModal = () => setShowLoginModal(false);
    const handleShowLoginModal = () => setShowLoginModal(true);
    const handleCloseEditModal = () => setShowEditModal(false);
    const handleShowEditModal = () => setShowEditModal(true);

    const handleCadastro = () => {
        const userData = {
            username,
            email,
            CPF,
            telephone,
            password,
        };

        axios.post('http://192.168.15.6:5001/Cadastro', userData, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            console.log('Cadastro realizado com sucesso:', response.data);
        })
        .catch(error => {
            console.error('Erro ao cadastrar:', error);
        });

        handleClose();
    };

    const handleLogin = () => {
        const userData = {
            email: loginEmail,
            password: loginPassword,
        };

        axios.post('http://192.168.15.6:5001/Login', userData, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            console.log('Login realizado com sucesso:', response.data);
            localStorage.setItem('token', response.data.data);
            setIsLoggedIn(true);
            setToken(response.data.data);
            handleCloseLoginModal();
        })
        .catch(error => {
            console.error('Erro ao realizar login:', error);
        });
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        setToken('');
    };

    const handleUpdate = () => {
        const updatedData = {
            username,
            email,
            CPF,
            telephone,
        };

        axios.put('http://192.168.15.6:5001/Alterar', updatedData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
            },
        })
        .then(response => {
            console.log('Dados atualizados com sucesso:', response.data);
            handleCloseEditModal();
        })
        .catch(error => {
            console.error('Erro ao atualizar dados:', error);
        });
    };

    const handleDelete = () => {
        axios.delete('http://192.168.15.6:5001/Excluir', {
            headers: {
                'Authorization': token,
            },
        })
        .then(response => {
            console.log('Conta excluída com sucesso:', response.data);
            handleLogout();
        })
        .catch(error => {
            console.error('Erro ao excluir conta:', error);
        });
    };

    return (
        <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className={nav ? 'logo dark' : 'logo'}>
                <h2>VISION's</h2>
            </div>
            <ul className="nav-menu">
                <Link to='home' smooth={true} duration={500}><li>Home</li></Link>
                <Link to='destinations' smooth={true} duration={500}><li>Destaques</li></Link>
                <Link to='carousel' smooth={true} duration={500}><li>Tendências</li></Link>
                <Link to='search' smooth={true} duration={500}><li>Certificado</li></Link>
                <Link to='views' smooth={true} duration={500}><li>Lojas</li></Link>
                <NavLink className = "nav-menu-NavLink" to="/oculos"><li>Óculos</li></NavLink>
            </ul>
            <div className="nav-icons">
                {isLoggedIn ? (
                    <>
                        <RiLoginBoxLine className='icon' style={{ marginRight: '1rem' }} onClick={handleShowEditModal} />
                        <BsPerson className='icon' onClick={handleLogout} />
                    </>
                ) : (
                    <>
                        <RiLoginBoxLine className='icon' style={{ marginRight: '1rem' }} onClick={handleShow} />
                        <BsPerson className='icon' onClick={handleShowLoginModal} />
                    </>
                )}
            </div>
            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose style={{ color: '#000' }} className='icon' />)}
            </div>
            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav">
                    <Link to='home' smooth={true} duration={500}><li>Home</li></Link>
                    <Link to='destinations' smooth={true} duration={500}><li>Destaques</li></Link>
                    <Link to='carousel' smooth={true} duration={500}><li>Tendências</li></Link>
                    <Link to='search' smooth={true} duration={500}><li>Certificados</li></Link>
                    <Link to='views' smooth={true} duration={500}><li>Lojas</li></Link>
                </ul>
                <div className="mobile-menu-bottom">
                    <div className="menu-icons">
                        <button onClick={handleShowLoginModal}>Login</button>
                        <button onClick={handleShow}>Cadastro</button>
                    </div>
                    <div className="social-icons">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaPinterest className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>
            </div>
            <Modal 
                className='Modal-Cadastro'
                show={show}
                onHide={handleClose}
                dialogClassName="modal-90w"
                centered
            >
                <Modal.Header>
                    <Modal.Title className='ModalTitle'>Cadastrar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label className='FormLabel'>Usuário</Form.Label>
                            <Form.Control className='inputsModal'
                                type="text"
                                placeholder="ex: john123"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='FormLabel'>Email   ‎  ‎  </Form.Label>
                            <Form.Control className='inputsModal'
                                type="email"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCPF">
                            <Form.Label className='FormLabel'>CPF‎ ‎ ‎ ‎  ‎ ‎ </Form.Label>
                            <Form.Control className='inputsModal'
                                type="text"
                                placeholder="123.456.789-01"
                                value={CPF}
                                onChange={(e) => setCpf(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicTelefone">
                        <Form.Label className='FormLabel'>Telefone</Form.Label>
                            <Form.Control className='inputsModal'
                                type="text"
                                placeholder="(48)91234-5678"
                                value={telephone}
                                onChange={(e) => setTelephone(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSenha">
                            <Form.Label className='FormLabel'>Senha ‎</Form.Label>
                            <Form.Control className='inputsModal'
                                type="password"
                                placeholder="******"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicConfirmSenha">
                            <Form.Label className='FormLabel'>Confirmar Senha</Form.Label>
                            <Form.Control className='inputsModal'
                                type="password"
                                placeholder="******"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='buttonmodal1' variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                    <Button className='buttonmodal2' variant="primary" onClick={handleCadastro}>
                        Cadastrar
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal de Login */}
            <Modal className='Modal-Login'
                show={showLoginModal}
                onHide={handleCloseLoginModal}
                dialogClassName="modal-90wLogin"
                centered
            >
                <Modal.Header>
                    <Modal.Title className='ModalTitleLogin'>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmailLogin">
                            <Form.Label className='FormLabel'>Email ‎ </Form.Label>
                            <Form.Control className='inputsModal'
                                type="email"
                                placeholder="name@example.com"
                                value={loginEmail}
                                onChange={(e) => setLoginEmail(e.target.value)}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSenhaLogin">
                            <Form.Label className='FormLabel'>Senha</Form.Label>
                            <Form.Control className='inputsModal'
                                type="password"
                                placeholder="******"
                                value={loginPassword}
                                onChange={(e) => setLoginPassword(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='buttonmodal1login' variant="secondary" onClick={handleCloseLoginModal}>
                        Fechar
                    </Button>
                    <Button className='buttonmodal2login' variant="primary" onClick={handleLogin}>
                        Entrar
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal de Editar Dados */}
            <Modal className='Modal-Edit'
                show={showEditModal}
                onHide={handleCloseEditModal}
                dialogClassName="modal-90wEdit"
                centered
            >
                <Modal.Header>
                    <Modal.Title className='ModalTitleEdit'>Editar Dados</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicUsernameEdit">
                            <Form.Label className='FormLabel'>Usuário</Form.Label>
                            <Form.Control className='inputsModal'
                                type="text"
                                placeholder="ex: john123"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmailEdit">
                            <Form.Label className='FormLabel'>Email   ‎  ‎  </Form.Label>
                            <Form.Control className='inputsModal'
                                type="email"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCPFEdit">
                            <Form.Label className='FormLabel'>CPF‎ ‎ ‎ ‎  ‎ ‎ </Form.Label>
                            <Form.Control className='inputsModal'
                                type="text"
                                placeholder="123.456.789-01"
                                value={CPF}
                                onChange={(e) => setCpf(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicTelefoneEdit">
                            <Form.Label className='FormLabel'>Telefone</Form.Label>
                            <Form.Control className='inputsModal'
                                type="text"
                                placeholder="(48)91234-5678"
                                value={telephone}
                                onChange={(e) => setTelephone(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='buttonmodal2edit' variant="primary" onClick={handleUpdate}>
                        Alterar Dados
                    </Button>
                    <Button className='buttonmodal3edit' variant="danger" onClick={handleDelete}>
                        Excluir Conta
                    </Button>
                    <Button className='buttonmodal1edit' variant="secondary" onClick={handleCloseEditModal}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Navbar;