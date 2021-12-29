import styled from "@emotion/styled/macro";
import * as fonts from "../../styles/fonts";
import * as colors from "../../styles/colors";

export const StyledFooter = styled.footer({
  fontFamily: fonts.primary,
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "1rem",
  lineHeight: "26px",
  color: colors.secondary,
  maxWidth: "272px",
  margin: "32px auto 50px auto",
  "& span": {
    fontWeight: "initial",
  },
});
