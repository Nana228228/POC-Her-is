<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>README - Node.js Project</title>
</head>
<body>
  <h1>Node.js Project - Hero and Anime Cards</h1>
  <p>
    Este projeto é uma aplicação desenvolvida em Node.js e React que utiliza estilos modularizados e componentes reutilizáveis para exibir informações sobre heróis e animes. Aqui está uma explicação detalhada dos arquivos e componentes usados.
  </p>

  <h2>1. Estrutura do Projeto</h2>
  <p>
    O projeto está organizado em pastas para separar a lógica, os estilos e os componentes. Abaixo estão as principais pastas e arquivos:
  </p>
  <ul>
    <li><strong>app/</strong>: Contém os componentes principais da aplicação.</li>
    <li><strong>components/</strong>: Componentes reutilizáveis, como <code>HeroCard</code> e <code>AnimeCard</code>.</li>
    <li><strong>styles/</strong>: Estilos CSS modularizados para componentes específicos.</li>
    <li><strong>globals.css</strong>: Estilos globais aplicados a toda a aplicação.</li>
    <li><strong>layout.js</strong>: Define o layout raiz da aplicação e fontes customizadas.</li>
    <li><strong>page.js</strong>: Lógica principal da página inicial.</li>
  </ul>

  <h2>2. Componentes e Lógica</h2>

  <h3>2.1 HeroCard.js</h3>
  <p>
    Este componente exibe informações de heróis, incluindo nome, estatísticas (inteligência e força) e uma imagem.
  </p>
  <pre>
    <code>
    import React from 'react';

    const HeroCard = ({ hero }) => {
      const { name, powerstats, image } = hero;

      return (
        <article style={styles.card}>
          <img src={image.url} alt={name} style={styles.image} />
          <h1 style={styles.title}>{name}</h1>
          <p>
            Intelligence: <span style={{ ...styles.stat, width: `${powerstats.intelligence}%`, backgroundColor: '#F9B32F' }}></span>
          </p>
          <p>
            Strength: <span style={{ ...styles.stat, width: `${powerstats.strength}%`, backgroundColor: '#FF7C6C' }}></span>
          </p>
        </article>
      );
    };

    export default HeroCard;
    </code>
  </pre>

  <h3>2.2 AnimeCard.js</h3>
  <p>
    Este componente exibe informações de animes, como título, número de episódios e favoritos.
  </p>
  <pre>
    <code>
    import React from "react";
    import styles from "./ListaDeAnimeCard.module.css";

    export default function ListaDeAnimeCard({ animes }) {
      return (
        <div className={styles.container}>
          <div className={styles.div}>
          {Array.isArray(animes) &&
            animes
              .filter((data) => data && data.title && data.images.jpg.large_image_url)
              .map((data) => (
                <article className={styles.card}>
                  <img
                    src={data.images.jpg.large_image_url}
                    alt={"imagem de " + data.title}
                    key={data.id || Math.random()}
                    className={styles.image}
                  />
                  <h1 className={styles.title}>{data.title}</h1>
                  <p>Episódios: {data.episodes}</p>
                  <p>Favoritos: {data.favorites}</p>
                </article>
              ))}
          </div>
        </div>
      );
    }
    </code>
  </pre>

  <h2>3. Estilos</h2>

  <h3>3.1 Home.module.css</h3>
  <p>Estiliza o layout da página inicial.</p>
  <pre>
    <code>
    .container {
        padding: 20px;
        background-color: #f0f0f0;
    }
    
    .heroesGrid {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }
    </code>
  </pre>

  <h3>3.2 ListaDeAnimeCard.module.css</h3>
  <p>Define os estilos dos cards de animes.</p>
  <pre>
    <code>
    .card {
        width: 23%; 
        align-content: space-between;
        height: 40rem;
        background-color: #fff;
        border-radius: 10px;
        margin: 10px;
        padding: 10px;
    }
    </code>
  </pre>

  <h2>4. Lógica Principal</h2>

  <h3>4.1 page.js</h3>
  <p>
    Contém a lógica para buscar dados de heróis de uma API e renderizá-los na tela utilizando o componente <code>HeroCard</code>.
  </p>
  <pre>
    <code>
    useEffect(() => {
      async function fetchHerois() {
        try {
          const res = await fetch("https://superheroapi.com/api/...");
          const data = await res.json();
          setHerois(data);
        } catch (err) {
          console.log(err);
        }
      }
      fetchHerois();
    }, []);
    </code>
  </pre>

  <h2>5. Como Rodar o Projeto</h2>
  <p>Siga os passos abaixo para executar a aplicação localmente:</p>
  <ol>
    <li>Clone o repositório: <code>git clone https://github.com/seu-repositorio.git</code></li>
    <li>Instale as dependências: <code>npm install</code></li>
    <li>Inicie o servidor: <code>npm run dev</code></li>
    <li>Acesse no navegador: <code>http://localhost:3000</code></li>
  </ol>
</body>
</html>

