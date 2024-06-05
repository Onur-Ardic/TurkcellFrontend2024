import { tertiary } from "../../../../common/colors";
import { Card, Title, Paragraph, Col } from "./styled";

const AcademicCard = ({
  company,
  title,
  startDate = "",
  endDate = "",
  desc = "",
  titlefs,
  direction = "column",
  justify = "space-between",
}) => {
  return (
    <Card aria-labelledby={`${company}-title`}>
      <Col direction={direction} justify={justify}>
        <Title titlefs={titlefs} id={`${company}-title`}>
          {company}
        </Title>
        <Title titlefs={titlefs} color={tertiary}>
          {title}
        </Title>
        {desc && <Paragraph>{desc}</Paragraph>}
      </Col>
      {(startDate || endDate) && (
        <Col direction={direction}>
          {endDate && <Paragraph textalign="end">{endDate}</Paragraph>}
          {startDate && <Paragraph textalign="end">{startDate}</Paragraph>}
        </Col>
      )}
    </Card>
  );
};

export default AcademicCard;
