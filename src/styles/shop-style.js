import styled from 'styled-components';
export const ShopGrid = styled.div`
    display:grid;
    background-repeat: repeat;
    background-size: 100px 100px;
    grid-template-columns: 1fr 5fr;
    grid-template-rows:80%;
    height:100vh;
    padding:5vh 1vw;
    grid-column-gap: 1vh;
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

`;
export const ShopItemGrid = styled.div`
    display:grid;
    background-color:transparent;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap:1vh;
    div{
        background-color:white;
    }
    overflow-x:scroll;
`
export const ShopLogo = styled.div``;