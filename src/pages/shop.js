import React from 'react'
import { Link,graphql } from 'gatsby'
import {ShopGrid, ShopNav, ShopButton, ShopLogo, ShopItemGrid} from '../styles/shop-style';
import Layout from '../components/layout'
import ShopTile from '../components/ShopTile';
import shopLogo from '../images/shop-logo.jpg'
import {testShirt, testZine, testTape} from '../styles/testDAta';
import gif1 from '../images/gif1.gif'
import gif2 from '../images/gif2.gif'
import gif3 from '../images/gif3.gif'
import gif4 from '../images/gif4.gif'
import gif5 from '../images/gif5.gif'
class Shop extends React.Component{
  constructor(props){
    super(props);
    this.state={
      zine:false,
      tape:false,
      shirt:false,
      gifArray:[gif1,gif2,gif3,gif4,gif5],
      gif: 0,
      zineArray:[testZine,testZine,testZine,testZine,testZine,testZine,testZine,testZine,testZine,],
      shirtArray:[testShirt,testShirt,testShirt,testShirt,testShirt,testShirt,testShirt,testShirt],
      tapeArray:[testTape,testTape,testTape,testTape,testTape,testTape,testTape,],
    }
    this.toggleType = this.toggleType.bind(this);
    this.formatProduct = this.formatProduct.bind(this);
  }
  componentDidMount(){
    this.toggleType('all');
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
    console.log(gif);
    this.setState({
      shirt,
      zine,
      tape,
      gif
    })
  }
  formatProduct(type){

  }
  render(){
    return(  <Layout>
      <ShopGrid style={{ backgroundImage: `url(${this.state.gifArray[this.state.gif]})` }}>
        <ShopNav>
          <div><ShopButton onClick={()=>this.toggleType('shirt')}>T-SHIRTS</ShopButton></div>
          <div><ShopButton onClick={()=>this.toggleType('zine')}>ZINES</ShopButton></div>
          <div><ShopButton onClick={()=>this.toggleType('tape')}>TAPES</ShopButton></div>
          <div><ShopButton onClick={()=>this.toggleType('all')}>ALL</ShopButton></div>
          <Link to='/'><ShopLogo><img src={shopLogo}></img></ShopLogo></Link>
        </ShopNav><ShopItemGrid>
        {this.state.shirt &&
          this.state.shirtArray.map((product)=>{return<div>X</div>})}
        {this.state.zine &&
          this.state.zineArray.map((product)=>{return<div>Y</div>})}
        {this.state.tape &&
          this.state.tapeArray.map((product)=>{return<div>Z</div>})}
        {/*
        data.data.allPrismicProduct.edges.map((node)=>{
          let info = node.node.data;
          return <ShopTile key={info.prod_title.text} title={info.prod_title.text}
          images={[info.prod_image1.localFile.childImageSharp.original.src,info.prod_image2.localFile.childImageSharp.original.src]}
          sizes={[info.prod_small,
            info.prod_medium,
            info.prod_large,
            info.prod_xl]}/>
        })
      */}
      </ShopItemGrid>
      </ShopGrid>
    </Layout>)
  }
}

export default Shop

export const pageQuery = graphql`
  query ShopQuery{
  allPrismicProduct{edges{node{
    data{
      prod_title{text}
      prod_image1{localFile{childImageSharp{original{src}}}}
      prod_image2{localFile{childImageSharp{original{src}}}}
      prod_button{html}
      prod_small
      prod_medium
      prod_large
      prod_xl
    }}}}

}`