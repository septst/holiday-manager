import React from "react";
import './App.css';
import AppHeader from "./app/header";
import AppSidebar from "./app/sidebar";
import Main from "./app/main";
import {FlexColumnDiv, FlexDiv, FlexRowDiv} from "./shared/styled-components/FlexDiv";
import {BrowserRouter, createBrowserRouter, Outlet, Route, RouterProvider, Routes} from "react-router-dom";
import Root from "./app/root";
import PageNotFound from "./app/error/page-not-found";
import Dashboard from "./app/dashboard";
import Tracker from "./app/tracker";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <PageNotFound/>,
        children:[
            {
                path:"dashboard",
                element: <Dashboard />
            },
            {
                path:"tracker",
                element: <Tracker />
            }
        ]
    }
]);

function App() {
    return (
        <React.StrictMode>
            <FlexDiv className="App">
                <AppHeader/>
                <FlexRowDiv>
                    <FlexColumnDiv>
                        <RouterProvider router={router}/>
                    </FlexColumnDiv>
                </FlexRowDiv>
            </FlexDiv>
        </React.StrictMode>
    );
}

export default App;
