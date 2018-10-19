import styled from 'styled-components';
export const ShopGrid = styled.div`
    display:grid;
    background-repeat: repeat;
    background-size: 100px 100px;
    grid-template-columns: 20% auto;
    grid-template-rows:90%;
    height:100vh;
    padding:5vh 1vw;
    grid-column-gap:2vw;
    @media only screen and (max-width:1000px) {
        grid-template-columns:auto;
        grid-template-rows: 15% 85%;
        padding:2vh 1vw;
    }
    @media only screen and (max-width:500px) {
        grid-template-rows: 10% 85%;
        overflow:none;
    }
`;
export const ShopNav = styled.div`
margin: 0;
height:70%;
display:grid;
grid-template-columns:auto;
grid-template-rows: repeat(5,1fr);
background-color:white;
padding: 2vh 0;
& > div{
    display:grid;
    align-items: center;
    justify-items:center;
}
@media only screen and (max-width:1000px) {
        padding: 0;
        height:auto;
        margin-bottom:1vh;
        grid-template-columns:repeat(5,1fr);
        grid-template-rows: auto;
        & > a {
            display:grid;
        }
        & > a > div{
            align-self: center;
            justify-self:center;
        }

    }

`
export const ShopButton = styled.button`
    font-family:'Courier New', Courier, monospace;
    color:white;
    background-color:black;
    font-size:2em;
    padding: 5px;
    &:hover{
        color:black;
        background-color:white;
        border:black 1px solid;

    }
    @media screen and (max-width:1024px) {
        font-size:1.5em;
    }
    @media screen and (max-width:500px) {
        font-size:1em;
    }

`;
export const ShopItemGrid = styled.div`
    display:grid;
    background-color:transparent;
    grid-template-columns: 33% 33% 33%;
    grid-column-gap:2vw;
    div{
        background-color:white;
    }
    overflow-y:scroll;
    overflow-x:hidden;
    @media only screen and (max-width:800px) {
        grid-template-columns:auto;
        margin:0 5%;
    }
`
export const ShopLogo = styled.div`
    & > a > img{
    width: 50%;
    display: block;
    margin: 0 auto;
    }
`;