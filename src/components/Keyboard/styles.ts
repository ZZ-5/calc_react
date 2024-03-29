import styled from 'styled-components';

export const StylesKeyboard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgba(23, 24, 26, 1);
  justify-content: center;
  border-radius: 0 0 3.7rem 3.7rem;
`;

export const StylesKeyboardKeys = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0 2rem;
  align-items: end;
  margin: 3rem 0;
`;

export const StylesKeyCount = styled.button`
  width: 100%;
  max-width: 6.2rem;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(48, 49, 54, 1);
  border-radius: 1.6rem;
  color: rgba(41, 168, 255, 1);
  font-size: 3.2rem;
  cursor: pointer;
`;

export const StylesKeyDel = styled.button`
  width: 100%;
  max-width: 6.2rem;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(97, 97, 97, 1);
  border-radius: 1.6rem;
  color: rgba(165, 165, 165, 1);
  font-size: 2.4rem;
  cursor: pointer;
`;

export const StylesKeyDelImg = styled.img`
  background-color: transparent;
`;

export const StylesKeySign = styled.button`
  width: 100%;
  max-width: 6.2rem;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.6rem;
  background-color: rgba(0, 93, 178, 1);
  color: rgba(51, 157, 255, 1);
  font-size: 3.2rem;
  cursor: pointer;
`;

export const StylesWideKeyCount = styled.button`
  width: 100%;
  max-width: 14.4rem;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(48, 49, 54, 1);
  border-radius: 1.6rem;
  color: rgba(41, 168, 255, 1);
  font-size: 3.2rem;
  cursor: pointer;
`;

export const StylesWideKeyDel = styled.button`
  width: 100%;
  max-width: 14.4rem;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(97, 97, 97, 1);
  border-radius: 1.6rem;
  color: rgba(165, 165, 165, 1);
  font-size: 3.2rem;
  cursor: pointer;
`;
