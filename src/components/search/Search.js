import React from 'react'
import './SearchStyles.css'

import Gold from '../../assets/gold.png'

function Search() {
    return (
        <div name='book' className='search'>
            <div className="container">
                <div className="left">
                    <h2>SUA LOJA FAVORITA POR TODO O BRASIL!</h2>
                    <p>Venha conhecer e ter a experiência de criar seu próprio óculos</p>
                    <div className="search-col-2">
                        <div className="box">
                            <div>
                                <img src={Gold} alt="/" style={{ marginRight: '1rem', width: '60px', height: '60px'}} />
                            </div>
                            <div>
                                <h3>Excelência Superior</h3>
                                <p>Lentes e Armações de Alto Padrão</p>
                            </div>
                        </div>
                        <div className="box">
                            <div>
                                <h3>Inovação Tecnológica</h3>
                                <p>Tecnologia de Vanguarda: Desfrute das Lentes e Armações Mais Modernas e Avançadas do Mercado</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="promo">
                        <h4 className="save">GANHE ATÉ 7% DE DESCONTO</h4>
                        <p className="timer">12 HORAS FALTANDO!</p>
                        <p className="offers">VER TODAS OFERTAS</p>
                    </div>
                    <form>
                        <h2>Previsão de entrega</h2>
                        <div className="input-wrap">
                            <label>Estado</label>
                            <select>
                                <option value="AC">Acre</option>
                                <option value="AL">Alagoas</option>
                                <option value="AM">Amazonas</option>
                                <option value="AP">Amapá</option>
                                <option value="BA">Bahia</option>
                                <option value="CE">Ceará</option>
                                <option value="DF">Distrito Federal</option>
                                <option value="ES">Espírito Santo</option>
                                <option value="GO">Goiás</option>
                                <option value="MA">Maranhão</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="MS">Mato Grosso do Sul</option>
                                <option value="MT">Mato Grosso</option>
                                <option value="PA">Pará</option>
                                <option value="PB">Paraíba</option>
                                <option value="PE">Pernambuco</option>
                                <option value="PI">Piauí</option>
                                <option value="PR">Paraná</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="RN">Rio Grande do Norte</option>
                                <option value="RO">Rondônia</option>
                                <option value="RR">Roraima</option>
                                <option value="RS">Rio Grande do Sul</option>
                                <option value="SC">Santa Catarina</option>
                                <option value="SE">Sergipe</option>
                                <option value="SP">São Paulo</option>
                                <option value="TO">Tocantins</option>
                            </select>
                        </div>
                        <div className="date">
                            <div className="input-wrap">
                                <label>Data da Compra</label>
                                <input type="date" />
                            </div>
                            <div className="input-wrap">
                                <label>Data de Entrega</label>
                                <input type="date" />
                            </div>
                        </div>
                        <button>Verificar </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search
