import React from 'react'
import { Link,graphql } from 'gatsby'
import {ShopGrid, ShopNav, ShopButton, ShopLogo, ShopItemGrid} from '../styles/shop-style';
import Layout from '../components/layout';
import ShopTile from '../components/ShopTile';
import shopLogo from '../images/shop-logo.jpg';
import gif1 from '../images/gifs/gif1.gif';
import gif2 from '../images/gifs/gif2.gif';
import gif3 from '../images/gifs/gif3.gif';
import gif4 from '../images/gifs/gif4.gif';
import gif5 from '../images/gifs/gif5.gif';

class Shop extends React.Component{
  constructor(props){
    super(props);
    this.state={
      zine:true,
      tape:true,
      shirt:true,
      gifArray:[gif1,gif2,gif3,gif4,gif5],
      gif: 0,
      zineArray:this.formatProduct('zine'),
      shirtArray:this.formatProduct("shirt"),
      tapeArray:this.formatProduct('tape'),
    }
    this.toggleType = this.toggleType.bind(this);
    this.formatProduct = this.formatProduct.bind(this);
  }
  componentDidMount(){
    console.log(this.state)
  }
  toggleType(type){
    let zine = false;
    let tape = false;
    let shirt = false;
    let gif = Math.floor(Math.random() * this.state.gifArray.length);
    let lastGif = this.state.gif;
    type === 'shirt' ? (shirt = true):(shirt = false);
    type === 'zine' ? (zine = true):(zine = false);
    type === 'tape' ? (tape = true):(tape = false);
    if(type === 'all'){
      shirt = true;
      zine = true;
      tape = true;
    }
    while(gif === lastGif){
      gif = Math.floor(Math.random() * this.state.gifArray.length);
    }
    this.setState({
      shirt,
      zine,
      tape,
      gif
    })
  }
  formatProduct(type){
    let productArray = [];
    this.props.data.allPrismicProduct.edges.forEach((node)=>{
      let product = node.node.data;

      if(product.type === type){
        console.log('in here')
        for(let i = 0; i < 15; i++){
          productArray.push({
            instock: product.instock,
            title: product.prod_title.text,
            price: product.price,
            images: [product.prod_image1.localFile.childImageSharp.original.src,product.prod_image2.localFile.childImageSharp.original.src]
          })
        }
      }
    })
    console.log(productArray);
    return productArray;
  }
  render(){
   //backgroundImage: `url(${this.state.gifArray[this.state.gif]})` }}>
    console.log(this.state);
    return(  <Layout>
      <ShopGrid style={{ backgroundColor:black }}>
        <ShopNav>
          <div><ShopButton onClick={()=>this.toggleType('shirt')}>T-SHIRTS</ShopButton></div>
          <div><ShopButton onClick={()=>this.toggleType('zine')}>&nbsp;ZINES&nbsp;&nbsp;</ShopButton></div>
          <div><ShopButton onClick={()=>this.toggleType('tape')}>&nbsp;TAPES&nbsp;&nbsp;</ShopButton></div>
          <div><ShopButton onClick={()=>this.toggleType('all')}>&nbsp;&nbsp;ALL&nbsp;&nbsp;&nbsp;</ShopButton></div>
          <ShopLogo><Link to='/'><img src={shopLogo}></img></Link></ShopLogo>
        </ShopNav>
        <ShopItemGrid>
          {this.state.shirt &&
            this.state.shirtArray.map((product)=>{return<ShopTile key={product.title} info={product}></ShopTile>})}
          {this.state.zine &&
            this.state.zineArray.map((product)=>{return<ShopTile key={product.title} info={product}></ShopTile>})}
          {this.state.tape &&
            this.state.tapeArray.map((product)=>{return<ShopTile key={product.title} info={product}></ShopTile>})}
        </ShopItemGrid>
      </ShopGrid>
    </Layout>)
  }
}

export default Shop

export const pageQuery = graphql`
  query ShopQuery{
  allPrismicProduct {
    edges {
      node {
        data {
          prod_title {
            text
          }
          prod_image1 {
            localFile {
              childImageSharp {
                original {
                  src
                }
              }
            }
          }
          prod_image2 {
            localFile {
              childImageSharp {
                original {
                  src
                }
              }
            }
          }
          type
          instock
          price
        }
      }
    }
  }
}`
