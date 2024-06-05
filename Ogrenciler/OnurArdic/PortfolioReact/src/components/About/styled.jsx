import styled from 'styled-components'

export const IconImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 60px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 15px;
    margin-top: 40px;
  }

  @media (max-width: 480px) {
    gap: 10px;
    margin-top: 20px;
  }
`

export const IconImage = styled.img`
  width: 80px;
  height: 80px;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`

export const AboutWrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  border: 1px solid #ccc;
  padding: 20px;
  box-shadow: 10px 10px 65px 0px rgba(28, 0, 133, 0.75);
  -webkit-box-shadow: 10px 10px 65px 0px rgba(28, 0, 133, 0.75);
  -moz-box-shadow: 10px 10px 65px 0px rgba(28, 0, 133, 0.75);

  @media (max-width: 768px) {
    padding: 15px;
    box-shadow: 5px 5px 50px 0px rgba(28, 0, 133, 0.75);
    -webkit-box-shadow: 5px 5px 50px 0px rgba(28, 0, 133, 0.75);
    -moz-box-shadow: 5px 5px 50px 0px rgba(28, 0, 133, 0.75);
  }

  @media (max-width: 480px) {
    padding: 10px;
    box-shadow: 3px 3px 40px 0px rgba(28, 0, 133, 0.75);
    -webkit-box-shadow: 3px 3px 40px 0px rgba(28, 0, 133, 0.75);
    -moz-box-shadow: 3px 3px 40px 0px rgba(28, 0, 133, 0.75);
  }
`
