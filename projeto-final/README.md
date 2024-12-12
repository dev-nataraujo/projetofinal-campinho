# 🎮️ GameON!

Este projeto foi desenvolvido como conclusão do curso de Web Front-End da Campinho Digital.

Idealizado com o objetivo de criar uma aplicação utilizando o React e consumindo dados de uma API, exibindo informações detalhadas sobre games, de forma funcional, acessível e responsiva.

Neste projeto, a proposta foi a criação de um site para a comunidade gamer, em que permite acesso a informações de jogos de diversas plataformas (PC, PLAYSTATION, XBOX, NINTENDO), assim como a comentários da própria comunidade sobre a expectativa e/ou experiência com cada jogo. 

[![Captura-de-tela-2024-12-12-114258.png](https://i.postimg.cc/GmPh0DNX/Captura-de-tela-2024-12-12-114258.png)](https://postimg.cc/Wd3PgdsZ)

## 💻 Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para a criação da interface de usuário.
- **CSS**: Estilização responsiva e moderna utilizando flexbox e grid.
- **API**: Consumo de dados de uma API externa para exibição de informações sobre jogos.

## ⚙️Funcionalidades

- **Barra de navegação**: Permite o acesso a página home, redirecionamento para seleção de jogos categorizados por gênero ou plataforma, jogos gratuitos, informações sobre a empresa e área de login.

[![imagem-2024-12-12-115047182.png](https://i.postimg.cc/hGpDvBKx/imagem-2024-12-12-115047182.png)](https://postimg.cc/mc1fpKz2)

- **Carrossel no header**: Apresenta informações relevantes do site.

[![imagem-2024-12-12-130032008.png](https://i.postimg.cc/FHJfq1gR/imagem-2024-12-12-130032008.png)](https://postimg.cc/RW4VJSY5)

- **Exibição de dados em modal**: A aplicação mostra dados sobre jogos com título, imagem, descrição, gênero e nota em cards.
 
[![imagem-2024-12-12-115308194.png](https://i.postimg.cc/xjkzwsPg/imagem-2024-12-12-115308194.png)](https://postimg.cc/qgTqnxSC)

- **Detalhes e comentários sobre jogos**: Modal é inicializado apresentando mais informações especifícicas de cada jogo, além da caixa de comentários, já expondo a lista de comentários já existentes.

[![imagem-2024-12-12-115720008.png](https://i.postimg.cc/CMfRPRFQ/imagem-2024-12-12-115720008.png)](https://postimg.cc/HjdWjs8w)

- **Componentização**: Criação de componentes reutilizáveis, otimizando a organização e praticidade da aplicação.

🗃️ A estrutura do projeto é a seguinte:

```
src/
├── assets/
│   ├── background.png
│   ├── header2.png
│   ├── header5.png
│   ├── header6.png
│   ├── logomarca2.png
├── components/
│   ├── card/       
│   │   ├── card.css         
│   │   └── index.jsx 
│   ├── footer/
│   │   ├── footer.css         
│   │   └── index.jsx 
│   ├── header/
│   │   ├── header.css         
│   │   └── index.jsx 
│   ├── modal/
│   │   ├── data/
│   │   │   └── index.jsx
│   │   ├── index.jsx
│   │   └── modal.css 
│   ├── navbar/
│   │   ├── index.jsx         
│   │   └── navbar.css
├── pages/
│   ├── home/
│   │   ├── home.css         
│   │   └── index.jsx
├── service/
│   └── api.jsx             
├── app.css               
└── app.jsx
```

- **Interface Responsiva**: O design é responsivo e se adapta a diferentes tamanhos de tela.

[![Home.png](https://i.postimg.cc/50mQ3G5S/Home.png)](https://postimg.cc/34dwrtck)

- **Feedback de Erro**: Caso não seja possível carregar os dados, uma mensagem de erro é exibida na tela para o usuário.

[![imagem-2024-12-12-120027960.png](https://i.postimg.cc/rs6wX98Y/imagem-2024-12-12-120027960.png)](https://postimg.cc/7GVkS0Jg)

## 📑 Passo a Passo para reproduzir:

1. Através do **Postman**, realize endpoints na **API**:

`Método POST` utilizando as credenciais abaixo para conseguir acesso a API Key.

```
https://ecom-back-strapi.onrender.com/api/auth/local
```

```
{
  "identifier": "campinho@mail.com",
  "password": "Campinho@12"
}
```

`MÉTODO GET` para:
- Autorizar o uso da API com nossa chave;
- Listar todos os produtos: GET /games.


2. **Clone o repositório** para sua máquina local:

    ```
    git clone https://github.com/dev-nataraujo/projetofinal-campinho.git
    ```

2. **Navegue até o diretório do projeto**:

    ```
    cd projetofinal-campinho
    ```

3. **Instale as dependências**:

    ```
    npm install
    ```

4. **Inicie o servidor de desenvolvimento**:

    ```
    npm run dev
    ```

5. **Acesse o projeto no navegador**: [http://localhost:5173/](http://localhost:5173/)

## 📑 Uso de canvas:

- Foi utilizado **Trello**, ferramenta de gerenciamento de projetos que permite organizar e monitorar tarefas, atribuir responsabilidades e visualizar o fluxo de trabalho.

[![Captura-de-tela-2024-12-12-130236.png](https://i.postimg.cc/Pf9T7y6W/Captura-de-tela-2024-12-12-130236.png)](https://postimg.cc/s1YkQYCx)

## 📲 Futuras melhorias:

- Barra de busca;
- Rotas;
- Login;
- Inserir jogos mobile;
- Filtro para ordenar jogos por notas, data de lançamento ou alfabética;
- Melhorar responsividade para celular e tablet.