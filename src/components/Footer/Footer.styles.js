import styled from "@emotion/styled/macro";
import * as colors from '../../styles/colors'

export const StyledFooter = styled.footer({
    width: '72.5%',
    fontSize: '1rem',
    lineHeight: '26px',
    fontWeight: 700,
    color: colors.secondary,
    padding: '96px 13.5% 50px 13.5%',
    '& span': {
        fontWeight: 500
    }
});
