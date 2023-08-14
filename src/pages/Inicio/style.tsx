import styled from 'styled-components';
import { global } from '../../globalStyle';

export const Teladiv = styled.div`
display: flex;
align-items: center;   
flex-direction: column;
width: 428px;
height: 926px;
background: ${global.colors.FundoG};
overflow: hidden;
`;

export const BannerConteiner = styled.div`
display: flex;
align-items: center;   
flex-direction: row;
align-self: flex-start;
margin-left: 9px;
`;

export const Banner = styled.img`
width: 350px;
height: 198px;
border-radius: 15px;
margin-left: 9px;
`;

export const OpcoesDiv = styled.div`
display: flex;
align-items: center;   
justify-content: center;
flex-direction: row;
margin: 21px 20px;
gap: 12px;
`;

export const OpcoesConteiners = styled.div`
display: flex;
align-items: center;   
flex-direction: column;
`;



export const OpcoesPage = styled.div`
display: flex;
align-items: center;   
justify-content: center;
width: 87px;
height: 87px;
border-radius: 15px;
background: ${global.colors.AzulG};
`;

export const OpcoesImg = styled.img`
height: 40px;
`;

export const OpcoesText = styled.a`
margin-top: 6px;
font-size: 13px;
color: ${global.colors.PretoG};
font-weight: bold;
text-align: center;
font-family: ${global.fonts.roboto};
`;



export const OfertaConteiner = styled.div`
display: flex;
align-items: center;   
width: 428px;
flex-direction: row;
margin-top: 19px;
`;

export const OfertaText = styled.div`
font-size: 24px;
font-weight: bold;
font-family: ${global.fonts.roboto};
color: ${global.colors.PretoG};
margin-left:  23px;
`;

export const GOSeta = styled.button`
width: 24px;
margin-left: 283px;
display: flex;
border: transparent;
`;

export const GOSetaIMG = styled.img`
margin-top: 5px;
width: 24px;
`;

export const Barrinha = styled.div`
width: 388px;
height: 1px;
background-color: ${global.colors.CinzaG};
margin: 12px 0px 10px;
`;

export const ProdutoConteiner = styled.div`
display: flex;
flex-direction: row;
width: 426px;
margin-left: 15px;
align-self: flex-start;
`;

export const Fundo = styled.div`
align-self: flex-end;
`;

export const FundoDapag = styled.footer`
margin-top: auto;
`;