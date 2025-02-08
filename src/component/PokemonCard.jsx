import React from "react";

function PokemonCard({ pokemon }) {
  return (
    <>
      {/* card-Wrapper */}
      <div className="card-wrapper relative max-w-md bg-gradient-to-b from-slate-600 to-yellow-800 rounded-2xl overflow-hidden flex justify-center items-center">
        {/* card-content */}
        <div className=" relative text-center w-[calc(100%-3px)] h-[calc(100%-3px)] text-white bg-gradient-to-b from-slate-600 to-slate-800 rounded-2xl p-4">
          <div className="grid grid-flow-row gap-2 items-center">
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              className="w-60 h-60 mx-auto object-contain"
              alt={pokemon.id}
            />

            <span className="font-semibold text-lg">{pokemon.name}</span>
            <span className="p-2 rounded-2xl text-slate-800 bg-red-300 text-lg">
              {pokemon.types
                .map((curType) => {
                  return curType.type.name;
                })
                .join(",")}
            </span>
          </div>
          <ul className="grid grid-cols-3 gap-2 items-center mt-5">
            <li className=" flex items-center justify-center gap-2  bg-slate-700 border rounded-xl border-gray-500">
              <span>Height:-</span>
              <span>{pokemon.height}</span>
            </li>
            <li className=" flex items-center justify-center gap-2  bg-slate-700 border rounded-xl border-gray-500">
              <span>Weight:-</span>
              <span>{pokemon.weight}</span>
            </li>
            <li className=" flex items-center justify-center gap-2  bg-slate-700 border rounded-xl border-gray-500">
              <span>Speed:-</span>
              <span>{pokemon.stats[5].base_stat}</span>
            </li>
            <li className=" flex items-center flex-col justify-center gap-1 bg-slate-700 border rounded-xl border-gray-500">
              <span>Ability:-</span>
              <span>{pokemon.abilities[0].ability.name}</span>
            </li>
            <li className=" flex items-center flex-col justify-center gap-1 bg-slate-700 border rounded-xl border-gray-500">
              <span>Attack:-</span>
              <span>{pokemon.stats[1].base_stat}</span>
            </li>
            <li className=" flex items-center flex-col justify-center gap-1 bg-slate-700 border rounded-xl border-gray-500">
              <span>Experience:-</span>
              <span>{pokemon.base_experience}</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default PokemonCard;
