import styled from 'styled-components';
import { global } from '../../globalStyle';

export const ConteinerProduto = styled.div`
display: flex;
align-items: center;   
flex-direction: column;
height: 241px;
width: 185px;
border-radius: 15px;
background-color: ${global.colors.BrancoG};
margin-right: 5px;
`;

export const TextoConteiner = styled.div`
margin: 0px 11px 0px;
align-self: flex-start;
`;

export const ProdutoName = styled.a`
font-size: 12px;
font-weight: bold;
font-family: ${global.fonts.roboto};
color: ${global.colors.PretoG};
`;

export const Produtolugar = styled.a`
font-size: 12px;
font-family: ${global.fonts.roboto};
color: ${global.colors.PretoG};
`;

export const ProdutoPreço = styled.a`
font-size: 16px;
font-weight: 800;
font-family: ${global.fonts.roboto};
color: ${global.colors.AzulG};
font-weight: bold;
`;

export const ConteinerImg= styled.div`
display: flex;
position: relative;
`;

export const ProdutoImg = styled.img`
width:185px;
height:145px;
`;

export const Likeimg = styled.img`
width: 26px;
height: 23px;
position: absolute;
right: 0;
top:0;
`;

export const LikeDiv = styled.button`
position: absolute;
right: 0;
margin: 14px 10px 0px 0px;
cursor: pointer;
width: 26px;
height: 23px;
border: none;
background-color: transparent;

`;


export const CurtidaConteiner = styled.div`
display: flex;
align-items: center;  
justify-content: center;
`;


export const Produtolocalizacao = styled.img`
width: 7px;
height: 9px;
justify-content: right;
margin-right: 3px;
`;

export const EstrelasDiv = styled.div`
position: absolute;
bottom: 0;
margin-left: 22px;
`;

export const EstrelaUni = styled.img`
width: 19px;
height: 20px;
margin-left: 7px;
`;
