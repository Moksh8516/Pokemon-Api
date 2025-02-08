import { useState } from "react";
import Pokemon from "./component/Pokemon";

// import PokemonCard from "./component/PokemonCard";
function App() {
  const [search, setSearch] = useState("");
  return (
    <>
      <h1 className="text-gray-50 text-center font-semibold mt-10 underline text-2xl">
        Let's Search Your Pokemon
      </h1>
      <div className="flex justify-center my-10">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 max-w-md w-full rounded-lg ring focus:ring-blue-600 focus:text-gray-500 outline-none"
          placeholder="Search Pokemon"
        />
      </div>
      <Pokemon search={search}></Pokemon>
    </>
  );
}

export default App;
