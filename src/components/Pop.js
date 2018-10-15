import React from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';

export const PopStyle = styled.div`
    font-family:'Oswald';
    position:absolute;
    @media screen and (max-width:850px) {
        display:none;
    }
    .container {
    border: 2px solid;
    border-bottom-color: #535353;
    border-right-color: #535353;
    border-left-color: #dbdbdb;
    border-top-color: #dbdbdb;
    background-color: #bfbfbf;
    max-width: 600px;
    font-size: 13px;
    padding: 2px;
    }
    .title {
    background-color: #808080;
    padding: 2px 4px 3px 4px;
    position: relative;
    h1 {
    font-weight: bold;
    color: #bcbcbc;
    font-size: 13px;
    margin: 0;
    }
    button {
    border: 2px solid;
    border-bottom-color: #444;
    border-right-color: #444;
    border-left-color: #a6a6a6;
    border-top-color: #a6a6a6;
    background-color: #bfbfbf;
    position: absolute;
    font-size: 9px;
    line-height: 0;
    padding: 1px;
    height: 15px;
    width: 15px;
    top: 2px;
}
button.times {
right: 2px;
}
}
`

const max = 40;
const min = 5;
class Pop extends React.Component{
    constructor(props){
        console.log(props);
        super(props);
        this.state = {
            name:this.props.pop.name,
            color:this.props.pop.color,
            x:this.props.pop.x,
            y:this.props.pop.y,
            z:this.props.pop.z,
            height: Math.random() * (max - min) + min,
            width:Math.random() * (max - min) + min,
        }
        this.removePop = this.removePop.bind(this);
    }
    removePop(id){
        let pop = document.getElementById(id);
        pop.style.display = 'none';
    }
    render(){
        return(
            <Draggable>
                <PopStyle className='container' id={this.state.name}  style={{top:this.state.y, left:this.state.x,zIndex:this.state.z, backgroundColor:this.state.color, height:`${this.state.height}vh`, width:`${this.state.width}vw`}}>
                    <div class="title">
                        <div class="pull-right">
                            <button class="times" onClick={()=>(this.removePop(this.state.name))}><span class="fa fa-times"></span></button>
                        </div>
                        <h1><div class="icon-my-computer"></div>{this.state.name}</h1>
                    </div>
                    <div className='body'>
                        popuppopuppopuppopuppopuppopuppopuppopup
                    </div>
                </PopStyle>
            </Draggable>
        )
    }
}

export default Pop;