import styled from "@emotion/styled/macro";
import * as fonts from "../../styles/fonts";
import * as colors from "../../styles/colors";

export const StyledHeadline = styled.div({
  padding: "0 24px 0 24px",
});

export const StyledTitle = styled.h1({
  fontFamily: fonts.primary,
  fontStyle: "normal",
  fontWeight: 900,
  fontSize: "48px",
  lineHeight: "48px",
  textTransform: "uppercase",
  color: colors.secondaryHovered,
  padding: "32px 0",
});

export const StyledContent = styled.p({
  margin: 0,
  fontFamily: fonts.primary,
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "1rem",
  lineHeight: "26px",
  color: colors.secondary,
  paddingBottom: "32px",
});

export const StyledActions = styled.div({
  display: "flex",
  alignItems: "center",
  padding: "0 0 32px 0",
  "& h3": {
    paddingLeft: "32px",
    fontFamily: fonts.primary,
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "1rem",
    lineHeight: "26px",
    textTransform: "uppercase",
    color: colors.secondary,
  },
});
