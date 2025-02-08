import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import Loader from "./Loader";

function Pokemon({ search }) {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  let api = "https://pokeapi.co/api/v2/pokemon?limit=50";
  let fetchPokemon = async () => {
    try {
      let response = await fetch(api);
      let data = await response.json();
      let PokemonDetail = data.results.map(async (curPokemon) => {
        let res = await fetch(curPokemon.url);
        let data = await res.json();
        return data;
      });
      await Promise.all(PokemonDetail).then((data) => {
        setPokemon(data);
        setLoading(false);
      });
    } catch (error) {
      console.log("failed to get Data", error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  if (loading) {
    return <Loader />;
  }

  let pokeDesk = pokemon.filter((curPokemon) => {
    return curPokemon.name.toLowerCase().includes(search.toLowerCase());
  });
  console.log(pokeDesk);

  return (
    <>
      <div className="container mx-auto">
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pokeDesk.length > 0 ? (
            pokeDesk.map((curPokemon) => (
              <PokemonCard key={curPokemon.id} pokemon={curPokemon} />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-3">
              No Pokémon found.
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Pokemon;
