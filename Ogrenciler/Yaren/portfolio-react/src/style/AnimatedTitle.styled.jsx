import styled from "styled-components";
import { bounce } from "./Animations";
const AnimatedTitle = styled.div`
  font-size: 2.5rem;
  font-family: monospace;
  font-weight: bold;
  color: #333;
  text-align: center;
  padding-top: 2rem;
  margin-bottom: 1rem;
  animation: ${bounce} 5s infinite;
  text-shadow: 4px 4px 10px #b3a7c4;
`;

export default AnimatedTitle;
