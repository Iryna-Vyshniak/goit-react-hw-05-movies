import styled from 'styled-components';

export const GenresBlock = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
export const Genre = styled.li`
  box-shadow: 1px 1px 2px #fff, 1px 1px 2px #fff;
  background-color: rgba(185, 228, 201, 0.973);
  color: rgb(0, 0, 0);
  text-shadow: 0 0.5px 0.5px #fff;
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: bold;
  border-radius: 5px;
  padding: 0 6px;

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.s};
  }
`;
