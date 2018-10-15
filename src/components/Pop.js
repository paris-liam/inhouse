import React from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';
import Grit from '../images/grit.jpeg';
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
    a{
        color:inherit;
        text-decoration:none;
    }
    a:hover{
        color:'blue'
    }
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

class Pop extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:this.props.pop.name,
            x:this.props.pop.x,
            y:this.props.pop.y,
            z:this.props.pop.z,

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
               <PopStyle className='container popup' id={this.state.name}  style={{top:this.state.y, left:this.state.x, zIndex:this.state.z, width:'10%'}}>
                    <div className="title">
                        <div className="pull-right">
                            <button className="times" onClick={()=>(this.removePop(this.state.name))}><span className="fa fa-times"></span></button>
                        </div>
                        <h1>
                            <div className="icon-my-computer"></div>
                            {this.state.link ? (<a href={this.state.link} id={`${this.state.name}_link`} draggable='false'>{this.state.name}</a>):(this.state.name)}
                        </h1>
                    </div>
                     <div className='body'>
                        <img draggable="false" src={Grit}></img>
                    </div>
                </PopStyle>
            </Draggable>
        )
    }
}

export default Pop;