// Register.tsx

import { BotaoBusca, BotaoBuscaIMG, Busca, BuscaConteiner, Cabeça, ConteinerMenu, LogoCabeçalho, MenuCabeçalho, Menuicon, PerfilCabeçalho, Pezinho } from "./PaginaStyle";

import gakaluLogo from '../../assets/logo.png';
import menupoints from '../../assets/menupoints.png';
import perfil from '../../assets/Perfil.png';
import Homeicon from '../../assets/Homeicon.png'
import Cupom from '../../assets/Cupom.png'
import Curtida from '../../assets/Curtida.png'
import Carrinho from '../../assets/Carrinho.png'
import Buscaicon from '../../assets/Lupa.png';

export default function Cabeçalho() {
  return (
    <Cabeça>
        <MenuCabeçalho src={menupoints}/>
        <LogoCabeçalho src={gakaluLogo}/>
        <PerfilCabeçalho src={perfil}/>
    </Cabeça>

  );
};

export function Rodape() {
  return (

    <Pezinho>
        <ConteinerMenu>
        <Menuicon src={Homeicon} />
        <Menuicon src={Cupom} />
        <Menuicon src={Curtida} />
        <Menuicon src={Carrinho} />
      </ConteinerMenu>
    </Pezinho>
   
  );
};


export function Buscador() {
  return (

    <BuscaConteiner>
      <BotaoBusca> <BotaoBuscaIMG src={Buscaicon}/></BotaoBusca>
      <Busca placeholder="Busca..." ></Busca>
    </BuscaConteiner>
    
  );
};


