import React from 'react';
import {
  EducationContainer,
  EducationTitle,
  EducationList,
  EducationItem,
  EducationDegree,
  EducationSchool,
  EducationYear
} from './EducationStyles';

const Education = () => {
    return (
      <EducationContainer id='education'>
        <EducationTitle>Education</EducationTitle>
        <EducationList>
            <EducationItem>
                <EducationDegree>Bachelors Degree</EducationDegree>
                <EducationSchool>Erciyes University</EducationSchool>
                <EducationYear>2018-2023</EducationYear>
            </EducationItem>
            <EducationItem>
                <EducationDegree>Bachelors Degree</EducationDegree>
                <EducationSchool>Bucharest Polytechnic University</EducationSchool>
                <EducationYear>2022-2023</EducationYear>
            </EducationItem>
        </EducationList>
      </EducationContainer>
    );
  };
  
  export default Education;
  