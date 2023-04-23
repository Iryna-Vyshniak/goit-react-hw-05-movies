import styled from 'styled-components';

export const MoviesBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: ${({ theme }) => theme.space[5]}px;
  padding-bottom: ${({ theme }) => theme.space[5]}px;
  padding-left: ${({ theme }) => theme.space[4]}px;
  padding-right: ${({ theme }) => theme.space[4]}px;
  font-size: ${({ theme }) => theme.fontSizes.s};
  text-align: center;

  @media screen and (min-width: 480px) {
    font-size: ${({ theme }) => theme.fontSizes.l};
  }
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  margin-bottom: ${props => props.theme.space[4]}px;
  padding-right: ${props => props.theme.space[4]}px;
  padding-left: ${props => props.theme.space[4]}px;
  padding-top: ${props => props.theme.space[3]}px;
  padding-bottom: ${props => props.theme.space[3]}px;

  border: none;
  border-radius: ${props => props.theme.radii.normal};

  font-size: ${props => props.theme.fontSizes.m};
  color: ${props => props.theme.colors.accent};
  text-shadow: ${props => props.theme.shadows.textShadow};

  background-color: ${props => props.theme.colors.secondary};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: scale(1);

  &:hover,
  &:focus {
    transform: scale(0.8);
  }
`;

export const Poster = styled.img`
  display: inline-block;
  border-radius: 8px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
