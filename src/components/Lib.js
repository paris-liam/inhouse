import React from 'react';

const Lib = ({title,image}) => (
    <div style={{display:'grid'}}>
        <h1>{title}</h1>
        <img src={image}></img>
    </div>
)

export default Lib;