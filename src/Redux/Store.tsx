import { configureStore } from "@reduxjs/toolkit";
import WorkspaceReducer from "./Workspace";

const Store = configureStore({
    reducer: {
        workspace: WorkspaceReducer,
    }
});

export type RootState = ReturnType<typeof Store.getState>

export type AppDispatch = typeof Store.dispatch

export default Store;