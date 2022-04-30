import styled from 'styled-components';

export const MovieDetails = styled.div`
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--text-color);

  img {
    width: 250px;
    height: auto;
    margin-right: 20px;
  }
`;

export const MovieTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const DetailName = styled.p`
  margin-bottom: 10px;
  margin-top: 20px;
  font-weight: 700;
`;



export const NoPoster = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 150px;
  height: 300px;
  border: 2px solid var(--text-color);
  margin-right: 20px;
`;