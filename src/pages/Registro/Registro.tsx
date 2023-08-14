import { Link } from 'react-router-dom';
import Register from "../../components/Registro/RegistroComponente";
import gakaluLogo from '../../assets/logo.png';
import setaEsquerda from '../../assets/🦆 arrow-left_.png';
import { LogoTopo, NomePag, Teladiv, VoltarBotao, VoltarSeta } from "./style";
import Registro from '../../components/Registro/RegistroComponente';



export default function InputRegister(){
  return(
    <Teladiv>

          <VoltarBotao>
            <Link to="/"> 
              <VoltarSeta src={setaEsquerda}/>
            </Link>
         </VoltarBotao>
 
      <LogoTopo src={gakaluLogo} />

      <NomePag>Cadastro</NomePag>
      
      <Registro/>

    </Teladiv>

     
  );
}