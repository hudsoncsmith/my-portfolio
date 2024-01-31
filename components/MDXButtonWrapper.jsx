// MDXButtonWrapper.js
import styled from 'styled-components';
import Button from './CustomButton';

const MDXButtonWrapper = styled.div`
  /* Center the button */
  display: flex;
  justify-content: center;
  align-items: center;
  
  /* Add MDX-specific styles here */
  margin-bottom: 20px;
`;

export default ({ children }) => <MDXButtonWrapper>{children}</MDXButtonWrapper>;
