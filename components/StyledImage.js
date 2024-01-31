// StyledImageWithText.js
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

const StyledImage = styled.img`
  width: 200px; /* Adjust the width as needed */
  height: 200px; /* Adjust the height as needed */
  border-radius: 50%; /* Make the image circular */
  object-fit: cover; /* Ensure the image covers the circular area */
  margin-left: auto; /* Move the image to the right */
`;

export { Container, StyledImage, TextContainer };