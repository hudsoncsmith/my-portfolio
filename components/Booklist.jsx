import styled from 'styled-components';

const AcademicList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin: 1.5rem 0;
  font-family: 'Georgia', serif;
  line-height: 1.6;

  li {
    margin-bottom: 1rem;
    padding-left: 1.5rem;
    position: relative;
    border-left: 3px solid #0056b3;
    padding-bottom: 0.5rem;
    transition: all 0.3s ease;

    &:hover {
      border-left-color: #004494;
      background-color: rgba(235, 245, 255, 0.5);
      padding-left: 2rem;
    }

    &:before {
      content: '\2022';
      position: absolute;
      left: 0.5rem;
      color: #0056b3;
      font-weight: bold;
    }
  }

  em {
    font-style: italic;
    font-weight: 500;
  }
`;

export default function BookList({ children }) {
  return <AcademicList>{children}</AcademicList>;
}
