import React from 'react';
import {Link} from 'gatsby-link';
class ShopTile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title: this.props.title,
            link: '/shop/'+this.props.title,
            image1: this.props.images[0],
            image2: this.props.images[1],
        }
        console.log(this.state);
    }
    render(){
        console.log(this.state.link);
        return(
    <a href={this.state.link}><div style={{display:'grid'}}>
        <h1>{this.state.title}</h1>
        <img src={this.state.image1}></img>
        <img src={this.state.image2}></img>
    </div></a>
)}
}

export default ShopTile;