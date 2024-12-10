import './card.css'

function Card({data,onClick}) {
    
    return (
        <div className="card" onClick={onClick}>
            <h3>{data.attributes.title}</h3>
            <img
                className="game-capa"
                src={data.attributes.coverArt}
                alt={`Poster do filme`}
              />
            <p>{data.attributes.description || 'Sem descrição disponível.'}</p>
            <p className="nota"> 📊 Nota: {data.attributes.rating}</p>
            <p>🎰 Gênero: {data.attributes.genre}</p>
            <p className="plataforma">🕹️ Plataformas: {data.attributes.platforms}</p>
        </div>
    )
}

export default Card;