import { Button } from "..";
import {
  StyledHeadline,
  StyledTitle,
  StyledContent,
  StyledActions,
} from "./Headline.styles";

const Headline = () => {
  return (
    <StyledHeadline>
      <StyledTitle>Typemaster Keyboard</StyledTitle>
      <StyledContent>
        Improve your productivity and gaming without breaking the bank. Upgrade
        to a high quality mechanical typing experience.
      </StyledContent>
      <StyledActions>
        <Button primary>Pre-order now</Button>
        <h3>Release on 5/27</h3>
      </StyledActions>
    </StyledHeadline>
  );
};

export default Headline;
export { Headline };
