import styled from 'styled-components';

const AcademicList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin: 1.5rem 0;
  font-family: 'Georgia', serif;
  line-height: 1.6;
  width: 100%;
  box-sizing: border-box;

  li {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
    margin-bottom: 1rem;
    padding: 0.15rem 0.5rem 0.5rem 0.35rem;
    border-left: 3px solid #0056b3;
    transition: border-color 0.3s ease, background-color 0.3s ease;
    word-wrap: break-word;
    overflow-wrap: break-word;

    &:before {
      content: '\2022';
      flex-shrink: 0;
      color: #0056b3;
      font-weight: bold;
    }
  }

  @media (hover: hover) {
    li:hover {
      border-left-color: #004494;
      background-color: rgba(235, 245, 255, 0.5);
    }
  }

  em {
    font-style: italic;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    li {
      padding: 0.15rem 0 0.5rem 0.25rem;
      font-size: 0.95rem;
    }
  }
`;

export default function BookList({ children }) {
  return <AcademicList>{children}</AcademicList>;
}
