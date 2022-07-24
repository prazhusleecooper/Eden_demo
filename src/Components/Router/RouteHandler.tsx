import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import WelcomeForm from '../../Pages/WelcomeForm';
import SetupWorkspaceForm from '../../Pages/SetupWorkspaceForm';
import PlanForm from '../../Pages/PlanForm';
import OnboardingSuccess from '../../Pages/OnboardingSuccess';

import classes from '../../Styling/Components/Router/RouteHandler.module.scss'

const RouteHandler = () => {

    return(
        <div className={ classes.routerComponent }>
            <Routes>
                {/*
                    // ? STEP I: Welcome Form
                */}
                <Route 
                    path="/welcome"
                    element={ <WelcomeForm />} 
                />
                
                {/*
                    // ? STEP II: Setup Workspace
                */}    
                <Route 
                    path="/setup-workspace"
                    element={ <SetupWorkspaceForm />} 
                />
                
                {/*
                    // ? STEP III: Plan
                */}    
                <Route 
                    path="/choose-plan"
                    element={ <PlanForm />} 
                />
                
                {/*
                    // ? STEP IV: OnboardingSuccess
                */}
                <Route 
                    path="/onboarding-success"
                    element={ <OnboardingSuccess />} 
                />

                {/*                
                    // ? Redirect '/' to STEP I: Welcome Form
                */}
                <Route
                    path="/"
                    element={ 
                        <Navigate 
                            to='/welcome'
                            replace
                        />
                    } 
                />
            </Routes>
        </div>
    );

};

export default RouteHandler;