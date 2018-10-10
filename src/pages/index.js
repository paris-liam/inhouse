import React from 'react'
import { Link } from 'gatsby'
import {IndexGrid, DateAndTime, fontArray, LogoContainer,Refresh, ChangingFont} from '../styles/style.js';
import Layout from '../components/layout'
import InHouseMain from '../images/InHouseMain.png'
import InHouseMain2 from '../images/InHouseMain2.png'
import InHouseMain3 from '../images/InHouseMain3.png'
import InHouseMain4 from '../images/InHouseMain4.png'
class IndexPage extends React.Component{
constructor(props){
  super(props);
  this.state = {
    DateAndTime: 0,
    font: Math.floor(Math.random() * 6),
    Logo: Math.floor(Math.random() * 4),
    LogoArray:[InHouseMain,InHouseMain2,InHouseMain3,InHouseMain4],
  }
  this.clockSetup  = this.clockSetup.bind(this);
  this.fontLogoInterval = this.fontLogoInterval.bind(this);
}

componentWillMount(){
  //set interval on clock every millisecond
  //set interval on changing font and logo every 30 seconds
  this.changing = setInterval(this.fontLogoInterval, 5000);
  this.time = setInterval(this.clockSetup,1);
}
componentWillUnmount(){
  clearInterval(this.changing);
  clearInterval(this.time);
}

clockSetup(){
 // hour:minute:second:milisecond AM  Wednesday Octover 10th 2018
 let date = new Date().toLocaleString();
 console.log(date);
 this.setState({
   DateAndTime: date,
 });
}

fontLogoInterval(){
  const oldfont = this.state.font;
  const oldLogo = this.state.Logo;
  let newfont  = Math.floor(Math.random() * 6);
  let newLogo = Math.floor(Math.random() * 4);
  while(newfont === oldfont){
     newfont  = Math.floor(Math.random() * 6);
  }
  while(newLogo === oldLogo){
    newLogo = Math.floor(Math.random() * 4);
 }
  this.setState({
    font: newfont,
    Logo: newLogo,
  })
}

render(){return(
  <Layout>
    <IndexGrid >
      <DateAndTime>{this.state.DateAndTime}</DateAndTime>
      <Refresh><button onClick={this.fontLogoInterval}><i className='fa fa-redo' ></i></button></Refresh>
      <LogoContainer><img src={this.state.LogoArray[this.state.Logo]}></img></LogoContainer>
      <ChangingFont style={{fontFamily:fontArray[this.state.font]}}>
        <h1><Link to='/shop'>Shop</Link></h1>
        <h1><Link to='/library'>Library</Link></h1>
        <h1><Link to='/contact'>Contact</Link></h1>
      </ChangingFont>
    </IndexGrid>
  </Layout>
)}
}
export default IndexPage
