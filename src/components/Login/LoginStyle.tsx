import styled from 'styled-components';
import { global } from '../../globalStyle';

export const BigConteiner = styled.div`
display: flex;
align-items: center;   
flex-direction: column;
margin-top:15px;
`;

export const ConteinerInput = styled.div`
display: flex;
align-items: center;   
flex-direction: column;
gap: 25px;
`;

export const BarraInput = styled.div`
display: flex; 
align-items: center; 
width: 388px;
height: 66px;
border-radius: 34px;
border: 2px solid #EBEBE9;
box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
background: ${global.colors.CinzaBuscaG};
`;

export const EntradaLogin = styled.input`
width: 388px;
height: 66px;
border: none;
background-color: transparent;
font-family: ${global.fonts.roboto};
font-size: 20px;
margin-left: 25px;

&::placeholder {
    color: ${global.colors.CinzaPlaceH};
    font-family: ${global.fonts.roboto};
    font-weight: 200;
    font-size: 20px;
  }
&:focus {
    outline: none;

`;

export const EsqueciSenha = styled.a`
font-family: ${global.fonts.roboto};
font-weight: regular;
align-self: flex-end;
margin: 0px 20px 0px 0px;
color: ${global.colors.AzulG};
text-decoration: none;
margin-top: 7px;

&:visited { 
  color: ${global.colors.AzulG};
  font-family: ${global.fonts.roboto};
  text-decoration: none;
`;

export const BotaoConfirmar = styled.button`
font-size: 20px;
color: ${global.colors.BrancoG};
font-weight: bold;
width: 136px;
height: 56px;
margin-top: 42px;
border-radius: 15px;
background: ${global.colors.AzulG};
box-shadow: 0px 3px 6px 1px rgba(3, 117, 255, 0.31);
border: none;

&:hover {
  cursor: pointer;

`;

export const ContemErro = styled.div` 
display: flex;
align-items: center;
justify-content: center; 
width: 205px;
height: 1px; 
margin-top: 20px;
`;

export const ConteinerConecte = styled.div` 
display: flex;
align-items: center;   
flex-direction: row;
margin-top: 50px;
`;

export const BarraConecte = styled.div` 
width: 108px;
height: 1px; 
background: ${global.colors.CinzaConectar};
`;

export const TextConecte = styled.a` 
font-size: 20px;
font-weight: 400;
color: ${global.colors.CinzaConectar};
font-family: ${global.fonts.roboto};
margin: 0px 12px;
`;

export const ConfirmacaoCadastro = styled.div`
display: flex;
align-items: center;   
flex-direction: row; 
height: 10px;
align-self: flex-start;
margin-top: 26px;
`;

export const ConteinerSocials = styled.div` 
display: flex;
align-items: center;
justify-content: center;   
flex-direction: row;
margin-top: 28px;
`;

export const SocialLinks = styled.button` 
display: flex;
align-items: center;
justify-content: center;   
width: 63px;
height: 63px;
margin: 0px 37px 0px;
border: transparent;
cursor: pointer;
`;

export const SocialsIcon = styled.img` 
width: 63px;
height: 63px; 
`;

export const MensagemErro = styled.p` 
color: ${global.colors.Vermelho};
font-family: ${global.fonts.roboto};
`;