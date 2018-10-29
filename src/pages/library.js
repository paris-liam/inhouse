import React from 'react'
import { graphql } from 'gatsby'
import Lib from '../components/Lib';
import Layout from '../components/layout'
import  styled from 'styled-components';
const LIBTABLE = styled.div`
  font-family:sans-serif;
  font-weight:normal !important;
  display:grid;
  grid-template-columns:auto;
  & > div{
    border-top:1px solid #FFCCCC;
    width:auto;
    padding:0;
  }
  & > div > div.title{
    font-weight:bold;
  }
  & > div.no-border > div{
    border-top:none !important;
    font-weight:bold;
  }
`
const HEADDIV = styled.div``
class Library extends React.Component{
  render(){
  let LibArray =['x','x','x','x','x','x','x','x','x','x'];
  let itemNum = LibArray.length+1;
  return(
    <Layout>
      <LIBTABLE>
      <div className='no-border'>
        <div></div>
        <div>INHOUSE</div>
      </div>
      <div style={{display:'flex'}}>
        <div>  </div>
        <div className='title'>TITLE</div>
        <div>PAGES</div>
        <div>SIZE (in cm.)	</div>
        <div>IN COLLABORATION WITH	</div>
        <div>YEAR</div>
      </div>
      {LibArray.map((item)=>{
        itemNum = itemNum-1;
        return(<Lib num={itemNum} item={item}></Lib>)
      })}
      </LIBTABLE>
    </Layout>)
  }
}

export default Library

export const pageQuery = graphql`
  query LibQuery{allPrismicLibraryItem{edges{node{
    data{
      lib_image{localFile{childImageSharp{original{src}}}}
      lib_title{text}
    }}}}}
`