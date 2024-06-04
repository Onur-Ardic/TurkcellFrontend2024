import { tertiary } from "../../../../common/colors";
import { Card, Title, Paragraph, Col } from "./styled";

const AcademicCard = ({
  company,
  title,
  startDate = "",
  endDate = "",
  desc = "",
  padding,
  br,
}) => {
  return (
    <Card padding={padding} br={br}>
      <Col>
        <Title>{company}</Title>
        <Title color={tertiary}>{title}</Title>
        {desc === "" ? null : <Paragraph>{desc}</Paragraph>}
      </Col>
      <Col>
        {endDate === "" ? null : (
          <Paragraph textalign="end">{endDate}</Paragraph>
        )}
        {startDate === "" ? null : (
          <Paragraph textalign="end">{startDate}</Paragraph>
        )}
      </Col>
    </Card>
  );
};

export default AcademicCard;
