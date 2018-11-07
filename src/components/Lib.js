import React from 'react';
import styled from 'styled-components';

const LibRow= styled.div`
    grid-template-areas:'number title artist pages size year';
    &.showingTwo{
        grid-template-rows: auto auto auto;
        grid-template-areas: 'number title artist pages size year'  '. description description . . .' '. gallery gallery gallery gallery .'
    }
    &.showingThree{
        grid-template-rows: auto auto auto auto ;
        grid-template-areas:'number title artist pages size year' '. description description . . .' '. gallery gallery gallery gallery .' '. highlight highlight highlight highlight .'
    }
    & > div.number{
        padding-left:20%;
    }
    & > div.title{
        font-weight:bold;
        &:hover{
            color:rgb(255, 204, 204)
        }
    }
    & > div.descriptionBox{
        & > div{
            width:100%;
        }
        display:flex;
        grid-area:description;
        padding:2vh 0;
    }
    & > div.descriptionImageGal{
        display:grid;
        grid-area:gallery;
        grid-template-rows:auto auto auto; 
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        margin:2vh;
        & > div > img{
            width:100%;
            height:100%;
            overflow:hidden;
        }
    }
    & > div.descriptionHighlight{
        display:flex;
        grid-area:highlight;
        & > img{
            width:auto;
            height:50%;
            margin: 1vh auto;

        }
    }
`

class Lib extends React.Component{
    constructor(props){
        super(props)
        this.state={
            num: this.props.num,
            item: this.props.item,
            descToggle: false,
            highlightedImage:'empty',
        }
        this.highlightedSwitch = this.highlightedSwitch.bind(this);
    }
    highlightedSwitch(image){
        let src = image.target.src;
        this.setState({
            highlightedImage:src === this.state.highlightedImage ? ('empty'):(src)
        })
    }
render(){
    let rowClasses = ''
    if(this.state.descToggle && this.state.highlightedImage != 'empty'){
        rowClasses = 'showingThree'
    }
    else if(this.state.descToggle){
        rowClasses = 'showingTwo'
    }
    else{
        rowClasses = '';
    }
    return(
    <LibRow className={rowClasses}>
        <div className='number' onClick={()=>{this.setState({descToggle:!this.state.descToggle,highlightedImage:'empty'})}}>{this.state.num}</div>
        <div className='title' onClick={()=>{this.setState({descToggle:!this.state.descToggle,highlightedImage:'empty'})}}>{this.state.item.title}</div>
        <div className='artist' onClick={()=>{this.setState({descToggle:!this.state.descToggle,highlightedImage:'empty'})}}>{this.state.item.artist}</div>
        <div className='pages' onClick={()=>{this.setState({descToggle:!this.state.descToggle,highlightedImage:'empty'})}}>{this.state.item.pages}</div>
        <div className='size' onClick={()=>{this.setState({descToggle:!this.state.descToggle,highlightedImage:'empty'})}}>{this.state.item.size}</div>
        <div className='year' onClick={()=>{this.setState({descToggle:!this.state.descToggle,highlightedImage:'empty'})}}>{this.state.item.year}</div>
        {this.state.descToggle && 
            <div className='descriptionBox'>
                <div>{this.state.item.description}</div>
            </div>
        }
        {this.state.descToggle &&  
            <div className='descriptionImageGal'>
                {this.state.item.images.map((image)=>
                    <div >
                        <img onClick={this.highlightedSwitch} src={image}/>
                    </div>
                )}
            </div>
        }
        {( this.state.descToggle && this.state.highlightedImage !== 'empty') && 
        <div className='descriptionHighlight'>
            <img onClick={()=>{this.setState({highlightedImage:'empty'})}}src={this.state.highlightedImage}></img>
        </div>}
    </LibRow>
)}
}

export default Lib;