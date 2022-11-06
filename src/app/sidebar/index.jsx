import React from "react";
import {SideBarLink, SideBarList, SideBarListItem, SideBarShell} from "./styles";
import "./sidebar.css";

export default class AppSideBar extends React.Component {

    render() {
        let activeStyle = {
            textDecoration: "underline !important",
            backgroundColor: "white !important",
            color: "inherit !important"
        };

        return (<nav>
            <SideBarShell>
                <SideBarList>
                    <SideBarListItem>
                        <SideBarLink to="dashboard"
                                     style={({isActive}) => (isActive ? activeStyle : undefined)}
                                     exact="true">
                            Dashboard
                        </SideBarLink>
                    </SideBarListItem>
                    <SideBarListItem>
                        <SideBarLink to="tracker"
                                     style={({isActive}) => isActive ? activeStyle : undefined}
                                     exact="true">
                            Tracker
                        </SideBarLink>
                    </SideBarListItem>
                </SideBarList>
            </SideBarShell>
        </nav>)
    };
}