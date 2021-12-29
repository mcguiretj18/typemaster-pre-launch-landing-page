import styled from "@emotion/styled/macro";
import * as colors from "../../styles/colors";
import * as fonts from "../../styles/fonts";

export const StyledCard = styled.div({
  textAlign: "center",
});

export const StyledTitle = styled.h3({
  fontFamily: fonts.primary,
  fontStyle: "normal",
  fontWeight: 900,
  fontSize: "24px",
  lineHeight: "28px",
  textAlign: "center",
  textTransform: "uppercase",
  color: colors.secondaryHovered,
  padding: "24px",
  width: "180px",
  margin: "0 auto"
});

export const StyledParagraph = styled.p({
  fontFamily: fonts.primary,
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "1rem",
  lineHeight: "26px",
  textAlign: "center",
  color: colors.secondary,
  margin: "0 auto 64px auto",
  width: "327px",
});

export const StyledImg = styled.div({
  background: colors.primary,
  width: "65px",
  height: "65px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "16px",
  margin: "0 auto 48px auto",
});
