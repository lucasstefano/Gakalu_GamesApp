import { ConteinerImg, ConteinerProduto, CurtidaConteiner, EstrelaUni, EstrelasDiv, LikeDiv, Likeimg, ProdutoImg, ProdutoName, ProdutoPreço, Produtolocalizacao, Produtolugar, TextoConteiner } from "./ProdutoStyle";
import produto from '../../assets/Produto.png';
import produto2 from '../../assets/Cooler.png';
import produto3 from '../../assets/HeadSet.png';
import produto4 from '../../assets/Mouse.png';
import curte from '../../assets/Curtida.png';
import estrela from '../../assets/Star.png';
import lugar from '../../assets/Localizaçao.png';

export default function ProdutoMini() {
    return (
      <ConteinerProduto>
        
          <ConteinerImg>
            <LikeDiv>
              <Likeimg src={curte}/>
            </LikeDiv>
          
          <EstrelasDiv>
              <EstrelaUni src={estrela}/>
              <EstrelaUni src={estrela}/>
              <EstrelaUni src={estrela}/>
              <EstrelaUni src={estrela}/>
              <EstrelaUni src={estrela}/>
          </EstrelasDiv>

          <ProdutoImg src={produto}/>

        </ConteinerImg>
  
     
        <TextoConteiner>
            <ProdutoName>The Legend of Zelda: Breath  of the Wild (Nintendo Switch)</ProdutoName>
        </TextoConteiner>

        <TextoConteiner>
            <Produtolocalizacao src= {lugar}/>
            <Produtolugar>Rio de Janeiro</Produtolugar>
        </TextoConteiner>

        <TextoConteiner>
            <ProdutoPreço>R$ 98.99</ProdutoPreço>
        </TextoConteiner>
        

      </ConteinerProduto>
  
    );
  }

  export function ProdutoMiniNOVO() {
    return (
      <ConteinerProduto>
        
          <ConteinerImg>
            <LikeDiv>
              <Likeimg src={curte}/>
            </LikeDiv>
          
          <EstrelasDiv>
              <EstrelaUni src={estrela}/>
              <EstrelaUni src={estrela}/>
              <EstrelaUni src={estrela}/>
              <EstrelaUni src={estrela}/>
              <EstrelaUni src={estrela}/>
          </EstrelasDiv>

          <ProdutoImg src={produto3}/>

        </ConteinerImg>
  
     
        <TextoConteiner>
            <ProdutoName>HEADSET GAMER MULTI WARRIOR</ProdutoName>
        </TextoConteiner>

        <TextoConteiner>
            <Produtolocalizacao src= {lugar}/>
            <Produtolugar>São Paulo</Produtolugar>
        </TextoConteiner>

        <TextoConteiner>
            <ProdutoPreço>R$ 83.99</ProdutoPreço>
        </TextoConteiner>
        

      </ConteinerProduto>
  
    );
  }
  export function ProdutoMiniSEMI() {
    return (
      <ConteinerProduto>
        
          <ConteinerImg>
            <LikeDiv>
              <Likeimg src={curte}/>
            </LikeDiv>
          
          <EstrelasDiv>
              <EstrelaUni src={estrela}/>
              <EstrelaUni src={estrela}/>
              <EstrelaUni src={estrela}/>
              <EstrelaUni src={estrela}/>
              <EstrelaUni src={estrela}/>
          </EstrelasDiv>

          <ProdutoImg src={produto4}/>

        </ConteinerImg>
  
     
        <TextoConteiner>
            <ProdutoName>FONE DE OUVIDO MULTI HEADPHONE PH053</ProdutoName>
        </TextoConteiner>

        <TextoConteiner>
            <Produtolocalizacao src= {lugar}/>
            <Produtolugar>ACRE</Produtolugar>
        </TextoConteiner>

        <TextoConteiner>
            <ProdutoPreço>R$ 31.98</ProdutoPreço>
        </TextoConteiner>
        

      </ConteinerProduto>
  
    );
  }