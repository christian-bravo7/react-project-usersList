import React from 'react';
import Loader from 'react-loader-spinner'

const Loading = () => {

    return (
        <div className="loader__container">
            <Loader type="Grid"
                    color="#00BFFF"
                    height={80}
                    width={80}/>
        </div>
    )
}

export default Loading;
