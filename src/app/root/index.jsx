import React from "react";
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import {AppRoutes} from "../routing";
import AppHeader from "../header";
import {FlexColumnDiv, FlexRowDiv} from "../../shared/styled-components/FlexDiv";
import AppSidebar from "../sidebar";

export default function Root() {
    return (
        <FlexRowDiv>
            <AppSidebar/>
            <FlexColumnDiv>
                <Outlet/>
            </FlexColumnDiv>
        </FlexRowDiv>
    );
}

function createRoutes(route, index) {
    return <Route key={index} path={route.path} element={route.routeTo()}/>;
}