import React from 'react';

const Error = (props) => {

    return (
        <div className="error__container">
            <div className="error">
                <i className="fas fa-exclamation-circle error__icon"></i>
                <h2 className="error__title">Sorry, something went wrong</h2>
                <p className="error__message">{props.message}</p>
            </div> 
        </div>
     )
}

export default Error;
