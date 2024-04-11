import styled from 'styled-components';

export const StylesDisplay = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  background-color: rgba(23, 24, 26, 1);
  justify-content: end;
  border-radius: 3.7rem 3.7rem 0 0;
  align-items: end;
  flex-direction: column;
`;

export const StylesResult = styled.div`
  width: 100%;
  font-size: 4.8rem;
  height: fit-content;
  color: white;
  text-align: right;
  margin: 0 3rem;
`;

export const StylesCalculations = styled.div`
  width: 100%;
  max-width: 30rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  align-items: end;
  flex-direction: column;
  color: rgba(129, 129, 129, 1);
  font-size: 2.6rem;
  margin: 0 3rem;
`;
