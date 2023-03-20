import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './styles.css';
import Logo from '../assets/arcane.jpg'


function Header(){
    const navigate = useNavigate();

    return (
        <header>
                <img id='logo' src={Logo} />
        <div>
            <nav>
                <ul>
                    <Link style={{textDecoration: 'none'}} to='/'>
                        <li>Home</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/fotos'>
                        <li>Fotos</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/contatos'>
                        <li>Contatos</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/comentarios'>
                        <li>Comentários</li>
                    </Link>
                    
                    
                </ul>
            </nav>
        </div>
        </header>
    )
}

export default Header;