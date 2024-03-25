import React from 'react';

const Error = (props) => {
    return (
        <section>
            <h2>{props.heading}</h2>
            {props.description ? <p>{props.description}</p> : ''}
        </section>
    );
};

export default Error;
