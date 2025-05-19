import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  box-shadow: 0 2px 12px 0 rgba(42, 110, 207, 0.04);
  border-radius: 0 0 24px 24px;
  padding: 0;
  position: relative;
  z-index: 10;
`;

const HeaderInner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 32px 0 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    padding: 20px 12px 0 12px;
  }
`;

const HeaderLogo = styled.img`
  display: block;
  margin: 0 auto 8px auto;
  max-width: 120px;
  height: auto;
`;

const Header = () => {
  return (
    <HeaderContainer className="main-header">
      <HeaderInner className="header-inner">
        <HeaderLogo 
          src="/assets/InnerCircleLogo.png" 
          className="header-logo-img" 
          alt="Inner Circle Logo" 
        />
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header; 