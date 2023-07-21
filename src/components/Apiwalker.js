import React, { useState, useEffect } from "react";
import axios from "axios";

const Apiwalker = () => {
    const [resources, setResources] = useState("");
    const [data, setData] = useState({});
    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        if (resources && inputValue) {
            axios.get(`https://swapi.dev/api/${resources}/${inputValue}`)
                .then((res) => {
                    setData(res.data);
                    setError(false);
                }).catch((error) => {
                    console.log(error);
                    setError(true);
                });
        }
    }, [resources, inputValue]);

    const submitData = (ev) => {
        ev.preventDefault();
    };

    return (
        <div>
            <form onSubmit={submitData}>
                <label>Search for:</label>
                <select name="resources" value={resources} onChange={(evento) => {
                    setResources(evento.target.value);
                }}>
                    <option value="films">Films</option>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="species">Species</option>
                    <option value="starships">Starships</option>
                    <option value="vehicles">Vehicles</option>
                </select>
                <label>id:</label>
                <input
                    type="text"
                    name="id"
                    value={inputValue}
                    onChange={(evento) => {
                        setInputValue(evento.target.value);
                    }}
                />
                <input type="submit" value="Search" className="button" />
            </form>
            {error && (
                <div className="alert">
                    <img src="/equivocado.jpeg" alt="Error" />
                    <p>"Estos no son los droides que está buscando"</p>
                </div>
            )}

            {Object.keys(data).length !== 0 && (
                <div className="objects">
                    <h2>{data.title || data.name}</h2>
                    {data.director && <p>Director: {data.director}</p>}
                    {data.opening_crawl && <p> Opening Crawl: {data.opening_crawl}</p>}
                    {data.height && <p>Height: {data.height}</p>}
                    {data.hair_color && <p>Hair Color: {data.hair_color}</p>}
                    {data.birth_year && <p>Birth Year: {data.birth_year}</p>}
                    {data.diameter && <p>Diámetro: {data.diameter}</p>}
                    {data.population && <p>Population: {data.population}</p>}
                    {data.language && <p>Language: {data.language}</p>}
                    {data.designation && <p>Designation: {data.designation}</p>}
                    {data.starship_class && <p>Class: {data.starship_class}</p>}
                    {data.passengers && <p>Passengers: {data.passengers}</p>}
                    {data.vehicle_class && <p>Class: {data.vehicle_class}</p>}
                    {data.gender && <p>Gender: {data.gender}</p>}
                </div>
            )}
        </div>
    );
};

export default Apiwalker;

        
