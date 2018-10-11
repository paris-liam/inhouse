import styled from 'styled-components';

export const fontArray = [
    'STOKE',
    'ALMENDRA',
    'ARCHIVO BLACK',
    'MICHROMA',
    'FREDOKA',
    'PRESS START',
    'FRECKLE FACE',
    'UnifrakturMaguntia',
    'UNCIAL ANTIQUA',
    'CODYSTAR',
    'RAKKAS',
    'PIRATA ONE',
    'GOBLIN ONE',
    'Libre Barcode 39 Extended Text',
    'Molle',
    'SOURCE CODE PRO',
    'Cousine',]
export const IndexGrid = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas: 'refresh clock clock clock' 'logo logo logo logo' '. links links .';
`;
export const DateAndTime = styled.div`
    grid-area:clock;
    text-align:right;
    font-family:'Courier New', Courier, monospace;
    margin-right:2vw;
    font-size:.75em;
`;
export const LogoContainer = styled.div`
    grid-area:logo;
    justify-items:center;
    align-items:center;
    img{
        width:60%;
        margin:auto auto;
        display:block;
        @media screen and (max-width:900px){
            width:80%;
        }
    }

`;
export const Refresh = styled.div`
    grid-area:refresh;
    button{
        outline:none;
        border:none;
        color:black;
    }
    margin-left:1vw;
`;
export const ChangingFont = styled.div`
    grid-area:links;
    a{
        text-decoration:none;
        color:black;
        h1{
            text-transform:uppercase;
            text-align: center;
            font-size:2.25em;
            font-family:inherit;
            &:hover{
                font-family:'Oswald';
            }
        }
    }
`;