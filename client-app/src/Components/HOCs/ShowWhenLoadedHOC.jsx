import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Loading from '../Common/Loading';

const ShowWhenLoadedHOC = (WrappedComponent, targetReducer) => {

    // Only render the wrapped component when the target state is 
    // loaded, otherwise show a loading component

    const ProductInfoLoaded = () => {
        
        const targetState = useSelector(state => 
            state[targetReducer] ? state[targetReducer] : {}
        )
        return targetState.loading && targetState.loading ? <Loading/> : <WrappedComponent />;
    }

    return ProductInfoLoaded;
}

export default ShowWhenLoadedHOC;
