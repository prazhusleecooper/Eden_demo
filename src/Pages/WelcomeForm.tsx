import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from '../Utils/hooks';
import { saveWelcomeForm } from '../Redux/Workspace';

import classes from '../Styling/Pages/OnboardingForm.module.scss';

const WelcomeForm = () => {

    // ? Used for page redirection
    const navigate = useNavigate();

    // ? Redux data
    const dispatch = useAppDispatch();

    const fullNameSaved = useAppSelector((state) => state.workspace.fullName);
    const displayNameSaved = useAppSelector((state) => state.workspace.displayName);

    
    // ? STATE VARIABLES
    const [fullName, setFullName] = useState(fullNameSaved);
    const [displayName, setDisplayName] = useState(displayNameSaved);
    const [error, setError] = useState('');

    // ? Non-Rendering Methods

    // ? Method to validate the inputs
    const validation = () => {

        if(fullName === '' || displayName === '') {

            setError(() => '* Please fill all the details to proceed.');

            return false;
        
        }

        setError('');

        return true;

    };
    
    // ? Method to handle the form submit 
    const handleFormSubmit = (event: any) => {
        
        event.preventDefault();

        setError('');

        const inputValidation = validation();

        if(inputValidation) {

            // ? Save the full name and display name in redux state
            dispatch(
                saveWelcomeForm({
                    fullName,
                    displayName
                })
            );

            navigate('/setup-workspace');
        
        }

        return;

    };
    // * End of handleFormSubmit();

    // * End of Non-Rendering Methods


    return(
        <div className={ classes.onboardingFormSection }>
            <span className={ classes.formTitle }>
                Welcome! First things first...
            </span>

            <span className={ classes.formSubTitle }>
                You can always change them later.
            </span>

            <form
                className={ classes.onboardingForm }
                onSubmit={ handleFormSubmit }
            >

                <div className={ classes.inputSection }>

                    <label>
                        Full Name
                    </label>

                    <input 
                        type='text'
                        placeholder='Steve Jobs'
                        value={ fullName }
                        onChange={ (event) => setFullName(() => event.target.value) }                    
                        className={ classes.textInput }
                        required
                    />

                </div>

                <div className={ classes.inputSection }>

                    <label>
                        Display Name
                    </label>

                    <input 
                        type='text'
                        placeholder='Steve'
                        value={ displayName }
                        onChange={ (event) => setDisplayName(() => event.target.value) }                    
                        className={ classes.textInput }
                        required
                    />

                </div>

                <span
                    className={ classes.formError }
                >
                    { error || '' }
                </span>

                <div className={ classes.inputSection }>
                    <button className={ classes.submitBtn }>
                        Next
                    </button>
                </div>

            </form>
        </div>
    );

};

export default WelcomeForm;