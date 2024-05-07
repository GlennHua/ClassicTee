import React from 'react';
import { useSelector } from 'react-redux';
import Error from '../Common/Error';

const ShowIfProductFetchedHOC = (WrappedComponent, targetReducer) => {

    // Only render the wrapped component when the target state is
    // loaded AND without errors, otherwise show a toast container

    const RenderComponentIfFetchedSuccessfully = () => {

        const targetState = useSelector(state => 
            state[targetReducer] ? state[targetReducer] : {}
        )

        return targetState.error ? 
        <Error>
            {targetState.error}
        </Error> : <WrappedComponent />; 
    }

    return RenderComponentIfFetchedSuccessfully;
}

export default ShowIfProductFetchedHOC