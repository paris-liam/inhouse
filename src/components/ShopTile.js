import React from 'react';
import {Link} from 'gatsby-link';
import styled from 'styled-components';

const Tile = styled.div`
    height:auto;
    padding-top:2vh;
    font-family:'Courier New',Courier,monospace;
    display:grid;
    & > a > div.ImageContainer{
        display:grid;
        align-items:center;
        justify-items:center;
        img{
            width:60%;
        }

    }
    & > a > div.ImageContainer > img.secondImage{
        display:none;
    }
    & > div.ImageContainer{
        display:grid;
        align-items:center;
        justify-items:center;

    }
    & >  div.ImageContainer > img.secondImage{
        display:none;
    }
    & > a{
        text-decoration:none;
    }
    & > a.soldoutLink{
        pointer-events: none;
    }
    &:hover > a > div.ImageContainer{
        & > img.firstImage{
            display:none;
        }
        & > img.secondImage{
        display:block;

        }
    }
    &:hover > div.ImageContainer{
        & > img.firstImage{
            display:none;
        }
        & > img.secondImage{
        display:block;

        }
    }
    .soldout > *{
        cursor:not-allowed;
    }

`
const Name = styled.div`
    display:grid;
    justify-items:center;
    align-items:center;
    @media only screen and (max-width:900px) {
    font-size:2em;
    }
    &.soldout > p{
        background-color:black;
        color:red;
        cursor:not-allowed;

    }
    color:black;
    background-color:white;
`
class ShopTile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:this.props.info.title,
            instock:this.props.info.instock === "yes" ? (true):(false),
            link: '',
            price:this.props.info.price,
            images:this.props.info.images,
            LinkClass: '',
        }

    }
    componentDidMount(){
        this.state.instock ?( this.setState({
            link:`/shop/${this.state.title}`
        })):(this.setState({
            LinkClass:'soldoutLink',
        }))
    }

    render(){
        return(
            <Tile><a className={this.state.LinkClass} href={this.state.link}>
                <div className='ImageContainer' id={`imageContainer${this.state.title}`}>
                    <img className='firstImage' src={this.state.images[0]}></img>
                    {this.state.images.length > 1 && <img  className='secondImage' src={this.state.images[1]}></img>}
                </div>
                {this.state.instock ? (<Name><p>{this.state.title}</p>
                <p>${this.state.price}.00</p></Name>):(<Name className='soldout'><p style={{textDecoration:'line-through'}}>{this.state.title}</p>
                <p>SOLDOUT</p></Name>)
                }
           </a></Tile>
        )}
}

export default ShopTile;