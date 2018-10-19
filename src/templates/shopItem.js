import React from 'react';
class ShopItem extends React.Component{

constructor(props){
    super(props);
    console.log(this.props.pageContext.prodInfo);
    let x = this.props.pageContext.prodInfo;
    this.state = {
        title:x.prod_title.text,
        price:x.price,
        images: ['x','y'],
        button: x.prod_button.raw[0].text,
        images: [x.prod_image1.localFile.childImageSharp.original.src,x.prod_image2.localFile.childImageSharp.original.src],
        sizes:{
            s:x.prod_small,
            m:x.prod_medium,
            l:x.prod_large,
            xl:x.prod_xl,
        }
    }
    this.formatButton = this.formatButton.bind(this);
}
componentDidMount(){
    if(this.props.pageContext.prodInfo.type == 'shirt'){
        this.formatButton()
    }
}
formatButton(){
    let form = document.getElementById(`${this.state.title}_button`);
    let select = form.getElementsByTagName('tbody')[0].getElementsByTagName('tr')[1].getElementsByTagName('td')[0].getElementsByTagName('select')[0];
    for(let i = 0; i < select.options.length; i++){
        if(select.options[i].value == 'small' && this.state.sizes.s == "no"){
            select.options[i].disabled = true;
        }
        else if(select.options[i].value == 'medium' && this.state.sizes.m == "no"){
            select.options[i].disabled = true;
        }
        else if(select.options[i].value == 'large' && this.state.sizes.l == "no"){
            select.options[i].disabled = true;
        }
        else if(select.options[i].value == 'Xl' && this.state.sizes.xl == "no"){
            select.options[i].disabled = true;
        }
    }
}
render(){
    return(
        <div>
            <h1>{this.state.title}</h1>
            <h3>{this.state.price}</h3>
            <img src={this.state.images[0]} />
            <img src={this.state.images[1]}/>
            <div id={`${this.state.title}_button`} dangerouslySetInnerHTML={{__html:this.state.button}}></div>
        </div>
)}
}

export default ShopItem;
