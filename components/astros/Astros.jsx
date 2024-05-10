import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import {Typography} from "@mui/material/Typography";
import "./Astros.css";


function Astro (props) {
    //esta es una card
    return (
        <div className= "card">
            <h2>{props.astro.name}</h2>
            <p>{props.astro.craft}</p>
        </div>
    );
}

//Esto es lo que va a imprimirse
//Entre llaves para que se pueda renderizar correctamente

//Como no estamos fuera del archivo no necesitamos exportar (<Astro/>)


function Astros() {

const [astros, setAstros] = useState(); 
    const URL = "http://api.open-notify.org/astros.json";

    useEffect(() => {
        async function fetchData() {
        const response = await fetch(URL);
        const data = await response.json();
        setAstros(data.people);
        }
        fetchData();
    }, []);
    console.log(astros);

    return (
        <>
        <Typography variant="h2">ASTROS</Typography>
        <div className= "card-container">
        {
            astros ? (
            astros.map((astro, index) => <Astro astro={astro} key={index} />
        )) : (
            <CircularProgress />
        )}
        </div>
        </>
    );
}


//renderización
export default Astros;