import {
  ExperienceContainer,
  ExperienceTitle,
  ExperienceList,
  ExperienceItemRight,
  ExperienceItemLeft,
  ExperiencePosition,
  ExperienceInfo,
  ExperienceYear,
  LeftColumn,
  RightColumn,
} from './ExperienceStyles';

const Experience = () => {
  return (
    <ExperienceContainer id='experience'>
      <ExperienceTitle>Experience</ExperienceTitle>
      <ExperienceList>
        <LeftColumn>
          <ExperienceItemLeft>
            <ExperiencePosition>Internship at Turkticaret.net</ExperiencePosition>
            <ExperienceInfo>During this 2-month internship, I learned the basics of web applications. I developed a CV creation web application using PHP, HTML, CSS, and JavaScript.</ExperienceInfo>
            <ExperienceYear>2021</ExperienceYear>
          </ExperienceItemLeft>
          <ExperienceItemLeft>
            <ExperiencePosition>Internship at Weavers</ExperiencePosition>
            <ExperienceInfo>I gained deep experience and practices in the database field during this internship. Within a 2-month timeframe, I developed a task tracking application using .NET and SQL.</ExperienceInfo>
            <ExperienceYear>2023</ExperienceYear>
          </ExperienceItemLeft>
        </LeftColumn>
        <RightColumn>
          <ExperienceItemRight>
            <ExperiencePosition>Microsoft Azure Talent Camp</ExperiencePosition>
            <ExperienceInfo>I learned about cloud technology and gained practical experience in its usage during this 6-month camp organized by Microsoft.</ExperienceInfo>
            <ExperienceYear>2022</ExperienceYear>
          </ExperienceItemRight>
          <ExperienceItemRight>
            <ExperiencePosition>Turkcell Gençlere Yatırım Geleceğe Yazılım FrontEnd Training</ExperiencePosition>
            <ExperienceInfo>I attended this training offered by Turkcell to a limited number of individuals. During the 120-hour training, I developed various projects.</ExperienceInfo>
            <ExperienceYear>2024</ExperienceYear>
          </ExperienceItemRight>
        </RightColumn>
      </ExperienceList>
    </ExperienceContainer>
  );
};

export default Experience;