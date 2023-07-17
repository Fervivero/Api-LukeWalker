import { useState } from "react";
import axios from "axios";

const Pokemon = props => {
    const [lista, setlista] = useState(null);
    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=808&offset=0")
            .then(Response=>{setlista(lista.data)})
        }, []); 

    return (
        <div>
            {responseData}
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
};

export default Pokemon;