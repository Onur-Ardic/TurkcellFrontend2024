import { tertiary } from "../../../common/colors";
import { Card, Title, Paragraph, Col } from "./styled";

const AcademicCard = ({
  company,
  title,
  startDate = "",
  endDate = "",
  desc = "",
}) => {
  return (
    <Card>
      <Col>
        <Title>{company}</Title>
        <Paragraph color={tertiary} fw="bold">
          {title}
        </Paragraph>
        {desc === "" ? null : <Paragraph>{desc}</Paragraph>}
      </Col>
      <Col>
        {startDate === "" ? null : (
          <Paragraph textalign="end">{startDate}</Paragraph>
        )}
        {endDate === "" ? null : (
          <Paragraph textalign="end">{endDate}</Paragraph>
        )}
      </Col>
    </Card>
  );
};

export default AcademicCard;
