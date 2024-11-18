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

const styles = {
  card: {
    height: '720px',
    width: '300px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    margin: '10px',
    padding: '10px',
  },
  image: {
    borderRadius: '10px 10px 0 0',
    width: '100%',
    maxHeight: '400px',
  },
  title: {
    textAlign: 'center',
  },
  stat: {
    display: 'block',
    height: '10px',
    borderRadius: '5px',
    marginTop: '5px',
  },
};

export default HeroCard;
