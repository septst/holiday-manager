import React from 'react';
import {AppHeaderBar} from "./styles";
import {StyledLink} from "../../shared/components/StyledLink";

export default function AppHeader() {
    return (
        <>
            <AppHeaderBar>
                <StyledLink to="/">Holiday Manager</StyledLink>
            </AppHeaderBar>
        </>
    );
}