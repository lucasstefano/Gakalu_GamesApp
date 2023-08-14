import Login from "../../components/Login/LoginComponente";
import gakaluLogo from '../../assets/logo.png'
import { CriarContaLinha, CrieUmaConta, LogoTopo, NomePag, Nãotemconta, Teladiv } from "./style";

export default function InputLogin(){
  return(
    <Teladiv>

      <LogoTopo src={gakaluLogo} />

      <NomePag>Login</NomePag>
      
      <Login/>

      <CriarContaLinha>
          <Nãotemconta> Não tem Conta ? </Nãotemconta>
          <CrieUmaConta href="/registro">
            Crie uma Conta
          </CrieUmaConta>
      </CriarContaLinha>

    </Teladiv>
   
  );
}