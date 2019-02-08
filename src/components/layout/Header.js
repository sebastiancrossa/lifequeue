import React from 'react'

// Functional component
// Uses return to display
function Header() {
    return (
        <header style={headerStyle}>
            <h1>Life Queue</h1>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '10px'
}

export default Header;