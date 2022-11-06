import Dashboard from "../dashboard";
import Tracker from "../tracker";
import React from "react";

export const AppRoutes = [
    {
        path: "/",
        exact: true,
        routeTo: () => <Dashboard/>
    },
    {
        path: "/dashboard",
        exact: true,
        routeTo: () => <Dashboard/>
    },
    {
        path: "/tracker",
        exact: true,
        routeTo: () => <Tracker/>
    }
];