import React from "react";
import {useRouteError} from "react-router-dom";
import {FlexDiv} from "../../../shared/styled-components/FlexDiv";

export default function PageNotFound() {
    const error = useRouteError();
    return (
        <FlexDiv id="page-not-found-error" marginLeft="1vw">
            <h1>Oops!</h1>
            <p>Sorry, we couldn't find this page.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </FlexDiv>
    );
}