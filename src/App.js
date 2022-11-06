import React from "react";
import './App.css';
import {FlexDiv} from "./shared/components/FlexDiv";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PageNotFound from "./app/error/page-not-found";
import Dashboard from "./app/dashboard";
import Tracker from "./app/tracker";
import Layout from "./app/layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <PageNotFound/>,
        children: [
            {
                path: "dashboard",
                element: <Dashboard/>
            },
            {
                path: "tracker",
                element: <Tracker/>
            }
        ]
    }
]);

function App() {
    return (
        <React.StrictMode>
            <FlexDiv className="App">
                <RouterProvider router={router}/>
            </FlexDiv>
        </React.StrictMode>
    );
}

export default App;
