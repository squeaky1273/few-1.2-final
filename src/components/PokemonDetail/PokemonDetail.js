import React from 'react';

function Pokemon(props) {
    const { name, number, image, type, weakness } = props
    return (
        <div className="pokemon">
            <p>{ name }  # { number }</p>
            <p>{ image }</p>
            {/* <img src={`${process.env.PUBLIC_URL}images/${image[0]}`} /> */}
            <p>{ type }</p>
            <p>{ weakness }</p>
        </div>
    )
}
export default Pokemon;
