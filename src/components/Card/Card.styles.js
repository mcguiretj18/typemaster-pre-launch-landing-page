import styled from "@emotion/styled/macro";
import * as colors from "../../styles/colors";
import * as fonts from "../../styles/fonts";

export const StyledCard = styled.div({});

export const StyledTitle = styled.h3({
  fontFamily: fonts.primary,
  fontStyle: "normal",
  fontWeight: 900,
  fontSize: "24px",
  lineHeight: "28px",
  textAlign: "center",
  textTransform: "uppercase",
  maxWidth: "180px",
  margin: "0 auto 24px auto",
  color: colors.secondaryHovered,
});

export const StyledParagraph = styled.p({
  fontFamily: fonts.primary,
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "1rem",
  lineHeight: "26px",
  textAlign: "center",
  color: colors.secondary,
  marginBottom: "64px",
});

export const StyledImg = styled.div({
  background: colors.primary,
  borderRadius: "16px",
  maxWidth: "65px",
  minHeight: "65px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto 48px auto",
});
