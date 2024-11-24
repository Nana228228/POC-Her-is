# POC Heroes: React com Next.js

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

   * [Introdução](#introducao)
   * [Começando o projeto ](#comecando)
   * [Estrutura inicial ](#estrutura)
   * [Componentes](#componentes)
      - [Button](#button)
      - [Card](#card)
   * [Estilos Globais](#cssGlobal)
   * [Estilos Modulares](#cssModular)
   * [Page](#page)
   * [Layout](#layout)
   * [Autores](#autores)


<h2 id="introducao">Introdução</h2>
Bem-vindo ao repositório POC Heroes: React com Next.js🎉 Este é um recurso gratuito que ensina o passo a passo para criar um projeto React usando o bootstraping do Next.js. Este projeto é uma aplicação desenvolvida em Node.js e React que utiliza estilos modularizados e componentes reutilizáveis para exibir informações sobre animes. Aqui está uma explicação detalhada dos arquivos e componentes usados.

<h2 id="comecando">Começando o projeto</h2>

Para criar um projeto usando o framework Next.js, digite no terminal: 
```bash
nmx create-next-app@latest nome-do-projeto
```

Para entrar no diretório do projeto e iniciar o servidor de desenvolvimento, digite:

```bash
cd nome-do-projeto
npm run dev
```

<h2 id="estrutura">Estrutura inicial</h2>

<pre>
Estrutura inicial:
  
app/
├── components/
│   ├── HeroCard.js
│   ├── ListaDeAnimeCard.js
│   └── ListaDeAnimeCard.module.css
├── styles/
│   └── Home.module.css
├── globals.css
├── layout.js
└── page.js

</pre>
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
  


  <h3>2.2 AnimeCard.js</h3>
  <p>
    Este componente exibe informações de animes, como título, número de episódios e favoritos.
  </p>
  
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


  <h2>3. Estilos</h2>

  <h3>3.1 Home.module.css</h3>
  <p>Estiliza o layout da página inicial.</p>
  
    .container {
        padding: 20px;
        background-color: #f0f0f0;
    }
    
    .heroesGrid {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }
  
  <h3>3.2 ListaDeAnimeCard.module.css</h3>
  <p>Define os estilos dos cards de animes.</p>

    .card {
        width: 23%; 
        align-content: space-between;
        height: 40rem;
        background-color: #fff;
        border-radius: 10px;
        margin: 10px;
        padding: 10px;
    }
  <h2>4. Lógica Principal</h2>

  <h3>4.1 page.js</h3>
  <p>
    Contém a lógica para buscar dados de heróis de uma API e renderizá-los na tela utilizando o componente <code>HeroCard</code>.
  </p>
  
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



