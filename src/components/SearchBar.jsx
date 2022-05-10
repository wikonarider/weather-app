import React, { useState } from "react";
import './SearchBar.css';

// CSS Searchbar input total wp width

// Se ejecuta la función onSearch
export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
        <form className="searchBarBox" onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
        // Luego de ejecutarse cambia el estado a un string vacío | Limpia el input
        setCity("");
        }}>
        <input className="inputBox"
        type="text"
        placeholder="Search a city weather..."
        // Value para que esté vínculado siempre al evento estado del input.
        value={city}
        // Cuando haya un cambio ejecuta la función que recibe el evento, y setea el estado accediendo al value | Lo que escribe el user en el input. 
        onChange= {e => setCity(e.target.value)}
        />
        <input className="submit" type="submit" value="Add" />
      </form>
  );
}