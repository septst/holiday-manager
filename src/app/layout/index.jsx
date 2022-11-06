import React from "react";
import {Outlet} from "react-router-dom";
import AppHeader from "../header";
import {FlexColumnDiv, FlexRowDiv} from "../../shared/components/FlexDiv";
import AppSidebar from "../sidebar";

export default function Layout() {
    return (
        <>
            <AppHeader/>
            <FlexRowDiv>
                <FlexColumnDiv>
                    <FlexRowDiv>
                        <AppSidebar/>
                        <FlexColumnDiv>
                            <Outlet/>
                        </FlexColumnDiv>
                    </FlexRowDiv>
                </FlexColumnDiv>
            </FlexRowDiv>
        </>
    );
}