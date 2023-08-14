import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { BarraInput, BotaoConfirmar, BigConteiner, EntradaRegister, BarraConecte,TextConecte,ConteinerConecte, ConteinerSocials, SocialsIcon, ConteinerInput, MensagemErro, TermosCondicoes, TermosCondicoesLink, SocialLinks } from './RegistroStyle';
import { ConfirmacaoCadastro } from './RegistroStyle';

import gmailLogo from '../../assets/Gmaillogo.png';
import facebookLogo from '../../assets/FacebookLogo.png';

type FormData = {
  nome: string;
  email: string;
  senha: string;
  termosEcondicoes: boolean;

};

export default function Registro() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // Simulated registration logic
    console.log('Registered with:', data.nome,  data.email, data.senha);


    navigate('/', { state: { nome: data.nome, email: data.email, senha: data.senha } });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
          <BigConteiner>
            <ConteinerInput>
        
              <BarraInput>
                  <EntradaRegister {...register('nome', {required: 'Nome é obrigatório', minLength: {value: 4, message: 'Deve ter mais que 3 caracteres' }})}placeholder="Nome"/>
                  {errors.nome && <MensagemErro>{errors.nome.message}</MensagemErro>}
              </BarraInput>

              <BarraInput>
                  <EntradaRegister {...register('email', {required: 'Email é obrigatório', pattern: { value: /^[A-Za-z0-9._%+-]+@gmail\.com$/,  message: 'Email deve ser do domínio @gmail.com'}})} 
                  placeholder="E-mail"/>{errors.email && <MensagemErro>{errors.email.message}</MensagemErro>}
               </BarraInput>

       
              <BarraInput>
                  <EntradaRegister {...register('senha', {required: 'Senha é obrigatória',  minLength: {value: 8, message: 'Senha deve ter mais que 8 caracteres' }})}placeholder="Senha" type="senha"/>
                   {errors.senha && <MensagemErro>{errors.senha.message}</MensagemErro>}
              </BarraInput>

            </ConteinerInput>

            <ConfirmacaoCadastro>
              <input type="checkbox"{...register('termosEcondicoes', { required: true })}/>
               <TermosCondicoes>
                 Eu li e concordo com os <TermosCondicoesLink href = " ">termos de uso</TermosCondicoesLink> 
               </TermosCondicoes>
              {errors.termosEcondicoes && <MensagemErro>*</MensagemErro>}
            </ConfirmacaoCadastro>

            <BotaoConfirmar type="submit">Cadastrar</BotaoConfirmar>

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


