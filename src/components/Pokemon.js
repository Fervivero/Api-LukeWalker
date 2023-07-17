import { useState } from "react";

const Pokemon = (props) => {
    const [lista, setlista] = useState ([]);

    async function traerDatos() {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=808&offset=0")
            .then((resultado) => {
                return resultado.json();
            })
            .then((resultado) => {
                const listaPokemon = resultado.results
                var listTemp = [...lista];

                for (var i = 0; i < listaPokemon.length; i++) {
                    const pokemonObj = listaPokemon[i];
            
                  listTemp.push(pokemonObj);
                }

                console.log(listTemp);

                setlista(listTemp);
            }).catch((error) => {

                console.log(error);
            });
    }

    return (
        <div>
            <button onClick={traerDatos}> ¿Quién es este Pokemón?</button>
            {
                lista.map((item, index) => {
                    return <div key={index}>
                        <p>{item.name}</p>
                        </div>
                })
            }
        </div>
    );
}




export default Pokemon;