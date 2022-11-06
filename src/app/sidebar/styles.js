import styled from "styled-components";
import {FlexColumnDiv, FlexDiv} from "../../shared/components/FlexDiv";
import {StyledLink} from "../../shared/components/StyledLink";

export const SideBarShell = styled(FlexColumnDiv)`
  padding: 0.5vw 1vh;
  color: inherit;
  width: 10vw;
`;

export const SideBarList = styled(FlexColumnDiv)`
  font-weight: bold;
  font-size: 1em;
`;

export const SideBarListItem = styled(FlexDiv)`
  border: 1px solid white;
  color: white !important;
  margin: 0.25vh 0vw;
  padding: 1vh 1vw;
`;

export const SideBarLink = styled(StyledLink)`
  color:white;
  font-size: 1em;
`;