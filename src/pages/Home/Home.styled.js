import styled from 'styled-components';

export const TrendWrap = styled.div``;

export const MovieList = styled.ul`
  list-style: none;
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
`;

export const MovieItem = styled.li`
  text-decoration: none;
  flex-direction: column;
  flex-basis: 100%;
  display: flex;
  border: 1px solid gray;

  &:hover,
  &:focus {
    display: block;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
    transition-duration: 250ms;
    transition-timing-function: $timing-function;
  }
`;

export const MovieImage = styled.img`
width: 100%;
`;

export const MovieText = styled.p`
`;