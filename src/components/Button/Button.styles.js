import styled from "@emotion/styled/macro";
import * as colors from "../../styles/colors";
import * as fonts from "../../styles/fonts";

export const StyledButton = styled.button(
  {
    width: "151px",
    fontSize: "1rem",
    fontFamily: fonts.primary,
    lineHeight: "26px",
    textTransform: "uppercase",
    fontWeight: 700,
    border: "none",
    fontStyle: "normal",
    padding: "11px 14px",
    borderRadius: "8px",
    flexBasis: "151px",
  },
  ({ primary }) => ({
    background: primary ? colors.primary : colors.neutral700,
    color: primary ? colors.neutral900 : colors.secondaryHovered,
  })
);
