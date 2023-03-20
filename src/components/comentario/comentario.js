import React from "react"
import './stylles.css'
import Header from "../../header/header";
import { useNavigate } from 'react-router-dom'


function Comentario(){
    const navigate = useNavigate();
return(

    <div>
        <div id="banner1">
            <Header/>
            <div class="parent">
    <div class="child">Eu já tinha perdido as esperanças da Riot fazer uma série, porque os players já sugeriam isso pra empresa a tanto tempo e eles nunca davam a entender que fariam. Pra quem joga lol a muito tempo, ver que finalmente tá acontecendo é mt show.</div>
    <div class="child">QUERO PARABENIZAR A RIOT E A NETFIX POR ESSA SUPER ANIMAÇÃO, EU AMEI! ESPERO QUE EXPLOREM OS OUTROS REINOS NESSA SÉRIE, SERIA MARAVILHOSO VER A ORIGEM DA SHYVANA E CONHECER O PASSADO DO JARVAN IV</div>
    <div class="child">Pow mano ser e doido Netflix 😍😍😍 imagina Uma série  😍😍😍seria muito foda  ir ainda mais com essas dublagem muito foda estão de parabéns 👏👏👏👏eu tô valor quando vcs colocam uma empresa que sabe dubla 👏👏👏 parabéns vcs são foda</div>
    <div class="child">Definitivamente a melhor série animada que já vi. Ouso dizer que talvez seja a melhor série da minha vida. Eu simplesmente amei todos os minutos. O roteiro é muito bom e consistente.</div>
    <div class="child">Arcane é um verdadeiro espetáculo. Quem acompanha as lores do LOL sabe muito bem o quão vasto é o universo de Runeterra, e essa introdução com Arcane foi sensacional, o melhor ponte de partida possível.</div>
    <div class="child">Arcane tem sua fantástica primeira temporada. Tem uma ótima animação, trilha sonora impecável, um elenco muito bom, uma seriedade e dramatização que nem eu esperava </div>                          
            </div>
            <form id="meu_form1">
        <h1>Comentarios</h1>
        <textarea placeholder="Deixe sua opnião"></textarea>
        <button class="button">Comentar</button>

        
    </form>
         </div>
         </div>
)
}

export default Comentario;
        