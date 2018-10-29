import React from 'react';

class Lib extends React.Component{
    constructor(props){
        super(props)
        this.state={
            num: this.props.num,
            item: this.props.item,
            descToggle: false,
            highlightedImage:'',
        }
    }
render(){return(
    <div onClick={()=>{this.setState({descToggle:!this.state.descToggle})}}>
    <div style={{display:'flex'}}><div>{this.state.num}</div>
    <div className='title'>{this.state.item}</div>
    <div>{this.state.item}</div>
    <div>{this.state.item}</div>
    <div>{this.state.item}</div>
    <div>{this.state.item}</div></div>
    {this.state.descToggle && <div>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>}

    </div>
)}
}

export default Lib;