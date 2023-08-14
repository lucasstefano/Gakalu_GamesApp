import Cabeçalho, { Buscador, Rodape } from "../../components/Inicio/Pagina";
import ProdutoMini, { ProdutoMiniNOVO, ProdutoMiniSEMI } from "../../components/Inicio/produtos";
import {  Banner, BannerConteiner,  Barrinha, FundoDapag, GOSeta, GOSetaIMG, OfertaConteiner, OfertaText, OpcoesConteiners, OpcoesDiv, OpcoesImg, OpcoesPage, OpcoesText, ProdutoConteiner, Teladiv } from "./style";

import iconNovos from '../../assets/Icon-Novos.png';
import iconjogo from '../../assets/icon_Jogo.png';
import iconSemi from '../../assets/icon_Semi.png';
import iconPeças from '../../assets/icon-peças.png';
import GoTo from '../../assets/SetaDireita.png';
import banner1 from '../../assets/Rectangle 23.png';
import banner2 from '../../assets/Rectangle 24.png';

export default function Home() {
 
  return (
    <Teladiv>

        <Cabeçalho/>
        
        <BannerConteiner>
          <Banner src={banner1}/>
          <Banner  src={banner2}/>
        </BannerConteiner>
       
        <OpcoesDiv>
          <OpcoesConteiners> 
            <OpcoesPage><OpcoesImg src={iconjogo} /> </OpcoesPage>
            <OpcoesText>Jogos Eletronicos</OpcoesText>
          </OpcoesConteiners>

          <OpcoesConteiners>
             <OpcoesPage><OpcoesImg src={iconPeças} /></OpcoesPage>
             <OpcoesText>Peças de Computadores</OpcoesText>
          </OpcoesConteiners>

          <OpcoesConteiners>
             <OpcoesPage><OpcoesImg src={iconSemi} /></OpcoesPage>
             <OpcoesText>Acessórios Novos</OpcoesText>
          </OpcoesConteiners>

          <OpcoesConteiners>
             <OpcoesPage><OpcoesImg src={iconNovos} /></OpcoesPage>
             <OpcoesText>Acessórios Semi-Novos</OpcoesText>
          </OpcoesConteiners>

        </OpcoesDiv>
      
        <Buscador/>

        <OfertaConteiner>
          <OfertaText>Ofertas</OfertaText>
          <GOSeta><GOSetaIMG src={GoTo} /></GOSeta>
        </OfertaConteiner>

        <Barrinha></Barrinha>

        <ProdutoConteiner>
          <ProdutoMini/>
          <ProdutoMiniNOVO/>
          <ProdutoMiniSEMI/>
        </ProdutoConteiner>
        
       <FundoDapag>
        <Rodape/>
       </FundoDapag>

    </Teladiv>
  );
}
