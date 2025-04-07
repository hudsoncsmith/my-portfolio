import styled from 'styled-components';

const AcademicCallout = styled.div`
  padding: 1.5rem;
  margin: 1.5rem 0;
  background-color: rgba(235, 245, 255, 0.7);
  border-left: 4px solid #0056b3;
  border-radius: 5px;
  font-family: 'Georgia', serif;
  font-style: italic;
  line-height: 1.6;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  &:before {
    content: '\201C';
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    font-size: 2rem;
    color: rgba(0, 86, 179, 0.2);
    font-family: 'Georgia', serif;
  }

  &:after {
    content: '\201D';
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
    font-size: 2rem;
    color: rgba(0, 86, 179, 0.2);
    font-family: 'Georgia', serif;
  }

  em {
    font-weight: 600;
    color: #004494;
  }
`;

export default function Callout({ children }) {
  return <AcademicCallout>{children}</AcademicCallout>;
}
