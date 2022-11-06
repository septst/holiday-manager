import React from "react";
import AppHeader from "../header";
import {FlexColumnDiv, FlexRowDiv} from "../../shared/components/FlexDiv";
import AppSidebar from "../sidebar";
import AppFooter from "../footer";
import {StyledOutlet} from "./styles";

export default function Layout() {
    return (
        <>
            <AppHeader/>
            <FlexRowDiv>
                <FlexColumnDiv>
                    <FlexRowDiv>
                        <AppSidebar/>
                        <FlexColumnDiv>
                            <StyledOutlet/>
                        </FlexColumnDiv>
                    </FlexRowDiv>
                </FlexColumnDiv>
            </FlexRowDiv>
            <AppFooter />
        </>
    );
}