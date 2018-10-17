import React from 'react';
import {Link} from 'gatsby-link';
import styled from 'styled-components';

const Tile = styled.div`
    height:auto;
    font-family:'Courier New',Courier,monospace;
    display:grid;
    padding-bottom:2vh;
    & > div.ImageContainer{
        display:grid;
        align-items:center;
        justify-items:center;

    }
    & > div.ImageContainer > img.secondImage{
        display:none;
    }
    &:hover > div.ImageContainer{
        & > img.firstImage{
            display:none;
        }
        & > img.secondImage{
        display:block;

        }
    }
`
const Name = styled.div`
    display:grid;
    justify-items:center;
    align-items:center;
    & > *{
        display:inline;
    }
    &.soldout > *{
        display:inline;
        background-color:black;
        color:red;
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
            price:this.props.info.price,
            images:this.props.info.images
        }
        console.log(this.props);
        console.log(this.state)
    }

    render(){
        return(
            <Tile>
                <div className='ImageContainer' id={`imageContainer${this.state.title}`}>
                    <img className='firstImage' src={this.state.images[0]}></img>
                    {this.state.images.length > 1 && <img  className='secondImage' src={this.state.images[1]}></img>}
                </div>
                {this.state.instock ? (<Name><p>{this.state.title}</p>
                <p>${this.state.price}.00</p></Name>):(<Name className='soldout'><p style={{textDecoration:'line-through'}}>{this.state.title}</p>
                <p>SOLDOUT</p></Name>)
                }
            </Tile>
        )}
}

export default ShopTile;