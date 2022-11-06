import React from "react";
import {Link} from "react-router-dom";
import {SideBarList, SideBarListItem, SideBarShell} from "./styles";

export default class AppSideBar extends React.Component {

    render() {
        return (
            <nav>
                <SideBarShell bgColour="orange" marginTop="1vh">
                    <SideBarList>
                        <SideBarListItem>
                            {/*<Link to="/">Dashboard</Link>*/}
                        </SideBarListItem>
                    </SideBarList>
                </SideBarShell>
            </nav>
        )
    };
}