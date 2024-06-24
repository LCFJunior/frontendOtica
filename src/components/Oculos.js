import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Oculos.css';
import oculos1 from '../assets/oculos-test.png';
import oculos2 from '../assets/versace.jpg';
import oculus3 from '../assets/oculospagina2.png';
import oculos4 from '../assets/lauren.webp';
import oculos5 from '../assets/vogue.webp';
import oculos6 from '../assets/armani_oculos.webp';

const EstilosSection = () => {
  const [modalAberto, setModalAberto] = useState(true);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Tempo em milissegundos
  };

  const fecharModal = () => {
    setModalAberto(false);
  };

  return (
    <section className="secao-com-sub-e-titulo">
      <div className="intro">
        <p className="sub-titulo">Variedades de Estilos</p>
        <h2>Estilos Clássicos e Modernos</h2>
      </div>
      <div className="carousel-container">
        <Slider {...settings}>
          <div>
            <h3>Vogue Classic</h3>
            <img className="oculos1" src={oculos5} alt="Imagem 1" />
          </div>
          <div>
            <h3>Versace Rome</h3>
            <img className="oculos2" src={oculos2} alt="Imagem 2" />
          </div>
          <div>
            <h3>Tifanny's Summer</h3>
            <img className="oculos3" src={oculus3} alt="Imagem 3" />
          </div>
          <div>
            <h3>Lauren Oslo</h3>
            <img className="oculos4" src={oculos4} alt="Imagem 4" />
          </div>
          <div>
            <h3>Michael Kors</h3>
            <img className="oculos5" src={oculos1} alt="Imagem 5" />
          </div>
          <div>
            <h3>Armani Ex</h3>
            <img className="oculos6" src={oculos6} alt="Imagem 6" />
          </div>
        </Slider>
      </div>

      {/* Modal de Orçamento */}
      {modalAberto && (
        <div className="modal">
          <div className="modal-content">
            <h2>Receba agora o orçamento para seus óculos vision's</h2>
            <hr></hr>
            <form id="formOrcamento">
              <label htmlFor="nome">Nome completo*</label>
              <input type="text" id="nome" name="nome" required />

              <label htmlFor="email">E-mail *</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="celular">Celular / Whatsapp *</label>
              <input type="text" id="celular" name="celular" required />

              <label htmlFor="descricao">Descrição *</label>
              <textarea id="descricao" name="descricao" rows="4" required placeholder='Por favor, descreva a graduação de sua receita'></textarea>

              <label htmlFor="arquivo">Anexe sua receita (opcional)</label>
              <input type="file" id="arquivo" name="arquivo" />

              <label htmlFor="cep">CEP </label>
              <input type="text" id="cep" name="cep" />

              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default EstilosSection;
