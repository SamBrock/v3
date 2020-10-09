import React from 'react';
import styled from 'styled-components';

import TLink from './transition-link';
import IconLogo from './icons/logo';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 9999;
  margin: 3rem 0;
	background: none;
  mix-blend-mode: exclusion;

  .logo {
    width: 5em;
    position: fixed;

    svg {
      filter: contrast(100%);
      z-index: 9999;

      path {
        fill: var(--white);
      }

    }
  }

  @media(max-width: 480px) {
    margin: 25px 0 0 0;

    .logo {
      width: 3rem;
      position: fixed;
    }
  }
`;

const Header = () => (
  <StyledHeader>
    <div className="logo"><TLink to='/'><IconLogo /></TLink></div>
  </StyledHeader>
)

export default Header;