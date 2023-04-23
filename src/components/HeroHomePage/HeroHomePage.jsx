import React from 'react';
import {
  BackdropImg,
  GradientBlockBottom,
  GradientBlockTop,
  HeroContainer,
  SectionHero,
} from './HeroHomePage.styled';
import HeroPoster from 'assets/hero-poster.jpeg';

export const HeroHomePage = ({ movies }) => {
  const { poster_path } = movies[Math.floor(Math.random() * 20)];
  return (
    <>
      <SectionHero>
        <HeroContainer>
          <GradientBlockTop></GradientBlockTop>
          {poster_path ? (
            <BackdropImg>
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt="poster opacity"
                width="1200"
              />
            </BackdropImg>
          ) : (
            <BackdropImg>
              <img src={HeroPoster} alt="poster opacity" width="1200" />
            </BackdropImg>
          )}
          <GradientBlockBottom></GradientBlockBottom>
        </HeroContainer>
      </SectionHero>
    </>
  );
};
