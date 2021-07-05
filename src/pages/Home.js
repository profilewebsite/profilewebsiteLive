import React from 'react';
import './Home.css';

import someguys from '../assets/someguys.jpg'

function Home()
{
    return (
        <>
        <div className = 'home-wrapper'>
            <div className = 'home-bio-wrapper'>
                
                <div className = 'home-face-container'>
                    <img src = {someguys} alt = "some guys have all the luck" className = 'home-face-image' />
                </div>
            </div>     
        </div>
        </>
    );
}

export default Home;


