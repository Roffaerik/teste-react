import React from "react"
import './styles.css'
import Header from "../../header/header";
import { useNavigate } from 'react-router-dom'

function Fotos(){
    const navigate = useNavigate();

return(
    <div>
        <Header/>
    <div>

    <div class="actor-cards-container">
        <div class="cards-content">
            <div class="card banner-1">Arcane</div>
            <div class="card banner-2">Arcane</div>
            <div class="card banner-3">Arcane</div>
            <div class="card banner-4">Arcane</div>
            <div class="card banner-5">Arcane</div>
            <div class="card banner-6">Arcane</div>

        </div>
    </div>
    </div>
    </div>

)
}

export default Fotos;