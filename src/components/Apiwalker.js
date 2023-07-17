import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

//  "films": "https://swapi.dev/api/films/",
//  "people": "https://swapi.dev/api/people/",
//  "planets": "https://swapi.dev/api/planets/",
//  "species": "https://swapi.dev/api/species/",
//  "starships": "https://swapi.dev/api/starships/",
//  "vehicles": "https://swapi.dev/api/vehicles/"

const Apiwalker = props => {
    const [resources, setResources] = useState("");
    const [id, setId] = useState('');
    const [data, setData] = useState ([]);

    useEffect(()=>{
        let submitData = (ev) => {
        ev.preventDefault()
    }

        axios.get(`https://swapi.dev/api/${resources}/${id}`)
        .then(res=>{
            setResources(res.data)
            console.log(res.data)
        })
    }, []); 
    
    return (
        <div>
            <form onSubmit={submitData}>
                <label>Search for:</label>
                <select name="resources" value={resources} onChange={(evento) => {
                    setResources(evento.target.value);
                }}  >
                    <option value="films" >Films</option>
                    <option value="people" >People</option>
                    <option value="planets" >Planets</option>
                    <option value="species" >Species</option>
                    <option value="starships" >Starships</option>
                    <option value="vehicles" >Vehicles</option>
                </select>
                <label>id:</label>
                <input type="text" name="id" value={id} onChange={(evento) => {
                    setId(evento.target.value)
                }} />
                <input type="submit" value="Search" />
            </form>
        </div>
    )
}
export default Apiwalker;