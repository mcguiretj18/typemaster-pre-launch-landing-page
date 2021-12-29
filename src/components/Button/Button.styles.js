import styled from "@emotion/styled/macro";
import * as colors from "../../styles/colors";
import * as fonts from "../../styles/fonts";

export const StyledButton = styled.button(({ primary }) => ({
  background: primary ? colors.primary : colors.neutral700,
  color: primary ? colors.neutral900 : colors.secondaryHovered,
  border: 'none',
  borderRadius: '8px',
  fontSize: '1rem',
  lineHeight: '26px',
  textTransform: 'uppercase',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontFamily: fonts.primary,
  padding: '11px 14px'
}));
