import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { BarraInput, BotaoConfirmar, EsqueciSenha, MensagemErro, BigConteiner, EntradaLogin, BarraConecte,TextConecte,ConteinerConecte, ConteinerSocials, SocialsIcon, ConteinerInput, ContemErro, SocialLinks } from './LoginStyle';

import gmailLogo from '../../assets/Gmaillogo.png';
import facebookLogo from '../../assets/FacebookLogo.png';

export default function Login() {
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState<string | null>(null);

  const handleLogin = (data: any) => {
    const nomeOuEmail = data.nomeOuEmail;
    const senha = data.senha;

    if (
      (nomeOuEmail === location.state?.nome ||
       nomeOuEmail === location.state?.email) &&
       senha === location.state?.senha
    ) {
      setError(null);
      navigate('/home'); 
    } else {
      setError('Cadastro Inválido');
    }
  };

  useEffect(() => {
    if (!location.state) {
      navigate('/');
    }
  }, [location.state, navigate]);

  return (
    <div>
      <form onSubmit={handleSubmit(handleLogin)}>
        
        <BigConteiner>
          <ConteinerInput>
          <BarraInput>
            <EntradaLogin  {...register('nomeOuEmail')} placeholder="Nome ou E-mail" />
          </BarraInput>
          
          <BarraInput>
            <EntradaLogin  {...register('senha')} placeholder="Senha" />
          </BarraInput>

          </ConteinerInput>
          
          <EsqueciSenha href="/">Esqueceu a senha?</EsqueciSenha>
        
          <BotaoConfirmar type="submit">Entrar</BotaoConfirmar>
          <ContemErro>  {error && <MensagemErro>{error}</MensagemErro>} </ContemErro>
         
          

        </BigConteiner>
      </form>

      <ConteinerConecte>
        <BarraConecte></BarraConecte>
        <TextConecte>Ou Conecte Com</TextConecte>
        <BarraConecte></BarraConecte>
      </ConteinerConecte>
      
      <ConteinerSocials>
        <SocialLinks>
        <SocialsIcon src={facebookLogo}/>
        </SocialLinks>

        <SocialLinks>
        <SocialsIcon src={gmailLogo}/>
        </SocialLinks>
        
      </ConteinerSocials>
    </div>
  );
}
