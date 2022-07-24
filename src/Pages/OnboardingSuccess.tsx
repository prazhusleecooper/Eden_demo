import React from 'react';

import { useAppDispatch, useAppSelector } from '../Utils/hooks';

import { checkIcon } from '../Utils/Icons';
import classes from '../Styling/Pages/OnboardingForm.module.scss';

const OnboardingSuccess = () => {
    
    // ? Redux data
    const dispatch = useAppDispatch();

    const fullName = useAppSelector((state) => state.workspace.fullName);

    // ? Non-Rendering Methods
    
    // ? Method to handle the form submit 
    const handleFormSubmit = (event: any) => {

        event.preventDefault();

    };
    // * End of handleFormSubmit();

    // * End of Non-Rendering Methods

    return(
        <div className={ classes.onboardingFormSection }>

            <div className={ classes.checkIconSection }>
                {
                    checkIcon({
                        color: 'white',
                        width: '30px',
                        height: '30px'
                    })
                }
            </div>

            <span className={ classes.formTitle }>
                Congratulations, { fullName.trim() }!
            </span>

            <span className={ classes.formSubTitle }>
                You have completed onboarding, you can start using the Eden.
            </span>

            <form
                className={ classes.onboardingForm }
                onSubmit={ handleFormSubmit }
            >

                <div className={ classes.inputSection }>
                    <button className={ classes.submitBtn }>
                        Launch Workspace
                    </button>
                </div>

            </form>
        </div>
    );

};

export default OnboardingSuccess;