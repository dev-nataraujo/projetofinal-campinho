import React from 'react';
import api from '../../service/api';
import './home.css'
import Card from '../../components/card';
import Modal from '../../components/modal';

function Home() {

  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [msgError, setMsgError] = React.useState(null);

  const [isModalOpen, setIsModalOpen] = React.useState(false); // Estado para controlar o modal
  const [selectedItem, setSelectedItem] = React.useState(null); // Estado para armazenar o item selecionado

  function getGames() {
    api.get('/games')
      .then(response => {
        setData(response.data.data);
        setError(false);
        setMsgError(null); // Limpa erros anteriores ao carregar os dados
        console.log(response.data.data);
      })
      .catch(error => {
        setError(true);
        setMsgError('Erro ao fazer requisição. Não foi possível carregar os dados. Tente novamente mais tarde.');
        console.error('Erro ao fazer requisição:', error);
      });
  }

  React.useEffect(() => {
    getGames();
  }, []);

  const openModal = (item) => {
    setSelectedItem(item); // Armazena o item clicado no estado
    setIsModalOpen(true); // Abre o modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Fecha o modal
    setSelectedItem(null); // Limpa o item selecionado
  };

  return (
    <div className='container'>
      <section>
        {error ? ( // Exibe mensagem de erro
          <div className="error-message">
            <p>{msgError}</p>
            <button onClick={getGames} className="error-button">
              Tentar novamente
            </button>
          </div>
        ) : data.length > 0 ? (// Exibe os cards se a lista de jogos não estiver vazia
          <div className="lista-card">
            {data.slice(0, 9).map((item) => (
              <Card key={item.id} data={item} onClick={() => openModal(item)} />
            ))}
          </div>
        ) : ( // Exibe mensagem caso a lista esteja vazia
          <div className="error-message">
            <p>Não existem jogos na lista!</p>
          </div>
        )}

        {isModalOpen && selectedItem && ( /* Se clicar em um card existente com conteúdo, o modal será aberto*/
          <Modal data={selectedItem} onClose={closeModal} /> /*Passo os dados do item selecionado para o card e passo a config para fechar o modal*/
        )}

      </section>
    </div>
  )
}

export default Home;
