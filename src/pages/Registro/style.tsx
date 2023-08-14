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
margin-top: 15px;
`;

export const NomePag = styled.div`
font-size: 36px;
font-family: ${global.fonts.roboto};
align-self: flex-start;
margin: 100px 23px 0px;
`;

export const VoltarBotao = styled.button`
display: flex;
align-items: center;   
justify-content: center;
align-self: flex-start;
width: 31px;
height: 30px;
margin: 55px 20px 0px;
border: transparent;
`;

export const VoltarSeta = styled.img`
width: 31px;
height: 30px;
`;
