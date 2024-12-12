# 🎮️ GameON!

Este projeto foi desenvolvido como conclusão do curso de Web Front-End da Campinho Digital com o objetivo de criar uma aplicação utilizando o React e consumindo dados de uma API, exibindo informações detalhadas sobre games.

Neste projeto, a proposta foi a criação de um site para a comunidade gamer, em que permite acesso a informações de jogos de diversas plataformas (PC, PLAYSTATION, XBOX, NINTENDO), assim como a comentários da própria comunidade sobre a expectativa e/ou experiência com cada jogo. 

# 📑 Passo a Passo para Reproduzir
- Através do Postman, realizei alguns endpoints na API:

`Método POST` foi necessário para utilizar as credenciais abaixo para conseguir a API Key.

```
https://ecom-back-strapi.onrender.com/api/auth/local
```

```
{
  "identifier": "campinho@mail.com",
  "password": "Campinho@12"
}
```

`MÉTODO GET` foi necessário para:
- Autorizar o uso da API com nossa chave.
- Listar todos os produtos: GET /games