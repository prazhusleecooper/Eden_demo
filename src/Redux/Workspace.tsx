import { createSlice } from "@reduxjs/toolkit";

export const workspaceSlice = createSlice({
    name: 'workspace',
    initialState: {
      fullName: '',
      displayName: '',
      workspaceName: '',
      workspaceUrl: '',
      plan: '',
      stepCompleted: 0,
    },
    reducers: {
        // ? Welcome form
        saveWelcomeForm: (state, action) => {

            state.fullName = action.payload.fullName;
            state.displayName = action.payload.displayName;
            
            state.stepCompleted = 1;
            
        },
        
        // ? Setup Workspace form
        saveSetupWorkspaceForm: (state, action) => {
            
            state.workspaceName = action.payload.workspaceName;
            state.workspaceUrl = action.payload.workspaceUrl;

            state.stepCompleted = 2;
            
        },
        
        // ? Choose Plan form
        savePlanForm: (state, action) => {
            
            state.plan = action.payload.plan;
            
            state.stepCompleted = 3;

        },
    }
});

export const { saveWelcomeForm, saveSetupWorkspaceForm, savePlanForm } = workspaceSlice.actions;

export default workspaceSlice.reducer;