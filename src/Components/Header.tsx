import React, { useState } from 'react';

import StepBar from './StepBar';
import classes from '../Styling/Components/Header.module.scss';
import LogoTitle from './LogoTitle';

const Header = () => {

    return(
        <div className={ classes.headerSection }>
            <LogoTitle />
            <StepBar />
        </div>
    )

};

export default Header;