import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import { CSSTransition } from 'react-transition-group';
import { animated, useSpring, useTrail } from 'react-spring';

import Image from '../image';

const StyledHeroContainer = styled.div`
  padding-top: 160px;
  padding-bottom: 0;
  left: 0;
  grid-template-rows: 4fr 6fr;
  background: ${props => `linear-gradient(90deg, ${lighten(0.02, props.color)} 50%, ${props.color} 50%)`};

  @media(max-width: 1024px) {
    grid-template-rows: 1fr 2fr;
    padding-bottom: 3rem;
  }
  
  @media (max-width: 480px) {
    padding-top: 5rem;
    padding-bottom: 15px;
  }
`;

const StyledProjectLogo = styled.div`
  div {
    height: calc(100% - 4vh);
    width: 100%;
    max-width: 75%;
    margin: 0 auto;
    display: flex;
    align-items: center;

    img {
      max-height: 100%;
      max-width: 100%;
      width: auto;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
    }
    
    @media (max-width: 768px) {
      width: 100%;
    }

    @media (max-width: 480px) {
      height: 100%;
    }
  }
`;

const StyledProjectMainImg = styled.div`
   div {
    margin: 0 auto;
    width: 100%;
    max-width: 83%;
    grid-row: 2;
    overflow: visible !important;

    @media(max-width: 1550px) {
      max-width: 1100px;
    }
    @media(max-width: 1290px) {
      max-width: 900px;
      height: 100%;
    }
    @media(max-width: 1024px) {
      height: 100%;
      width: 100%;
    }

    img {
      position: absolute;
      width: 120%;
      left: -10%;

      @media(max-width: 1024px) {
        width: 95vh;
        left: 0;
        bottom: 0;
        margin: auto 0 0 0;
      }
    }
   }
`;

const StyledProjectMainImgPhone = styled.div`
    height: 45vh;
    margin: 0 auto;
    width: 100%;
    max-width: 1400px;
    grid-row: 2;
    overflow: visible !important;

    @media(max-width: 1550px) {
      max-width: 1100px;
    }
    display: flex;
    justify-content: center;

    .gatsby-image-wrapper {
      overflow: visible !important;
    }

    img {
      width: 100%;
    }

    .project__phone {
      max-width: 550px;
    }

    .project__phone:nth-child(1) {
      margin-top: 8%;
      @media(max-width: 1290px) {
        margin: 0;
      }
    }

    .project__phone:nth-child(2) {
      margin-left: -8%;
      z-index: 3;
    }

    .project__phone:nth-child(3) {
      margin-top: 8%;
      margin-left: -8%;
      @media(max-width: 1290px) {
        margin-top: 0;
        z-index: 3;
      }
    }

    @media(max-width: 1290px) {
      max-width: 900px;
    }
    
    @media(max-width: 480px) {
      display: none;
    }
`;

const StyledResponsiveMainImgPhone = styled.div`
  div {
    display: none;
    @media(max-width: 480px) {
      display: block;
      height: 100%;

      img {
        position: absolute;
        width: 65vh;
        left: 0;
        bottom: 0;
        margin: auto 0 0 0;
      }
    }
  }
`;

const ProjectHero = ({ color, title, type }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [translateY, setTranslateY] = useState(0);
  const [animation, setAnimation] = useState(false);

  const mainImgRef = useRef();

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    mainImgRef.current = requestAnimationFrame(getTranslateY);
    return () => cancelAnimationFrame(mainImgRef.current);
  })

  useEffect(() => {
    setTimeout(() => { setAnimation(true); }, 1200);
  }, [])

  const getTranslateY = () => {
    if (window.pageYOffset < window.innerHeight) {
      setTranslateY(window.pageYOffset);
    }
    mainImgRef.current = requestAnimationFrame(getTranslateY);
  }

  const logoProps = useSpring({ transform: `translateY(${translateY / 5}px)` });
  const mainImageProps = useSpring({ transform: `translateY(-${translateY / 10}px)` });
  const mainImagePhoneProps = useTrail(3, { transform: `translateY(-${translateY / 10}px)` });

  return (
    <StyledHeroContainer color={color} className="h-screen grid grid-rows-2 overflow-hidden max-w-full">
      <CSSTransition in={isMounted} timeout={1000} classNames="logofadeup">
        <StyledProjectLogo>
          <animated.div style={animation ? logoProps : {}}><Image filename={`project__${title}.png`} alt={title} classes={`project__logo ${!isMounted ? 'hide' : ''}`} /></animated.div>
        </StyledProjectLogo>
      </CSSTransition>
      {type === 'web' && (
        <CSSTransition in={isMounted} timeout={800} classNames="mainimagefadeup">
          <StyledProjectMainImg>
            <animated.div style={animation ? mainImageProps : {}} ref={mainImgRef}><Image filename={`project-slide__${title}.png`} alt={title} classes={`project__mainimg web ${!isMounted ? 'hide' : ''}`} /></animated.div>
          </StyledProjectMainImg>
        </CSSTransition>
      )}
      {type === 'phone' && (
        <>
          <CSSTransition in={isMounted} timeout={1200} classNames="phonesimagefadeup">
            <StyledProjectMainImgPhone className="project__mainimg phone" ref={mainImgRef}>
              <animated.div className="project__phone" style={animation ? mainImagePhoneProps[0] : {}}><Image filename={`project-slide__${title}-1.png`} alt={title} classes={!isMounted ? 'hide' : ''} /></animated.div>
              <animated.div className="project__phone" style={animation ? mainImagePhoneProps[1] : {}}><Image filename={`project-slide__${title}-2.png`} alt={title} classes={!isMounted ? 'hide' : ''} /></animated.div>
              <animated.div className="project__phone" style={animation ? mainImagePhoneProps[2] : {}}><Image filename={`project-slide__${title}-3.png`} alt={title} classes={!isMounted ? 'hide' : ''} /></animated.div>
            </StyledProjectMainImgPhone>
          </CSSTransition>
          <CSSTransition in={isMounted} timeout={800} classNames="mainimagefadeup">
            <StyledResponsiveMainImgPhone>
              <animated.div style={mainImageProps} ref={mainImgRef}><Image filename={`${title}-iphones.png`} alt={title} classes={`project__mainimg w-1024 ${!isMounted ? 'hide' : ''}`} /></animated.div>
            </StyledResponsiveMainImgPhone>
          </CSSTransition>
        </>
      )}
    </StyledHeroContainer>
  )
}

export default ProjectHero;