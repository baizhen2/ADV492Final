import React from 'react';
import background from '../images/vecteezy_dark-gradient-background_8132028.jpg';
import '../css/Background.css';

function Background() {
    return (
        <div style={{ 
            backgroundImage: `url(${background})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',
            position: 'fixed',
            zIndex: '-1'}}>
        </div>
    );
}

export default Background;