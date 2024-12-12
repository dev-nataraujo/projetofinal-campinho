import React from 'react';
import './modal.css'
import comentariosMock from './data'

function Modal({ onClose, data }) {
  const [comment, setComment] = React.useState(''); // Estado para armazenar o comentário
  const [comments, setComments] = React.useState([]); // Lista de comentários armazenados
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0); // Controle do índice da imagem exibida

  React.useEffect(() => { // Carrega comentários mockados com base no ID do jogo
    const comentariosExistentes = comentariosMock[data.id] || [];
    setComments(comentariosExistentes);
  }, [data.id]);

  React.useEffect(() => {
    document.body.style.overflow = 'hidden'; // Impede o scroll do body quando o modal está aberto
    return () => {
      document.body.style.overflow = 'auto'; // Restaura o scroll do body quando o modal é fechado
    };
  }, []);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) { // Detecta o clique fora do modal
      onClose();
    }
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]); // Adiciona o comentário à lista
      setComment(''); // Limpa o campo de entrada
    }
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === data.attributes.gallery.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? data.attributes.gallery.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <h3>{data.attributes.title}</h3>

        <div className="carousel">
          <button className="carousel-btn prev-btn" onClick={handlePreviousImage}>
            &#8249;
          </button>
          <img
            className="carousel-image"
            src={data.attributes.gallery[currentImageIndex]}
            alt={`Imagem ${currentImageIndex + 1}`}
          />
          <button className="carousel-btn next-btn" onClick={handleNextImage}>
            &#8250;
          </button>
        </div>

        <p>{data.attributes.description || 'Sem descrição disponível.'}</p>
        <p className="nota"> 📊 Nota: {data.attributes.rating}</p>
        <p>🎰 Gênero: {data.attributes.genre}</p>
        <p>📅 Data de lançamento: {data.attributes.releaseDate}</p>
        <p className="plataforma">🕹️ Plataformas: {data.attributes.platforms}</p>

        <div className="comments-section">
          <p className='titulo-comentario'>Comentários</p>
          <form onSubmit={handleCommentSubmit}>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Escreva seu comentário..."
              className="comment-box"
            ></textarea>
            <button type="submit" className="submit-btn">Enviar</button>
          </form>
          <ul className="comments-list">
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
        </div>

        <button className="close-btn" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;