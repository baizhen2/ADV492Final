import React from 'react';
import logo from '../images/policypal.png'

function FrontPageLogo() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img 
                src={logo} 
                alt="Logo"
                style={{ marginTop: '100px', width: '30%', height: 'auto' }}
            />
        </div>
    );
}

export default FrontPageLogo;
