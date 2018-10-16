import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Shop = (data) => (
  <Layout>
    <h1>Shop</h1>
    <Link to="/">Go back to the homepage</Link>
    <h2>ok</h2>
    {console.log(data)}
  </Layout>
)

export default Shop

export const pageQuery = graphql`
  query ShopQuery {
    allPrismicProduct{
    edges{
      node{
        id
      }
    }
  }
}`