import React from 'react'
import { graphql } from 'gatsby'
import Lib from '../components/Lib';
import Layout from '../components/layout'
import  styled from 'styled-components';
const LIBTABLE = styled.table`
  font-family:sans-serif;
  font-weight:normal !important;

  & > tr > td{
    border-top:1px solid #FFCCCC;
    width:auto;
    padding:0;
  }
  & > tr > td.title{
    font-weight:bold;
  }
  & > tr.no-border > td{
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
      <tr className='no-border'>
        <td></td>
        <td>INHOUSE</td>
      </tr>
      <tr>
        <td>  </td>
        <td className='title'>TITLE</td>
        <td>PAGES</td>
        <td>SIZE (in cm.)	</td>
        <td>IN COLLABORATION WITH	</td>
        <td>YEAR</td>
      </tr>
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