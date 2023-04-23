import styled from 'styled-components';

export const MovieListItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  margin: 0 auto;
  padding-bottom: ${({ theme }) => theme.space[3]}px;

  max-width: 100%;
  width: 220px;
  height: 100%;

  transform: scale(1);
  border-radius: 8px;

  background-color: transparent;

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  backdrop-filter: blur(3.5px);
  transition: box-shadow 250ms linear;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 2px 24px -5px rgba(0, 0, 0, 0.74);
  }

  img {
    display: block;
    height: 100%;
    width: 100%;

    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    transition: transform 250ms linear;
    transform: scale(1);

    object-fit: cover;
    object-position: center;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const MoviePoster = styled.div`
  margin-bottom: 10px;
  overflow: hidden;
`;

export const MovieTitle = styled.h2`
  padding-left: ${({ theme }) => theme.space[2]}px;
  padding-right: ${({ theme }) => theme.space[2]}px;
  max-width: 100%;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  color: ${props => props.theme.colors.accent};
  text-shadow: 0 0.4px 0.4px #fff;
  text-align: center;

  font-size: ${props => props.theme.fontSizes.xs};
`;

export const Vote = styled.p`
  position: absolute;
  top: 10px;
  right: 10px;

  padding-left: ${({ theme }) => theme.space[2]}px;
  padding-right: ${({ theme }) => theme.space[2]}px;

  background-color: rgba(185, 228, 201, 0.473);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  color: ${props => props.theme.colors.white};
  text-shadow: 0 0.4px 0.4px #fd5523;

  border-radius: 8px;
  font-size: ${props => props.theme.fontSizes.xs};
`;

export const ReleaseDate = styled.p`
  position: absolute;
  top: 10px;
  left: 10px;

  padding-left: ${({ theme }) => theme.space[2]}px;
  padding-right: ${({ theme }) => theme.space[2]}px;

  background-color: rgba(185, 228, 201, 0.473);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  color: ${props => props.theme.colors.white};
  text-shadow: 0 0.4px 0.4px #fd5523;

  border-radius: 8px;
  font-size: ${props => props.theme.fontSizes.xs};
`;

export const CircleRating = styled.div`
  position: absolute;
  bottom: 4px;
  left: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 34px;
  height: 34px;

  text-shadow: 0 0.3px 0.3px #000;
  border-radius: 50%;
  padding: 2px;
`;