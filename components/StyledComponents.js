import styled from 'styled-components';

export const HeroSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const ContentWrapper = styled.div`
  flex: 2;
  padding-right: 2rem;

  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center; /* Ensures proper alignment */
  width: 100%;
  max-width: 400px;
  min-width: 150px;
  margin: auto;
  padding: 1rem 0; /* Adds space above and below the image */

  @media (max-width: 768px) {
    max-width: 250px;
    padding: 0.5rem 0; /* Adds less space for smaller screens */
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  object-fit: cover; /* Ensures the image covers the container without distortion */
`;
