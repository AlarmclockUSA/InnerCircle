import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const WhyPartnerSection = styled.section`
  width: 100%;
  background: none;
  display: flex;
  justify-content: center;
  margin: 64px 0 32px 0;
`;

const WhyPartnerInner = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 8px;
  }
`;

const WhyPartnerEyebrow = styled.div`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  margin-bottom: 12px;
  text-align: center;
`;

const WhyPartnerTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 800;
  color: #181c32;
  margin-bottom: 18px;
  text-align: center;
  letter-spacing: -0.01em;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.3rem;
  }
`;

const WhyPartnerDesc = styled.div`
  font-size: 1.13rem;
  color: #555;
  text-align: center;
  max-width: 700px;
  margin-bottom: 44px;
  line-height: 1.6;
`;

const WhyPartnerCarousel = styled.div`
  position: relative;
  width: 100%;
  max-width: 520px;
  margin: 0 auto 32px auto;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 98vw;
  }
`;

const WhyPartnerCarouselTrack = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
`;

const WhyPartnerCarouselSlide = styled.div`
  display: none;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  min-height: 120px;
  opacity: 0;
  transition: opacity 0.6s ease-in-out;
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;

  &.active {
    display: flex;
    opacity: 1;
    position: relative;
    pointer-events: auto;
  }
`;

const WhyPartnerCarouselContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const WhyPartnerFeatureTitle = styled.div`
  font-size: 1.08rem;
  font-weight: 700;
  color: #181c32;
  margin-bottom: 4px;
  text-align: center;
`;

const WhyPartnerFeatureDesc = styled.div`
  font-size: 1.01rem;
  color: #555;
  text-align: center;
  line-height: 1.6;
`;

const WhyPartnerCarouselArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid #e0e0e0;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1.5rem;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  transition: background 0.2s, border 0.2s;

  &:hover {
    background: #f3f0ff;
    border: 1px solid ${({ theme }) => theme.colors.accent};
  }

  &.left {
    left: -48px;
  }

  &.right {
    right: -48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    &.left {
      left: -8px;
    }
    &.right {
      right: -8px;
    }
  }
`;

const WhyPartnerCarouselDots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 20px;
  }
`;

const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.active ? props.theme.colors.accent : '#e0e0e0'};
  cursor: pointer;
  transition: background 0.2s;
`;

const FeatureCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoAdvanceInterval = useRef(null);
  
  const features = [
    {
      title: "12 Kingdom Executive Trainings",
      description: "One per month. Transform your executive leadership with elite-level training that combines spiritual wisdom with practical business acumen. Each session equips you to lead with Kingdom advantage."
    },
    {
      title: "12 Kingdom Leadership Habits",
      description: "Develop powerful leadership routines that create lasting transformation. These proven habits will elevate your leadership effectiveness and create a culture of excellence within your organization."
    },
    {
      title: "LeaderForge Platform",
      description: "Train your team with dashboards to track their progress. Our proprietary system ensures accountability, measures growth, and accelerates development at every level of your organization."
    },
    {
      title: "Join Other Kingdom Leaders",
      description: "Share best practices and enjoy laser coaching. Connect with like-minded executives who understand the unique challenges of leading with Kingdom values in today's business environment."
    }
  ];

  const showNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
    resetAutoAdvance();
  };

  const showPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + features.length) % features.length);
    resetAutoAdvance();
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    resetAutoAdvance();
  };

  const startAutoAdvance = () => {
    // Clear any existing interval before setting a new one
    stopAutoAdvance();
    autoAdvanceInterval.current = setInterval(showNext, 8000);
  };

  const stopAutoAdvance = () => {
    if (autoAdvanceInterval.current) {
      clearInterval(autoAdvanceInterval.current);
      autoAdvanceInterval.current = null;
    }
  };

  const resetAutoAdvance = () => {
    // Only restart auto-advance if the carousel is not being hovered
    if (!isHovered) {
      startAutoAdvance();
    }
  };

  useEffect(() => {
    startAutoAdvance();
    
    return () => {
      stopAutoAdvance();
    };
  }, []);

  useEffect(() => {
    // Handle auto-advance based on hover state
    if (isHovered) {
      stopAutoAdvance();
    } else {
      startAutoAdvance();
    }
  }, [isHovered]);

  return (
    <WhyPartnerSection className="why-partner-section">
      <WhyPartnerInner className="why-partner-inner">
        <WhyPartnerEyebrow className="why-partner-eyebrow">Why Partner With Us</WhyPartnerEyebrow>
        <WhyPartnerTitle className="why-partner-title">Join the Inner Circle today.</WhyPartnerTitle>
        <WhyPartnerDesc className="why-partner-desc">
          Partner with Inner Circle to create both immediate and long-term value for your team. 
          Experience monthly executive trainings, leadership habits, a powerful platform, and a 
          community of Kingdom leaders on the same journey.
        </WhyPartnerDesc>
        
        <WhyPartnerCarousel 
          id="why-partner-carousel" 
          className="why-partner-carousel"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            startAutoAdvance();
          }}
        >
          <WhyPartnerCarouselTrack className="why-partner-carousel-track">
            {features.map((feature, index) => (
              <WhyPartnerCarouselSlide 
                key={index} 
                className={`why-partner-carousel-slide ${index === currentIndex ? 'active' : ''}`}
              >
                <WhyPartnerCarouselContent className="why-partner-carousel-content">
                  <WhyPartnerFeatureTitle className="why-partner-feature-title">
                    {feature.title}
                  </WhyPartnerFeatureTitle>
                  <WhyPartnerFeatureDesc className="why-partner-feature-desc">
                    {feature.description}
                  </WhyPartnerFeatureDesc>
                </WhyPartnerCarouselContent>
              </WhyPartnerCarouselSlide>
            ))}
          </WhyPartnerCarouselTrack>
          
          <WhyPartnerCarouselArrow 
            className="why-partner-carousel-arrow left" 
            aria-label="Previous"
            onClick={showPrev}
          >
            &#8592;
          </WhyPartnerCarouselArrow>
          
          <WhyPartnerCarouselArrow 
            className="why-partner-carousel-arrow right" 
            aria-label="Next"
            onClick={showNext}
          >
            &#8594;
          </WhyPartnerCarouselArrow>
          
          <WhyPartnerCarouselDots className="why-partner-carousel-dots">
            {features.map((_, index) => (
              <Dot 
                key={index} 
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                active={index === currentIndex}
                onClick={() => goToSlide(index)}
              />
            ))}
          </WhyPartnerCarouselDots>
        </WhyPartnerCarousel>
      </WhyPartnerInner>
    </WhyPartnerSection>
  );
};

export default FeatureCarousel; 