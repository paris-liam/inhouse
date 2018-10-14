import styled from 'styled-components';

export const fontArray = ['Stoke','Almendra','Archivo Black','Michroma',
'Fredoka One','Press Start 2P','Freckle Face','UnifrakturMaguntia',
'Uncial Antiqua','Codystar','Rakkas', 'Pirata One',
'Goblin One','Libre Barcode 39 Extended Text',
'Molle','Source Code Pro','Cousine',]
export const IndexGrid = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas: 'refresh clock clock clock' 'logo logo logo logo' '. links links .';
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
    margin-bottom:1vh;

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
export const Pop = styled.div`
    height:20vh;
    width:10vw;
    font-family:'Oswald';
    position:absolute;
    &#pop1{
        z-index: 100;
        background-color:red;
    }
    &#pop2{
        z-index: 101;
        background-color:blue;
    }
    &#pop3{
        z-index: 103;
        background-color:green;
    }
`