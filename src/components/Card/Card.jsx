import { StyledCard, StyledImg, StyledTitle, StyledParagraph } from "./Card.styles";

const Card = ({ iconSrc, iconAlt, title, content }) => {
  return (
    <StyledCard>
      <StyledImg>
        <img src={iconSrc} alt={iconAlt} />
      </StyledImg>
      <StyledTitle>{title}</StyledTitle>
      <StyledParagraph>{content}</StyledParagraph>
    </StyledCard>
  );
};

export default Card;
export { Card };
