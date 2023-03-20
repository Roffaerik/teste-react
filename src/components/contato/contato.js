import React from "react"
import './styles.css'
import Header from "../../header/header";
import { useNavigate } from 'react-router-dom'


function Contato(){
    const navigate = useNavigate();
return(

    <div>
        <div id="banner2">
            <Header/>
                <form id="meu_form2">
                    <h1>Entre em contato</h1>
        <label for="nome">Nome</label>
        <input type="text" id="nomeid" placeholder="Erik" required="required" name="nome" />
        <label for="fone">Telefone</label>
        <input type="tel" id="foneid" placeholder="(xx)xxxx-xxxx" name="fone" />
        <label for="email">Email</label>
        <input type="email" id="emailid" placeholder="alguem@mail.com" name="email" />
        <textarea placeholder="Obs:"></textarea>
        <button class="button">Enviar</button>
                </form>

        </div>
    </div>
)
}

export default Contato;
        
        
        
        
        
 



        
        
        