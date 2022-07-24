import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../Utils/hooks';
import { saveSetupWorkspaceForm } from '../Redux/Workspace';

import classes from '../Styling/Components/StepBar.module.scss';

const progressValues: any = {
    '/welcome': 1,
    '/setup-workspace': 2,
    '/choose-plan': 3,
    '/onboarding-success': 4,
};

const StepBar = () => {

    const navigate = useNavigate();

    let { pathname } = useLocation();

    const stepCompleted = useAppSelector((state) => state.workspace.stepCompleted);

    // ? Non-Rendering Methods
    
    // ? Method to handle navigation on click
    const handleNavigation = (path: string) => {

        if(
            (
                (progressValues[path] - stepCompleted) === 1
                ||
                stepCompleted >= progressValues[path]
            ) 
            &&
            pathname !== path
        ) {

            return navigate(path);

        }

    };
    // * End of handleNavigation(); 

    // * End of Non-Rendering Methods

    return(
        <div className={ classes.stepBarSection }>
            <div 
                className={ `${ classes.stepCircle } ${ classes.stepCircleDone }` }
                onClick={ () => handleNavigation('/welcome')}    
            >
                <span className={ classes.stepNumberText }>
                    1
                </span>
            </div>
            <div 
                className={ `${ classes.stepLine } ${ classes.stepLineDone }` }
            />

            <div 
                className={ 
                    `
                        ${classes.stepLine}
                        ${
                            (progressValues[pathname] >= 2)
                            ?
                            classes.stepLineDone
                            :
                            ''
                        }
                    `
                }
            />
            <div 
                className={ 
                    `
                        ${classes.stepCircle}
                        ${
                            (progressValues[pathname] >= 2)
                            ?
                            classes.stepCircleDone
                            :
                            ''
                        }
                    `
                }
                onClick={ () => handleNavigation('/setup-workspace')}    
            >
                <span className={ classes.stepNumberText }>
                    2
                </span>
            </div>
            <div 
                className={ 
                    `
                        ${classes.stepLine}
                        ${
                            (progressValues[pathname] >= 2)
                            ?
                            classes.stepLineDone
                            :
                            ''
                        }
                    `
                }
            />

            <div 
                className={ 
                    `
                        ${classes.stepLine}
                        ${
                            (progressValues[pathname] >= 3)
                            ?
                            classes.stepLineDone
                            :
                            ''
                        }
                    `
                }
            />
            <div 
                className={ 
                    `
                        ${classes.stepCircle}
                        ${
                            (progressValues[pathname] >= 3)
                            ?
                            classes.stepCircleDone
                            :
                            ''
                        }
                    `
                }
                onClick={ () => handleNavigation('/choose-plan')}    
            >
                <span className={ classes.stepNumberText }>
                    3
                </span>
            </div>
            <div 
                className={ 
                    `
                        ${classes.stepLine}
                        ${
                            (progressValues[pathname] >= 3)
                            ?
                            classes.stepLineDone
                            :
                            ''
                        }
                    `
                }
            />

            <div 
                className={ 
                    `
                        ${classes.stepLine}
                        ${
                            (progressValues[pathname] >= 4)
                            ?
                            classes.stepLineDone
                            :
                            ''
                        }
                    `
                }
            />
            <div 
                className={ 
                    `
                        ${classes.stepCircle}
                        ${
                            (progressValues[pathname] >= 4)
                            ?
                            classes.stepCircleDone
                            :
                            ''
                        }
                    `
                }
            >
                <span className={ classes.stepNumberText }>
                    4
                </span>
            </div>
        </div>
    );

};

export default StepBar;