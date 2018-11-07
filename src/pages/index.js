import React from 'react'
import { Link } from 'gatsby'
import Pop from '../components/Pop.js'
import {IndexGrid, fontArray, LogoContainer,Refresh, ChangingFont} from '../styles/style.js';
import Layout from '../components/layout'
import DateAndTime from '../components/DateAndTime';
import Grit from '../images/grit.jpeg';
import { graphql } from 'gatsby'


class IndexPage extends React.Component{
constructor(props){
  super(props);
  this.state = {
    DateAndTime: 0,
    LogoArray:this.landingLogoData(this.props.data.allPrismicLandinglogo.edges),
    font: Math.floor(Math.random() * fontArray.length),
    Logo: 0,
    popArray: [],
    timeoutArray: [],
    popupData:this.popupData(this.props.data.allPrismicPopups.edges),
  }
  this.fontLogoInterval = this.fontLogoInterval.bind(this);
  this.popShow = this.popShow.bind(this);
  this.popX = this.popX.bind(this);
  this.popY = this.popY.bind(this);
  this.removeAllPop = this.removeAllPop.bind(this);
  this.popupData = this.popupData.bind(this);
  this.landingLogoData = this.landingLogoData.bind(this);
  this.refreshButton = this.refreshButton.bind(this);

}
componentDidMount(){
  /*this.changing = setInterval(this.fontLogoInterval, 5000);
  for(let i = 0; i < this.state.popupData.length; i++){//inputPop.length; i++){
    this.popShow(this.state.popupData[i],i,(i+1)*1000)
  }*/
}
componentWillUnmount(){
  clearInterval(this.changing);
  this.state.timeoutArray.forEach((timeout)=>{
    clearInterval(timeout);
  })
}
popShow(pop,z,time){
  let timeout = setTimeout(() => {
    let popArray = this.state.popArray;
    popArray.push({x:this.popX(90),y:this.popY(50),z:(z+100),name:pop.name,image:pop.image, height:pop.height,width:pop.width})
    this.setState({popArray});
  }, time);
  let timeoutArray = this.state.timeoutArray;
  timeoutArray.push(timeout);
  this.setState({
    timeoutArray
  });
}
popX(value){
  let x = Math.random() * value;
  return `${x}%`;
}
popY(value){
  let y = Math.random() * value;
  return `${y}%`;
}
removeAllPop(){
  var popups = document.getElementsByClassName('popup')
  for (var i = 0; i < popups.length; i++){
      popups[i].style.display = 'none';
  }
}
popupData(edges){
  let popupData = [];
  for(let i = 0; i < edges.length; i++ ){
    let data = edges[i].node.data
    if(data.popup_title.text !== null && data.popup_image.localFile !== null){
      popupData.push({
        name:data.popup_title.text,
        image:data.popup_image.localFile.childImageSharp.original.src,
        height:data.popup_image.localFile.childImageSharp.original.height,
        width:data.popup_image.localFile.childImageSharp.original.width,
      })
    }
  }
  return popupData;
}
landingLogoData(edges){
  let landingLogoData = [];
  for(let i = 0; i < edges.length; i++ ){
    let data = edges[i].node.data
    if(data.landing_logo_image !== null){
      landingLogoData.push(data.landing_logo_image.localFile.childImageSharp.original.src)
    }
  }
  return landingLogoData;
}
refreshButton(){
this.fontLogoInterval();
clearInterval(this.changing);
this.changing = setInterval(this.fontLogoInterval, 5000);
}
fontLogoInterval(){
  const oldfont = this.state.font;
  const oldLogo = this.state.Logo;
  let newfont  = Math.floor(Math.random() * fontArray.length);
  let newLogo = Math.floor(Math.random() * this.state.LogoArray.length);
  while(newfont === oldfont){
     newfont  = Math.floor(Math.random() * fontArray.length);
  }
  while(newLogo === oldLogo){
    newLogo = Math.floor(Math.random() *  this.state.LogoArray.length);
 }
  this.setState({
    font: newfont,
    Logo: newLogo,
  })
}

render(){
  return(
  <Layout>
    <IndexGrid >
      <DateAndTime/>
      <Refresh><button onClick={this.refreshButton}><i className='fa fa-redo' ></i></button><button className='popBut' onClick={this.removeAllPop}><i className='fa fa-times' ></i></button></Refresh>
      <LogoContainer onClick={this.refreshButton}><img src={this.state.LogoArray[this.state.Logo]} alt='inhouse-logo'></img></LogoContainer>
      <ChangingFont style={{fontFamily:fontArray[this.state.font]}}>
        <Link to='/shop'><h1>Shop</h1></Link>
        <Link to='/library'><h1>Library</h1></Link>
        <Link to='/contact'><h1>Contact</h1></Link>
      </ChangingFont>
    </IndexGrid>
    {this.state.popArray.map((pop)=>{
        return(<Pop key={pop.z} pop={pop} />)
    })}
    </Layout>
)}
};
export default IndexPage

export const pageQuery = graphql`
  query IndexQuery{
    allPrismicPopups{
      edges{
        node{
          id
          data{
            popup_title{
              text
            }
            popup_image{
              localFile{
                childImageSharp{
                  original{
                    src
                    height
                    width
                  }
                }
              }
            }
          }
        }
      }
    }
    allPrismicLandinglogo{
      edges{
        node{
          id
          data{
            landing_logo_image{
              localFile{
                childImageSharp{
                  original{
                    src
                  }
                }
              }
            }
          }
        }
      }
   }
  }`
