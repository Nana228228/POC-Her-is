# POC Heroes: React com Next.js

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

   * [Introdução](#introducao)
   * [Começando o projeto ](#comecando)
   * [Estrutura inicial ](#estrutura)
   * [Componentes e lógica](#componentes)
      - [Hero Card](#button)
      - [Anime Card](#card)
   * [Estilos Globais](#cssGlobal)
   * [Estilos Modulares](#cssModular)
   * [Lógica Principal](#page)
   * [Funcionalidades](#layout)
   * [Autores](#autores)


<h2 id="introducao">Introdução</h2>
Bem-vindo ao POC Heroes: React com Next.js!
Este projeto front-end, desenvolvido com React e Next.js, apresenta uma interface para exibir informações sobre heróis e animes. Ele é organizado de forma modular, com componentes reutilizáveis e estilização consistente, utilizando CSS Modules.

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

<h1>Principais Diretórios e Arquivos:</h1>
<p>O projeto está organizado em pastas para separar a lógica, os estilos e os componentes. Abaixo estão as principais pastas e arquivos:</p>
<ul>
<li>app/: Contém os principais componentes da aplicação.</li>
<li>components/: Componentes reutilizáveis, como HeroCard e AnimeCard.</li>
<li>styles/: Arquivos CSS modulares específicos para cada componente.</li>
<li>globals.css: Define os estilos globais aplicados em toda a aplicação.</li>
<li>layout.js: Gerencia o layout global da aplicação.</li>
<li>page.js: Contém a lógica da página inicial.</li>
</ul>
  
  <h2>2. Componentes e Lógica</h2>

  <h3>2.1 HeroCard.js</h3>
  <p>
    Este componente exibe informações de heróis, incluindo nome, estatísticas (inteligência e força) e uma imagem.
  </p>
  
  ```
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
```


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

<h1>Funcionalidades</h1>
<ul>
  <li>Exibição de heróis com nome, imagem e estatísticas (inteligência e força).</li>
  <li>Listagem de animes com detalhes como episódios e número de favoritos.</li>
  <li>Design responsivo e estilização modular.</li>
</ul>
<h1>Tecnologias Utilizadas</h1>
<ul>
<li>React</li>
<li>Next.js</li>
<li>CSS Modules</li>
<li>Superhero API</li>
  
<p>Este projeto é um ótimo exemplo de organização modular, uso de APIs e design de componentes em React.</p>

<h2 id="autores"> Autores </h2>

<h3>Naomi Arakaki</h3>



[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/naomi-suguimoto-57436b290/)](https://www.linkedin.com/in/naomi-suguimoto-57436b290)

[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white&link=mailto:arakakinaomi228@gmail.com)](mailto:arakakinaomi228@gmail.com)


<h3>Gabriel Aboboreira</h3>


[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/gabriel-aboboreira/)](https://www.linkedin.com/in/gabriel-aboboreira/)

[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white&link=mailto:masterkillbr007@gmail.com)](mailto:masterkillbr007@gmail.com)


<h3>Ana Julia Blande</h3>

[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/ana-julia-blande-silva-348612286/)](https://www.linkedin.com/in/ana-julia-blande-silva-348612286/)








