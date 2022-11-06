import styled, {css} from "styled-components";

const sharedStyle = css`
  display: flex;
`;

export const FlexDiv = styled.div`
  background-color: ${props => props.bgColour || "transparent"};
  color: ${props => props.colour || "inherit"};
  border: ${props => props.showBorder ? "1px solid orange" : "none"};
  padding-top: ${props => props.padTop || "0vh"};
  padding-left: ${props => props.padLeft || "0vw"};
  margin-left: ${props => props.marginLeft || "0vw"};
  margin-top: ${props => props.marginTop || "0vw"};
`;

export const FlexRowDiv = styled(FlexDiv)`
  ${sharedStyle};
  flex-direction: row;
`;

export const FlexColumnDiv = styled(FlexDiv)`
  ${sharedStyle};
  flex-direction: column;
`;