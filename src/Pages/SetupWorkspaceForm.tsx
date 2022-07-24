import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../Utils/hooks';
import { saveSetupWorkspaceForm } from '../Redux/Workspace';

import classes from '../Styling/Pages/OnboardingForm.module.scss';

const SetupWorkspaceForm = () => {

    // ? Used for page redirection
    const navigate = useNavigate();

    // ? Redux data
    const dispatch = useAppDispatch()

    const stepCompleted = useAppSelector((state) => state.workspace.stepCompleted);

    const workspaceNameSaved = useAppSelector((state) => state.workspace.workspaceName);
    const workspaceUrlSaved = useAppSelector((state) => state.workspace.workspaceUrl);


    // ? STATE VARIABLES
    const [workspaceName, setWorkspaceName] = useState(workspaceNameSaved);
    const [workspaceUrl, setWorkspaceUrl] = useState(workspaceUrlSaved);
    const [error, setError] = useState('');

    // ? Non-Rendering Methods

    // ? Method to validate the inputs
    const validation = () => {

        let urlRegex = /^(?![0-9.-])(?!.*[0-9-]$)(?!.*\d-)(?!.*-\d)[a-zA-Z0-9-]+$/ig;

        if(workspaceName === '' || workspaceName === '') {

            setError(() => '* Please fill all the details to proceed.');

            return false;

        } if(!urlRegex.test(workspaceUrl)) {

            setError(() => `* URL can only contain '-' and not any other special characters & URL cannot end with '-'` );

            return false;

        }
        
        setError('');

        return true;

    };
    // * End of validation();

    useEffect(() => {

        // ? Navigate to STEP - I if its not completed
        if(!(stepCompleted > 0) ) {

            navigate('/welcome');
    
        }

        // eslint-disable-next-line
    }, []);
    
    // ? Method to handle the form submit 
    const handleFormSubmit = (event: any) => {

        event.preventDefault();

        setError('');

        const inputValidation = validation();

        if(inputValidation) {

            // ? Save the Workspace name and Workspace URL in redux state
            dispatch(
                saveSetupWorkspaceForm({
                    workspaceName,
                    workspaceUrl,
                })
            );

            return navigate('/choose-plan');
        
        }

        return;

    };
    // * End of handleFormSubmit();

    // * End of Non-Rendering Methods

    return(
        <div className={ classes.onboardingFormSection }>
            <span className={ classes.formTitle }>
                Let's set up a home for all your work
            </span>

            <span className={ classes.formSubTitle }>
                You can always create another workspace later
            </span>

            <form
                className={ classes.onboardingForm }
                onSubmit={ handleFormSubmit }
            >

                <div className={ classes.inputSection }>

                    <label>
                        Workspace Name
                    </label>

                    <input 
                        type='text'
                        placeholder='Eden'
                        value={ workspaceName }
                        onChange={ (event) => setWorkspaceName(() => event.target.value) }                    
                        className={ classes.textInput }
                        required
                    />

                </div>

                <div className={ classes.inputSection }>

                    <label>
                        Workspace URL {' '}
                        <span>
                            (optional)
                        </span>
                    </label>

                    <div className={ classes.urlInputSection }>

                        <div className={ classes.urlSection }>
                            www.eden.com/
                        </div>

                        <input 
                            type='text'
                            placeholder='Example'
                            value={ workspaceUrl }
                            onChange={ (event) => setWorkspaceUrl(() => event.target.value) }                    
                            className={ classes.urlInput }
                            required
                        />

                    </div>


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

export default SetupWorkspaceForm;