import styled from "@emotion/styled/macro";
import * as fonts from "../../styles/fonts";
import * as colors from "../../styles/colors";
import * as bp from "../../styles/breakpoints";

export const StyledHeadline = styled.div({
  marginBottom: '64px'
});

export const StyledTitle = styled.h1({
  fontWeight: 900,
  fontStyle: "normal",
  maxWidth: bp.maxWidth,
  fontSize: "48px",
  lineHeight: "48px",
  textTransform: "uppercase",
  color: colors.secondaryHovered,
});

export const StyledContent = styled.p({
  margin: "32px 0",
  fontFamily: fonts.primary,
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "1rem",
  lineHeight: "26px",
  color: colors.secondary,
  maxWidth: bp.maxWidth,
});

export const StyledActions = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "3.125em",
  "& h3": {
    fontFamily: fonts.primary,
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "1rem",
    lineHeight: "26px",
    textTransform: "uppercase",
    color: colors.secondary,
  },
});
