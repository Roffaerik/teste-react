import React from "react"
import './styles.css'
import { useNavigate } from 'react-router-dom'
import Header from "../../header/header";


function Button(){
    const navigate = useNavigate();
    
return(
    <>
    <div>
    <div id="bannerb">
        <Header />
        
            <form id="meu_formb">
                <h1>Preencha os dados</h1>
    <label for="nome1">Nome</label>
    <input type="text" id="nomeid" placeholder="Erik" required="required" name="nome" />
    <label for="fone1">Telefone</label>
    <input type="tel" id="foneid" placeholder="(xx)xxxx-xxxx" name="fone" />
    <label for="email1">Email</label>
    <input type="email" id="emailid" placeholder="alguem@mail.com" name="email" />
    <label for="dados">Dados do cartão</label>
    <input type="cartao" id="emailid" placeholder="xxx/xxxxx/x" name="num"/>
    <button class="button">Comprar</button>
            </form>

    </div>
</div>
    </>
)
}





export default Button;