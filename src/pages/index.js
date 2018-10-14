import React from 'react'
import { Link } from 'gatsby'
import Draggable from 'react-draggable';

import {IndexGrid, fontArray, LogoContainer,Refresh, ChangingFont,Pop} from '../styles/style.js';
import Layout from '../components/layout'
import DateAndTime from '../components/DateAndTime';

import InHouseMain from '../images/InHouseMain.png'
import InHouseMain2 from '../images/InHouseMain2.png'
import InHouseMain3 from '../images/InHouseMain3.png'
import InHouseMain4 from '../images/InHouseMain4.png'
import InHouseMain5 from '../images/InHouseMain5.png'
import InHouseMain6 from '../images/InHouseMain6.png'


class IndexPage extends React.Component{
constructor(props){
  super(props);
  this.state = {
    DateAndTime: 0,
    LogoArray:[InHouseMain,InHouseMain2,InHouseMain3,InHouseMain4,InHouseMain5,InHouseMain6],
    font: Math.floor(Math.random() * fontArray.length),
    Logo: 0,
    pop1: [false,0,0],
    pop2: [false,0,0],
    pop3: [false,0,0],
  }
  this.fontLogoInterval = this.fontLogoInterval.bind(this);
  this.popShow = this.popShow.bind(this);
  this.popX = this.popX.bind(this);
  this.popY = this.popY.bind(this);
}
UNSAFE_componentWillMount(){
  this.changing = setInterval(this.fontLogoInterval, 30000);
  this.popShow({pop1:[true,this.popX(95),this.popY(95)]}, 1000,'pop1');
  this.popShow({pop2:[true,this.popX(40),this.popY(30)]}, 3000,'pop2');
  this.popShow({pop3:[true,this.popX(90),this.popY(80)]}, 7000, 'pop3');
}
componentWillUnmount(){
  clearInterval(this.changing);
  clearInterval(this.pop1);
  clearInterval(this.pop2);
  clearInterval(this.pop3);
}
popShow(pop,time,name){
  console.log(pop);
  this.name = setTimeout(() => {
    this.setState(pop);
  }, time);
}

popX(value){
  let x = Math.random() * value;
  return `${x}%`;
}
popY(value){
  let y = Math.random() * value;
  return `${y}%`;
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
      <Refresh><button onClick={this.fontLogoInterval}><i className='fa fa-redo' ></i></button></Refresh>
      <LogoContainer><img src={this.state.LogoArray[this.state.Logo]} alt='inhouse-logo'></img></LogoContainer>
      <ChangingFont style={{fontFamily:fontArray[this.state.font]}}>
      <Link to='/shop'><h1>Shop</h1></Link>
      <Link to='/library'><h1>Library</h1></Link>
      <Link to='/contact'><h1>Contact</h1></Link>
      </ChangingFont>
    </IndexGrid>
    {this.state.pop1[0] && <Draggable><Pop id='pop1' style={{top:this.state.pop1[2], left:this.state.pop1[1]}}><button onClick={()=>{this.popShow({pop1:false})}}>X</button>Pop1</Pop></Draggable>}
    {this.state.pop2[0] && <Draggable><Pop id='pop2' style={{top:this.state.pop2[2], left:this.state.pop2[1]}}><button onClick={()=>{this.popShow({pop2:false})}}>X</button>Pop2</Pop></Draggable>}
    {this.state.pop3[0] && <Draggable><Pop id='pop3' style={{top:this.state.pop3[2], left:this.state.pop3[1]}}><button onClick={()=>{this.popShow({pop3:false})}}>X</button>Pop3</Pop></Draggable>}
  </Layout>
)}
}
export default IndexPage
