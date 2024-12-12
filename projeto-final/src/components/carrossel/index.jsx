import React, { useState, useEffect } from 'react';
import '../carrossel/carrossel.css';
import header6 from '/src/assets/header6.png';
import header2 from '/src/assets/header2.png';
import header5 from '/src/assets/header5.png';

function Carrossel() {

  const [currentImageIndex, setCurrentImageIndex] = React.useState(0); // Estado para o índice da imagem atual

  // Imagens do carrossel e seus respectivos links
  const carrouselImages = [
    {
      url: header6,
      // link: , Link para a página desejada
      // text: ,
    },
    {
      url: header5,
      // link: ,
      // text: ,
    },
    {
      url: header2,
      // link: ,
      // text: ,
    },
  ]; // Colocar todos os dados do carrosel (imagens, links e textos)

  // Função para avançar para a próxima imagem
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carrouselImages.length);
  };

  // Função para voltar para a imagem anterior
  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + carrouselImages.length) % carrouselImages.length
    );
  };

  // Altere a imagem a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(nextImage, 7000); // Troca a imagem a cada 7 segundos
    return () => clearInterval(interval); // Limpa o intervalo quando o componente for desmontado
  }, [currentImageIndex]); // << adicionar o currentImageIndex como dependencia do array no useEffect para evitar o bug de passar de imagem após os 7 segundos mesmo já tendo trocado de slide no meio do tempo.

  return (
    <div className="header">
      {/* Imagem de fundo com texto sobreposto */}
      <a href={carrouselImages[currentImageIndex].link}>
        <div
          className="header-background"
          style={{
            backgroundImage: `url(${carrouselImages[currentImageIndex].url})`,
          }} // Define a imagem de fundo dinamicamente
        >
          {/* <div className="header-content">*/}
          {/* Texto sobre a imagem */}
          {/*<h2>{carrouselImages[currentImageIndex].text}</h2> */}
          <p></p> {/* Se eu quiser escrever algo sobre o carrossel */}
          {/*</div>*/}
        </div>
      </a>

      {/* Botões de navegação */}
      <button onClick={prevImage} className="prev-button">←</button>
      <button onClick={nextImage} className="next-button">→</button>
    </div>
  );
};

export default Carrossel;