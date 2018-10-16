import React from 'react'
import { Link,graphql } from 'gatsby'
import {ShopGrid, ShopNav, ShopButton, ShopLogo} from '../styles/shop-style';
import Layout from '../components/layout'
import ShopTile from '../components/ShopTile';
import shopLogo from '../images/shop-logo.jpg'
const Shop = (data) => (
  <Layout>
    <ShopGrid>
      <ShopNav>
        <div><ShopButton>T-SHIRTS</ShopButton></div>
        <div><ShopButton>ZINES</ShopButton></div>
        <div><ShopButton>TAPES</ShopButton></div>
        <div><ShopButton>ALL</ShopButton></div>
        <Link to='/'><ShopLogo><img src={shopLogo}></img></ShopLogo></Link>
      </ShopNav>

      {/*
              {this.state.shirt &&}
      {this.state.zine &&}
      {this.state.tapes &&}
      {this.state.all &&}


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
    </ShopGrid>
  </Layout>
)

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