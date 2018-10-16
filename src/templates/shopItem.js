import React from 'react';
        /*sizes={[node.data.prod_small,
          node.data.prod_medium,
          node.data.prod_large,
          node.data.prod_xl]} */
class ShopItem extends React.Component{
    constructor(props){
    super(props);
}
render(){
    console.log(this.props)
    return(
        <div>
        <h1>{this.props.pageContext.prodInfo.prod_title.text}</h1>
        <img src={this.props.pageContext.prodInfo.prod_image1.localFile.childImageSharp.original.src} />
        <img src={this.props.pageContext.prodInfo.prod_image2.localFile.childImageSharp.original.src}/>
 <h1>{this.props.pageContext.prodInfo.prod_button.html}</h1>
 </div>
)}
}

export default ShopItem;
