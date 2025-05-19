import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 0 0 32px 32px;
  box-shadow: 0 4px 32px 0 rgba(42, 110, 207, 0.04);
  padding: 64px 0 48px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    border-radius: 0;
    padding: 32px 0 24px 0;
  }
`;

const HeroInner = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 12px;
    gap: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 12px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.1;
  margin: 0;
  letter-spacing: -0.01em;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.3rem;
  }
`;

const HeroSubtitle = styled.div`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 8px;
`;

const HeroButton = styled.a`
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary} 60%, ${({ theme }) => theme.colors.secondary} 100%);
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 24px;
  padding: 8px 24px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, border 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
`;

const Hero = () => {
  return (
    <HeroSection className="hero-modern">
      <HeroInner className="hero-modern-inner">
        <HeroTitle className="hero-modern-title">
          Unlock Your Kingdom Potential And Build A High Performance Team
        </HeroTitle>
        <HeroSubtitle className="hero-modern-subtitle">
          Transform your leadership and build a high performance team that functions from rest.
        </HeroSubtitle>
        <HeroButton href="#pricing" className="header-btn filled">
          Get Started Now
        </HeroButton>
      </HeroInner>
    </HeroSection>
  );
};

export default Hero; 