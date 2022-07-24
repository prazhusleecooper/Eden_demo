import React from 'react';

import classes from '../Styling/Components/LogoTitle.module.scss';
import EdenLogo from '../Assets/Images/EdenLogo.png';

const LogoTitle = () => {

    return(
        <div className={ classes.LogoTitleSection }>

            <div className={ classes.LogoTitleContainer }>

                <img 
                    src={ EdenLogo }
                    alt='Eden_Logo'
                />

                <span>
                    Eden
                </span>
            
            </div>
        </div>
    )

};

export default LogoTitle;