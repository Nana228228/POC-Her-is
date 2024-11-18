"use client";
import React, { useEffect, useState } from "react";
import HeroCard from "./components/HeroCard";

export default function Home() {
  const [herois, setHerois] = useState([]);
  useEffect(() => {
    async function fetchHerois() {
      try {
        const res = await fetch(
          "https://superheroapi.com/api/9c0ec6aa9f84394384ec249fd87e389c/character-id"
        );
        const data = await res.json();
        await setHerois(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
    herois;
    fetchHerois();
  }, []);
    
  return (
        <div id="heroes">
          {herois.map((hero) => (
            <HeroCard
            key={hero.id}
            name={hero.name}
            image={hero.image}
            intelligence={hero.intelligence}
            strength={hero.strength}
          />
        ))}
      </div>
    );
}


