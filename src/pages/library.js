import React from 'react'
import { graphql } from 'gatsby'
import Lib from '../components/Lib';
import Layout from '../components/layout'
import  styled from 'styled-components';
import { Link } from 'gatsby';

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
    & > div > #titleLink:hover{
      color:rgb(255, 204, 204);
    }
  }
`

class Library extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      LibArray:[],
      itemNum:0
    }
  }
  componentDidMount(){
    let LibArray = [];
    this.props.data.allPrismicLibraryItem.edges.map((node)=>{
      let data = node.node.data;
      console.log(data);
      if(data.hasOwnProperty('title')&&data.hasOwnProperty('artists')&&data.hasOwnProperty('year')&&data.hasOwnProperty('pages')&&data.hasOwnProperty('size')&&data.hasOwnProperty('imagegallery')&&data.hasOwnProperty('description')){
      let libItem = {
        title: data.title.text,
        artist: data.artists.text,
        year:data.year.text,
        pages:data.pages.text,
        size:data.size.text,
        description:data.description.text,
        images:[]
      }
      data.imagegallery.map((image)=>{
        libItem.images.push(image.galleryimage.url);
      })
      LibArray.push(libItem);
    }
    })
    this.setState({
      itemNum:this.state.LibArray.length+1,
      LibArray,
    });  
    console.log(this.state);
    
  }
  render(){
  return(
    <Layout>
      <LIBTABLE>
        <HeaderRow className='title'>
          <div className='spaceHolder'></div>
          <div><Link id='titleLink' style={{color:'inherit',textDecoration:'none'}} to='/'>INHOUSE</Link></div>
        </HeaderRow>
        <HeaderRow>
          <div className='spaceHolder'></div>
          <div>TITLE</div>
          <div>Artist(s)</div>
          <div>Pages</div>
          <div>SIZE (in cm.)	</div>
          <div>YEAR</div>
        </HeaderRow>
        {this.state.LibArray.map((item)=>{
          console.log('ITEMS',item);
          let Num = this.state.itemNum-1;
          if(Num < 10){
            Num = `00${Num}`
          }
          else if(Num < 100){
            Num = `0${Num}`
          }
          return(<Lib  key={item.title} num={Num} item={item}></Lib>)
        })}
      </LIBTABLE>
    </Layout>)
  }
}

export default Library;

export const pageQuery = graphql`
  query LibQuery{
    allPrismicLibraryItem{
      edges{
        node {
          data{
            imagegallery{galleryimage {
              alt
              copyright
              url
            }}
            title{text}
            artists{text}
            size{text}
            pages{text}
            year{text}
            description{text}
          }
        }
      }
    }
  }
`