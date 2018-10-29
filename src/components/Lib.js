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
    <tr onClick={()=>{this.setState({descToggle:!this.state.descToggle})}}>
    <td>{this.state.num}</td>
    <td className='title'>{this.state.item}</td>
    <td>{this.state.item}</td>
    <td>{this.state.item}</td>
    <td>{this.state.item}</td>
    <td>{this.state.item}</td>
    {this.state.descToggle && <div>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>}

    </tr>
)}
}

export default Lib;