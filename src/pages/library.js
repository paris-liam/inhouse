import React from 'react'
//import { Link } from 'gatsby'
import Lib from '../components/Lib';
import Layout from '../components/layout'

class Library extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data:''
    }
  }
  render(){return(  <Layout>
    <h1>Library</h1>
    <div style={{display:'grid'}}>
    {/*this.props.data.allPrismicLibraryItems.edges.map((node)=>{
      return(<Lib>x</Lib>)
    })*/}
    </div>
  </Layout>)}
}

export default Library

export const pageQuery = graphql`
  query LibQuery {
    allPrismicLibraryItem{
    edges{
      node{
        id
      }
    }
  }

}`