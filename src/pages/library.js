import React from 'react'
import { graphql } from 'gatsby'
import Lib from '../components/Lib';
import Layout from '../components/layout'
class Library extends React.Component{
  render(){return(  <Layout>
    <h1>Library</h1>
    <div style={{display:'grid'}}>
    {this.props.data.allPrismicLibraryItem.edges.map((node)=>{
      return <Lib title={node.node.data.lib_title.text} image={node.node.data.lib_image.localFile.childImageSharp.original.src} />
    })}
    </div>
  </Layout>)}
}

export default Library

export const pageQuery = graphql`
  query LibQuery{allPrismicLibraryItem{edges{node{
    data{
      lib_image{localFile{childImageSharp{original{src}}}}
      lib_title{text}
    }}}}}
`