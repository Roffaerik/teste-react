import React from "react";
import Header from "../../header/header";
import './styles.css';
import Video from '../../assets/video.mp4';
import Cards from "../cards";
import { Link, useNavigate } from 'react-router-dom'

function Home(){
    const navigate = useNavigate();

    return(
        <>
        <Header />
        <div id="banner"></div>
        <div id="trailer-container">
            <div className="content">
                <video controls className="trailer">
                    <source src={Video} />
                    Seu navegador não possui suporte para videos
                </video>
            <div id="sinopse">
                <p className="description">
                Em meio ao conflito entre as cidades-gêmeas de Piltover e Zaun, duas irmãs lutam em lados opostos de uma guerra entre tecnologias mágicas e convicções incompatíveis.
                </p>
                <Link style={{textDecoration: 'none'}} to='/ingresso'>
                <button className="button">Comprar Ingresso</button>
                </Link>
            </div>
            </div>
        </div>
        <Cards />
        </>
    )
}

export default Home;