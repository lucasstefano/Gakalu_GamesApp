import styled from 'styled-components';
import { global } from '../../globalStyle';


export const Cabeça = styled.div`
display: flex;
align-items: center;   
flex-direction: row;
width: 427px;
height: 96px;
`;

export const MenuCabeçalho = styled.img`
width: 55px;
height: 55px;
margin-left: 20px;
margin-right: 87px;
`;

export const PerfilCabeçalho = styled.img`
width: 55px;
height: 55px;
margin-left: 87px;
margin-right: 20px;
`;

export const LogoCabeçalho = styled.img`
width: 104px;
height: 41px;
`;

export const Pezinho = styled.div`
display: flex;
align-items: center;   
flex-direction: row;
width: 428px;
height: 80px;
background-color: ${global.colors.BrancoG};
`;

export const ConteinerMenu = styled.div`
margin: 0px 0px 38pxx;

`;

export const Menuicon = styled.img`
height: 35px;
margin-left: 56px;

`;


export const BuscaConteiner = styled.div`
display: flex;
align-items: center;   
flex-direction: row;
width: 388px;
height: 55px;
background-color: ${global.colors.CinzaBuscaG};
border-radius: 15px;

`;

export const Busca = styled.input`
font-size: 20px;
width: 368px;
height: 55px;
border: none;
background-color: transparent;

&::placeholder {
    color: ${global.colors.CinzaPlaceH};
    font-family: ${global.fonts.roboto};
    font-weight: 200;
    font-size: 20px;
  }
&:focus {
    outline: none;

`;




export const BotaoBusca = styled.button`
cursor: pointer;
border: none;
background-color: transparent;
margin-left: 15px;
margin-right: 15px;
`;

export const BotaoBuscaIMG = styled.img`
width: 27px;
height: 27px;
`;
