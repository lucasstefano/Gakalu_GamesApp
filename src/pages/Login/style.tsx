import styled from 'styled-components';
import { global } from '../../globalStyle';

export const Teladiv = styled.div`
display: flex;
align-items: center;   
flex-direction: column;
width: 428px;
height: 926px;
background: ${global.colors.FundoG};
`;

export const LogoTopo = styled.img`
width: 209px;
height: 83px;
margin-top: 100px;
`;

export const NomePag = styled.div`
font-size: 36px;
font-family: ${global.fonts.roboto};
align-self: flex-start;
margin: 100px 23px 0px;
`;

export const CriarContaLinha = styled.div`
width: 428px;
height: 23px;
display: flex;
align-items: center;   
justify-content: center;
flex-direction: row;
margin-top: 70px;
`;

export const Nãotemconta = styled.a`
font-size: 20px;
color: ${global.colors.PretoG};
font-family: ${global.fonts.roboto};
`;

export const CrieUmaConta = styled.a`
font-size: 20px;
font-weight: bold;
color: ${global.colors.AzulG};
font-family: ${global.fonts.roboto};
margin-left: 16px;
text-decoration: none;

&:visited { 
    color: ${global.colors.AzulG};
    font-family: ${global.fonts.roboto};
    text-decoration: none;

`;