import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const HeroSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: auto;
  background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(235,245,255,0.9) 100%);
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  animation: ${fadeIn} 0.8s ease-out;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const ContentWrapper = styled.div`
  flex: 2;
  padding-right: 2rem;
  animation: ${fadeIn} 1s ease-out 0.2s both;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    background: linear-gradient(90deg, #0056b3, #007bff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
  }

  .bio-text {
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }

  .cta-container {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    padding-right: 0;

    .cta-container {
      justify-content: center;
    }
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
  animation: ${fadeIn} 1s ease-out 0.4s both;

  @media (max-width: 768px) {
    max-width: 250px;
    padding: 0.5rem 0; /* Adds less space for smaller screens */
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  object-fit: cover; /* Ensures the image covers the container without distortion */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
  }
`;

export const SkillsSection = styled.div`
  margin: 4rem auto;
  max-width: 1200px;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(245,250,255,0.9) 0%, rgba(225,240,255,0.9) 100%);
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  animation: ${fadeIn} 0.8s ease-out;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5rem 1rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }

  h3 {
    margin: 1rem 0 0.5rem;
    font-size: 1.1rem;
  }

  p {
    font-size: 0.9rem;
    color: #666;
  }
`;

export const CTAButton = styled.a`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  margin-top: 1.5rem;
  background: linear-gradient(90deg, #0056b3, #007bff);
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-weight: 600;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
    background: linear-gradient(90deg, #004494, #0069d9);
  }
`;
