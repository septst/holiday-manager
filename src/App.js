import React from "react";
import './App.css';
import AppHeader from "./app/header";
import AppSidebar from "./app/sidebar";
import Main from "./app/main";
import {FlexColumnDiv, FlexRowDiv} from "./shared/styled-components/FlexDiv";
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import {AppRoutes} from "./app/routing";

function App() {
    return (
        <React.StrictMode>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        {
                            AppRoutes.map(createRoutes)
                        }
                    </Routes>
                </BrowserRouter>
                <AppHeader/>
                <FlexRowDiv>
                    <AppSidebar/>
                    <FlexColumnDiv>
                        <Outlet />
                    </FlexColumnDiv>
                </FlexRowDiv>
            </div>
        </React.StrictMode>
    );
}

function createRoutes(route, index) {
    return <Route key={index} path={route.path} element={route.routeTo()}/>;
}

export default App;
