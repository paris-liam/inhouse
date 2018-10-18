import styled from 'styled-components';
export const ShopGrid = styled.div`
    display:grid;
    background-repeat: repeat;
    background-size: 100px 100px;
    grid-template-columns: 1fr 5fr;
    grid-template-rows:90%;
    height:100vh;
    padding:5vh 1vw;
    grid-column-gap: 1vh;
    @media only screen and (max-width:1000px) {
        grid-template-columns:auto;
        grid-template-rows: 25% auto;
        padding:2vh 1vw;
    }
`;
export const ShopNav = styled.div`
margin: 5vh 0;
display:grid;
grid-template-columns:auto;
grid-template-rows: repeat(5,1fr);
background-color:white;
& > div{
    display:grid;
    align-items: center;
    justify-items:left;
    margin-left:5px;
}
@media only screen and (max-width:1000px) {
        grid-template-columns:repeat(5,1fr);
        grid-template-rows: auto;
        & > a {
            display:grid;
        }
        & > a > div{
            align-self: center;
            justify-self:center;
        }
        & > a > div > img{
            width:40%;
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

`;
export const ShopItemGrid = styled.div`
    display:grid;
    background-color:transparent;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap:2vw;
    div{
        background-color:white;
    }
    overflow-y:scroll;
    overflow-x:none;
    @media only screen and (max-width:800px) {
        grid-template-columns:auto;
        padding: 0 10vw;
    }
`
export const ShopLogo = styled.div``;