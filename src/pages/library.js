import React from 'react'
import { graphql } from 'gatsby'
import Lib from '../components/Lib';
import Layout from '../components/layout'
import  styled from 'styled-components';
import test from '../images/test.png';

const LIBTABLE = styled.div`
  display:grid;
  grid-template-columns:auto;
  font-family:sans-serif;
  font-size:.75rem;
  & > div{
    display:grid;
    grid-template-rows:auto;
    grid-template-columns: 5% 1fr 1fr 1fr 1fr 1fr;
    border-bottom: 1px solid rgb(255, 204, 204);
  }
`
const HeaderRow = styled.div`
  text-transform:uppercase;
  font-weight:bold;
  padding: .5vh 0;
  &.title{
    padding: 2vh 0;
  }
`

class Library extends React.Component{
  render(){
  let LibArray =[{title:'title',artist:'artist',pages:'pages',size:'SIZE',year:'year',images:[test],description:'ok ok ok well here is the description'},
                 {title:'title',artist:'artist',pages:'pages',size:'SIZE',year:'year',images:[test],description:'ok ok ok well here is the description'},
                 {title:'title',artist:'artist',pages:'pages',size:'SIZE',year:'year',images:[test],description:'ok ok ok well here is the description'},
                 {title:'title',artist:'artist',pages:'pages',size:'SIZE',year:'year',images:[test],description:'ok ok ok well here is the description'},
                 {title:'title',artist:'artist',pages:'pages',size:'SIZE',year:'year',images:[test],description:'ok ok ok well here is the description'},
                 {title:'title',artist:'artist',pages:'pages',size:'SIZE',year:'year',images:[test],description:'ok ok ok well here is the description'},
                 {title:'title',artist:'artist',pages:'pages',size:'SIZE',year:'year',images:[test],description:'ok ok ok well here is the description'},
                 {title:'title',artist:'artist',pages:'pages',size:'SIZE',year:'year',images:[test],description:'ok ok ok well here is the description'},
                 {title:'title',artist:'artist',pages:'pages',size:'SIZE',year:'year',images:[test],description:'ok ok ok well here is the description'},
                 {title:'title',artist:'artist',pages:'pages',size:'SIZE',year:'year',images:[test],description:'ok ok ok well here is the description'}];
  let itemNum = LibArray.length+1;
  return(
    <Layout>
      <LIBTABLE>
        <HeaderRow className='title'>
          <div className='spaceHolder'></div>
          <div>INHOUSE</div>
        </HeaderRow>
        <HeaderRow>
          <div className='spaceHolder'></div>
          <div>TITLE</div>
          <div>Artist(s)</div>
          <div>Pages</div>
          <div>SIZE (in cm.)	</div>
          <div>YEAR</div>
        </HeaderRow>
        {LibArray.map((item)=>{
          itemNum = itemNum-1;
          if(itemNum < 10){
            itemNum = `00${itemNum}`
          }
          else if(itemNum < 100){
            itemNum = `0${itemNum}`
          }
          return(<Lib  key={item.title} num={itemNum} item={item}></Lib>)
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