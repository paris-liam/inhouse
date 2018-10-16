import React from 'react';
import {Link} from 'gatsby-link';
const ShopTile = (props) => (
    <Link to={`/${props.name}`}><div style={{display:'grid'}}>
        {console.log(props)}
    </div></Link>
)

export default ShopTile;