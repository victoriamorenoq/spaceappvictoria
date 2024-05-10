import { CardGiftcard } from "@mui/icons-material";
import "./Hero.css";
import Typography from "@mui/material/Typography";

function Hero() {
    return (
        <>
        {/* <Card
        name= "Victoria Moreno"
        title= "Desarrollo JS"
        e mail= "morenoquintanilla.060589@gmail.com"
        about= "La verdad no"
    /> */}
    
        <Typography variant="h1" gutterBottom>
            Welcome
            </Typography>
        </>
    );
};

{/* <Typography variant="h1" gutterBottom>*/}

/*
function Card(props) {
    return (
    <div className = "card">
        <h2>{props.name}</h2>
        <p>{props.title}</p>
        <p>{props.email}</p>
        <p>{props.about}</p>
    </div>
    )
}*/

export default Hero;