import styled from 'styled-components';
import { NavLink as MovieLink } from 'react-router-dom';

export const NavLink = styled(MovieLink)`
  position: relative;
  z-index: 9;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: ${props => props.theme.colors.black};
  text-shadow: 0 0.4px 0.4px #fff, inset 40px 40px 40px #fff;
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: 500;

  &.active {
    color: #fff;
    background-color: #fd5523;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #fd5523;
  }

  @media screen and (min-width: 480px) {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`;

export const WrapperMovie = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  padding: 0 16px;
  font-weight: 500;

  h1,
  h2 {
    color: #fd5523;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 16px;
  }
`;
export const WrapperDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  padding: 16px;
  font-weight: 500;
`;

export const MainTitle = styled.h2`
  margin-bottom: ${props => props.theme.space[4]}px;
  text-align: center;
  color: ${props => props.theme.colors.accent};
  text-shadow: 0 0.4px 0.4px #fff, 0 0.4px 0.4px #4b1414;
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: 500;
  letter-spacing: 1.5px;

  @media screen and (min-width: 480px) {
    font-size: ${({ theme }) => theme.fontSizes.l};
  }
`;

export const MovieList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: 40px;
  margin: 0;
  padding: 0;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 40px;

  height: auto;
  margin-top: 30px;
  padding: 20px;
  border-bottom: 1px solid black;

  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 0) 0%,
    rgba(121, 9, 9, 0) 10%,
    rgb(134, 167, 147) 100%
  );
  font-size: ${({ theme }) => theme.fontSizes.xs};

  @media screen and (min-width: 480px) {
    justify-content: flex-start;
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`;

export const MovieInfoTitle = styled.h4`
  margin-bottom: 30px;
  color: orangered;
`;

export const VotePlayVideoBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  cursor: pointer;
`;

export const Btn = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;

export const AccentText = styled.span`
  color: #fd5523;
  font-weight: 700;
`;

export const ProductionLogo = styled.img`
  width: 15vw;
  height: auto;
`;

export const PosterMovie = styled.img`
  max-width: 100%;
  width: 45%;
  height: auto;

  border-radius: 8px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const Genres = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const Genre = styled.li`
  background-color: #b9e4c9;
  color: #fd5523;
  text-shadow: 0 0.4px 0.4px #fff;
  font-size: 12px;
  font-weight: 700;
  border-radius: 8px;
  padding: 2px 8px;
`;

export const WrapRelease = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const CircleRating = styled.div`
  position: absolute;
  bottom: 8px;
  right: 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 50px;
  width: 54px;
  height: 54px;

  text-shadow: 0 0.3px 0.3px #000;
  border-radius: 50%;
  padding: 2px;
`;

//--------------------------------
export const BackdropContainer = styled.section`
  position: relative;

  margin: 0 auto;
  margin-top: -80px;
  padding: 0;

  width: 100%;
  height: 450px;

  padding-left: 15px;
  padding-right: 15px;
`;

export const BackdropPoster = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  overflow: hidden;

  flex: 1 0 auto;

  img {
    opacity: 0.5;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    background-color: rgba(0, 0, 0, 1);
  }
`;

export const GradientBlockTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: ${({ theme }) => theme.gradientBlock};
`;

export const GradientBlockBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 450px;

  background: ${({ theme }) => theme.gradientHeroBanner};
`;