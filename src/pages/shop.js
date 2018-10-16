import React from 'react'
import { Link,graphql } from 'gatsby'
import Layout from '../components/layout'
import ShopTile from '../components/ShopTile';
const Shop = (data) => (
  <Layout>
    <h1>Shop</h1>
    <Link to="/">Go back to the homepage</Link>
    <h2>ok</h2>

      {data.data.allPrismicProduct.edges.map((node)=>{
        let info = node.node.data;
        return <ShopTile key={info.prod_title.text} title={info.prod_title.text}
        images={[info.prod_image1.localFile.childImageSharp.original.src,info.prod_image2.localFile.childImageSharp.original.src]}
        sizes={[info.prod_small,
          info.prod_medium,
          info.prod_large,
          info.prod_xl]}/>
      })
    }
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