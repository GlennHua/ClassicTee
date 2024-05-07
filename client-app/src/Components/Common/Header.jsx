import React from 'react'
import Cart from './Cart'

const Header = (props) => {
    // Could have something more later, such as login, etc.
    return (
        <header className='header'>
            <Cart handleMyCartClick = { props.handleMyCartClick } />
        </header>
    )
}

export default Header