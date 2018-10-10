import styled from 'styled-components';

export const fontArray = ['VT323','Krona One','Hammersmith One','Ewert','UnifrakturMaguntia','Fredoka One']
export const IndexGrid = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas: 'refresh . . clock' 'logo logo logo logo' '. links links .'
`;
export const DateAndTime = styled.div`
    grid-area:clock;
    text-align:right;
    font-family:'Courier New', Courier, monospace;
    margin-right:1vw;
`;
export const LogoContainer = styled.div`
    grid-area:logo;
    img{
        width:100%;
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
    h1{
        text-align:center;
        font-size: 3em;
        font-family:inherit;
        & > a{
            text-decoration:none;
            color:black;
        }
    }
`;