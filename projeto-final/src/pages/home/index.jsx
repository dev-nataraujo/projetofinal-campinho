
import React from 'react';
import api from '../../service/api';
import './home.css'
import Card from '../../components/card';
import Modal from '../../components/modal';

function Home() {

  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);

  const [isModalOpen, setIsModalOpen] = React.useState(false); // Estado para controlar o modal
  const [selectedItem, setSelectedItem] = React.useState(null); // Estado para armazenar o item selecionado

  function getGames() {
    api.get('/games')
      .then(response => {
        setData(response.data.data);
        console.log(response.data.data);
      })
      .catch(error => {
        setError('Erro ao fazer requisição');
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
    <div>
      <section>
        <h1>DESCUBRA O QUE ESTÃO COMENTANDO SOBRE OS JOGOS QUE VOCÊ DESEJA MARATONAR!</h1>
        {/* <img src="https://us.123rf.com/450wm/milkos/milkos1904/milkos190402501/121618694-mulher-que-joga-jogos-de-v%C3%ADdeo-%C3%A0-noite-empurrando-nos-bot%C3%B5es-iluminados-com-luzes-de-n%C3%A9on.jpg?ver=6" className='img-topo'></img> */}
        
        <div className='lista-card'>
          {
            data.map(item => (
              <Card key={item.id} data={item} onClick={() => openModal(item)}/>
            ))
          }
        </div>
        
        {isModalOpen && selectedItem && ( /* Se clicar em um card existente com conteúdo, o modal será aberto*/
          <Modal data={selectedItem} onClose={closeModal}/> /*Passo os dados do item selecionado para o card e passo a config para fechar o modal*/
        )}

      </section>
    </div>
  )
}

export default Home;
