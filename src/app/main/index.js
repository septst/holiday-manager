import React from "react";
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import {AppRoutes} from "../routing";
import {FlexColumnDiv} from "../../shared/styled-components/FlexDiv";

export default function Main() {
    return (
        <FlexColumnDiv>
            <Outlet />
        </FlexColumnDiv>
    );
}