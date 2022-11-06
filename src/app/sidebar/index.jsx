import React from "react";
import {SideBarLink, SideBarList, SideBarListItem, SideBarShell} from "./styles";

export default class AppSideBar extends React.Component {

    render() {
        return (
            <nav>
                <SideBarShell bgColour="orange" marginTop="1vh">
                    <SideBarList>
                        <SideBarListItem>
                            <SideBarLink to="dashboard">Dashboard</SideBarLink>
                        </SideBarListItem>
                        <SideBarListItem>
                            <SideBarLink to="tracker">Tracker</SideBarLink>
                        </SideBarListItem>
                    </SideBarList>
                </SideBarShell>
            </nav>
        )
    };
}