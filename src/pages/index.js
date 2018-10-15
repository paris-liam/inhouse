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
    popArray: [],
    timeoutArray: []
  }
  this.fontLogoInterval = this.fontLogoInterval.bind(this);
  this.popShow = this.popShow.bind(this);
  this.popX = this.popX.bind(this);
  this.popY = this.popY.bind(this);
  this.removePop = this.removePop.bind(this);
}
/*UNSAFE_componentWillMount(){
  let i = 0;
  let inputPop = [{color:'red',name:'pop1'},{color:'green',name:'pop2'},{color:'blue',name:'pop3'}];
  inputPop.forEach((pop)=>{
    this.popShow(pop,(3000 + (i*2000)));
    i++;
  });
}*/
componentDidMount(){
  this.changing = setInterval(this.fontLogoInterval, 5000);
  this.popShow({name:'pop1',color:'red'},1000);
  this.popShow({name:'pop2',color:'orange'},2000);
  this.popShow({name:'pop3',color:'orange'},3000);
}
componentWillUnmount(){
  clearInterval(this.changing);
  this.state.timeoutArray.forEach((timeout)=>{
    clearInterval(timeout);
  })
}
popShow(pop,time){
  let timeout = setTimeout(() => {
    let popArray = this.state.popArray;
    popArray.push({x:this.popX(100),y:this.popY(100),name:pop.name,color:pop.color})
    this.setState({popArray});
  }, time);
  let timeoutArray = this.state.timeoutArray;
  timeoutArray.push(timeout);
  this.setState({
    timeoutArray
  });
}

removePop(id){
  let pop = document.getElementById(id);
  pop.style.display = 'none';
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
    {this.state.popArray.map((pop)=>{
        return(<Draggable><Pop id={pop.name} key={pop.name} style={{top:pop.y, left:pop.x}}><button onClick={()=>{this.removePop(pop.name)}}>X</button>{pop.name}</Pop></Draggable>)
    })}
    </Layout>
)}
};
export default IndexPage
