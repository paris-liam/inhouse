import React from 'react';
import styled from 'styled-components';

const LibRow= styled.div`
    grid-template-areas:'number title artist pages size year';
    &.showingTwo{
        grid-template-rows: auto auto auto;
        grid-template-areas: 'number title artist pages size year'  '. description description description . .' '. gallery gallery gallery gallery gallery'
    }
    &.showingThree{
        grid-template-rows: auto auto auto auto ;
        grid-template-areas:'number title artist pages size year' '. description description description . .' '. gallery gallery gallery gallery gallery' '. . highlight highlight highlight .'
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
        display:grid;
        grid-area:description;
        padding-top:2vh;
    }
    & > div.descriptionImageGal{
        display:flex;
        grid-area:gallery;
        & > img{
            width:10%;
        }

    }
    & > div.descriptionHighlight{
        display:grid;
        grid-area:highlight;
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
            <React.Fragment>
                <div className='descriptionBox'>
                    <div className='descriptionText'>{this.state.item.description}</div>
                </div>
                <div className='descriptionImageGal'>
                    {this.state.item.images.map((image)=><img onClick={()=>{
                        if(this.state.highlightedImage != image){
                            this.setState({
                                highlightedImage:image}
                            )
                        }
                        else{
                            this.setState({
                                highlightedImage:'empty'}
                            )
                        }
                    }}src={image}/>)}
                </div>
            </React.Fragment>
        }
        {( this.state.descToggle && this.state.highlightedImage !== 'empty') && <div className='descriptionHighlight'><img onClick={()=>{this.setState({highlightedImage:'empty'})}}src={this.state.highlightedImage}></img></div>}
    </LibRow>
)}
}

export default Lib;