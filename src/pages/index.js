import React from 'react'
import { Link } from 'gatsby'
import Pop from '../components/Pop.js'
import {IndexGrid, fontArray, LogoContainer,Refresh, ChangingFont} from '../styles/style.js';
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
  this.removeAllPop = this.removeAllPop.bind(this);
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
  //let inputPop = [{color:'red',name:'1'},{color:'blue',name:'2'},{color:'green',name:'3'},{color:'orange',name:'4'},{color:'purple',name:'5'}]
  for(let i = 0; i < 40; i++){//inputPop.length; i++){
    this.popShow({name:'I CAN FEEL IT'},i,(i+1)*300)
  }
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
    popArray.push({x:this.popX(90),y:this.popY(80),z:(z+100),name:pop.name,color:pop.color})
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
  console.log('remove')
  var popups = document.getElementsByClassName('popup')
  console.log(popups)
  for (var i = 0; i < popups.length; i++){
      popups[i].style.display = 'none';
  }
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
      <Refresh><button onClick={this.fontLogoInterval}><i className='fa fa-redo' ></i></button><button onClick={this.removeAllPop}><i className='fa fa-times' ></i></button></Refresh>
      <LogoContainer><img src={this.state.LogoArray[this.state.Logo]} alt='inhouse-logo'></img></LogoContainer>
      <ChangingFont style={{fontFamily:fontArray[this.state.font]}}>
        <Link to='/shop'><h1>Shop</h1></Link>
        <Link to='/library'><h1>Library</h1></Link>
        <Link to='/contact'><h1>Contact</h1></Link>
      </ChangingFont>
    </IndexGrid>
    {this.state.popArray.map((pop)=>{
        return(<Pop key={pop.name} pop={pop} />)
    })}
    </Layout>
)}
};
export default IndexPage
