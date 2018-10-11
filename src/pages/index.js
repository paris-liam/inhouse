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
    font: Math.floor(Math.random() * fontArray.length),
    Logo: Math.floor(Math.random() * 4),
    LogoArray:[InHouseMain,InHouseMain2,InHouseMain3,InHouseMain4],
  }
  this.clockSetup  = this.clockSetup.bind(this);
  this.fontLogoInterval = this.fontLogoInterval.bind(this);
}

componentDidMount(){
  //set interval on changing font and logo every 30 seconds
  this.changing = setInterval(this.fontLogoInterval, 30000);
  this.time = setInterval(this.clockSetup,1);
}
componentWillUnmount(){
  clearInterval(this.changing);
  clearInterval(this.time);
}

clockSetup(){
 let clock = new Date();
 const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
 const month = ['September','October','November','December','January','February','March','April','May','June','July','August'];
 let M = 'AM'
 let hour = clock.getHours();
 if(hour > 12){
   hour = hour % 12;
   M = 'PM';
 }
 let date = clock.getDate();
 let j = date % 10;
 let k = date % 100;
 if (j === 1 && k !== 11) {
  date = date + "st";
 }
 else if (j === 2 && k !== 12) {
  date = date + "nd";
 }
 else if (j === 3 && k !== 13) {
  date = date + "rd";
 }
 else{
  date = date + "th";
 }
 let milli = clock.getMilliseconds();
 if(milli < 10 ){
   milli = `00${milli}`;
 }
 else if(milli < 100){
   milli = `0${milli}`;
 }
 this.setState({
   DateAndTime: `${hour}:${clock.getMinutes()}:${clock.getSeconds()}:${milli} ${M} ${weekday[clock.getDay()]} ${month[clock.getMonth()]} ${date} ${clock.getFullYear()}`,
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
      <Link to='/shop'><h1>Shop</h1></Link>
      <Link to='/library'><h1>Library</h1></Link>
      <Link to='/contact'><h1>Contact</h1></Link>
      </ChangingFont>
    </IndexGrid>
  </Layout>
)}
}
export default IndexPage
