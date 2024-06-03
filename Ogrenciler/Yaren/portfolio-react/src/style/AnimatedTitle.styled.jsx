import styled from "styled-components";
import { bounce } from "./Animations";
const AnimatedTitle = styled.div`
  font-size: 3rem;!important;
  color: #333;
  text-align: center;
padding-top: 2rem;
  margin-bottom: 1rem;
  animation: ${bounce} 2s infinite;
`;

export default AnimatedTitle;
