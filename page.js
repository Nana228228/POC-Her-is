"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import ListaDeAnimeCard from './components/ListaDeAnimeCard.jsx'
export default function Home() {
  const [animes, setAnimes] = useState([]); // Initialize as an empty array

  useEffect(() => {
    async function fetchAnimes() {
      try {
          const res = await fetch("https://api.jikan.moe/v4/seasons/2021/spring?sfw");
        const dados = await res.json(); // Adjust based on the API response structure
        setAnimes(dados); // Assuming 'response' contains an array of heroes
        console.log(response);
      } catch (err) {
        console.error("Failed to fetch heroes:", err);
      }
    }

    fetchAnimes();
  }, []);

  return (
      <div className={styles.container}>
          <ListaDeAnimeCard animes={animes.data}>
              
          </ListaDeAnimeCard>
    </div>
  );
}
