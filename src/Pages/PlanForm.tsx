import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from '../Utils/hooks';
import { savePlanForm } from '../Redux/Workspace';

import { selfIcon, teamIcon } from '../Utils/Icons';

import classes from '../Styling/Pages/OnboardingForm.module.scss';


const PlanForm = () => {
    
    // ? Used for page redirection
    const navigate = useNavigate();

    // ? Redux data
    const dispatch = useAppDispatch()

    const planSaved = useAppSelector((state) => state.workspace.plan);
 

    // ? STATE VARIABLES
    const [plan, setPlan] = useState(planSaved);
    const [error, setError] = useState('');

    // ? Non-Rendering Methods

    // ? Method to validate the inputs
    const validation = () => {

        if(plan === '') {

            setError(() => '* Please select one of the options to proceed.');

            return false;

        };

        setError('');

        return true;

    };
    // * End of validation();

    // ? Method to handle the form submit 
    const handleFormSubmit = (event: any) => {

        event.preventDefault();

        setError('');

        const inputValidation = validation();

        if(inputValidation) {

            // ? Save the Workspace name and Workspace URL in redux state
            dispatch(
                savePlanForm({
                    plan,
                })
            );

            return navigate('/onboarding-success');
        }

    };
    // * End of handleFormSubmit();

    // * End of Non-Rendering Methods

    return(
        <div className={ classes.onboardingFormSection }>
            <span className={ classes.formTitle }>
                How are you planning to use Eden?
            </span>

            <span className={ classes.formSubTitle }>
                We'll streamline your setup experience accordingly.
            </span>

            <form
                className={ classes.onboardingForm }
                onSubmit={ handleFormSubmit }
            >

                <div className={ classes.planOptionsSection }>

                    <div
                        className={
                            `
                                ${classes.planOption} 
                                ${ (plan === 'self') ? classes.selectedPlanOption : '' } 
                            `
                        }
                        onClick={ () => setPlan(() => 'self') }    
                    >
                        
                        {
                            selfIcon({
                                color: (plan === 'self') ? 'rgb(102, 76, 229)' : 'rgb(54, 66, 90)',
                                width: '25px',
                                height: '25px'
                            })
                        }

                        <span className={ classes.optionTitle }>
                            For myself
                        </span>

                        <span className={ classes.optionDescription }>
                            Write better. Think more clearly. Stay Organized
                        </span>
                    </div>
                    
                    <div
                        className={
                            `
                                ${classes.planOption} 
                                ${ (plan === 'team') ? classes.selectedPlanOption : '' } 
                            `
                        }
                        onClick={ () => setPlan(() => 'team') }    
                    >
                        
                        {
                            teamIcon({
                                color: (plan === 'team') ? 'rgb(102, 76, 229)' : 'rgb(54, 66, 90)',
                                width: '25px',
                                height: '25px'
                            })
                        }

                        <span className={ classes.optionTitle }>
                            With my team
                        </span>

                        <span className={ classes.optionDescription }>
                            Wikis, docs, tasks &amp; projects, all in one place.
                        </span>
                    </div>

                </div>

                <span
                    className={ classes.formError }
                >
                    { error || '' }
                </span>

                <div className={ classes.inputSection }>
                    <button className={ classes.submitBtn }>
                        Create Workspace
                    </button>
                </div>

            </form>
        </div>
    );

};

export default PlanForm;