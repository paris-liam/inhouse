import styled from 'styled-components';
import Gif from '../images/shop-gif.gif'
export const ShopGrid = styled.div`
    display:grid;
    background-image: url(${Gif}) ;
    background-repeat: repeat;
    grid-template-columns: 1fr 5fr;
    grid-template-rows:80%;
    height:100vh;
    padding:5vh 1vw;
`;
export const ShopNav = styled.div`

display:grid;
grid-template-columns:auto;
grid-template-rows: repeat(1fr,4) min-content;
background-color:white;
& > div{
    display:grid;
    align-items: center;
    justify-items:left;
}
`
export const ShopButton = styled.button`
    color:white;
    background-color:black;
    font-size:2em;
    padding: 5px;
    &:hover{
        color:black;
        background-color:white;
        border:black 1px solid;

    }

`;
export const ShopLogo = styled.div``;