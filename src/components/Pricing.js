import React from 'react';
import styled from 'styled-components';

const PricingSection = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  padding: 48px 0 40px 0;
  display: flex;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 32px 16px 24px 16px;
  }
`;

const PricingInner = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PricingTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 36px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.6rem;
    margin-bottom: 24px;
  }
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 36px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const PricingOption = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 18px;
  box-shadow: 0 4px 24px 0 rgba(42, 110, 207, 0.06);
  padding: 40px 32px 32px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: box-shadow 0.2s, transform 0.2s;
  position: relative;
  border: 1px solid #e6e9ef;

  &:hover {
    box-shadow: 0 8px 32px 0 rgba(42, 110, 207, 0.13);
    transform: translateY(-4px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 32px 16px 24px 16px;
  }
`;

const PricingBadge = styled.div`
  position: absolute;
  top: -12px;
  right: 24px;
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.secondary} 100%);
  color: white;
  font-weight: 700;
  font-size: 0.8rem;
  padding: 6px 12px;
  border-radius: 12px;
  letter-spacing: 0.05em;
  box-shadow: 0 2px 8px rgba(42, 110, 207, 0.2);
`;

const PricingLabel = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 10px;
  letter-spacing: 0.01em;
`;

const PricingPrice = styled.div`
  font-size: 2.1rem;
  font-weight: 800;
  color: #181c32;
  margin-bottom: 10px;
`;

const PricingMult = styled.span`
  font-size: 1.1rem;
  font-weight: 500;
  color: #888;
`;

const PricingDesc = styled.div`
  font-size: 1.08rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 18px;
  line-height: 1.5;
`;

const PricingFeatures = styled.ul`
  list-style-type: none;
  margin: 16px 0;
  padding: 0;
  width: 100%;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 12px 0;
  }
`;

const PricingFeature = styled.li`
  padding: 8px 0;
  position: relative;
  padding-left: 28px;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1rem;

  &:before {
    content: "✓";
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
  }
`;

const PricingButton = styled.a`
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary} 60%, ${({ theme }) => theme.colors.secondary} 100%);
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.1rem;
  font-weight: 700;
  border: none;
  border-radius: 24px;
  padding: 14px 36px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(42, 110, 207, 0.08);
  transition: transform 0.2s, box-shadow 0.2s;
  text-decoration: none;
  display: inline-block;
  width: 100%;
  max-width: 250px;
  margin: 16px 0 12px 0;

  &:hover, &:focus {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    outline: none;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(42, 110, 207, 0.15);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 12px 24px;
    font-size: 1rem;
  }
`;

const PricingGuarantee = styled.div`
  font-size: 0.85rem;
  color: #666;
  margin-top: 8px;
`;

const SpotsRemaining = styled.div`
  text-align: center;
  font-weight: 700;
  color: #e74c3c;
  font-size: 1rem;
  margin-top: 24px;
  letter-spacing: 0.05em;
`;

const ValueSummary = styled.div`
  width: 100%;
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.secondary} 100%);
  padding: 32px 0;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  margin: 24px 0 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 24px 16px;
  }
`;

const ValueSummaryInner = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ValueSummaryTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 8px;
  text-shadow: 0 1px 2px rgba(0,0,0,0.1);

  span {
    font-size: 2.2rem;
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.5rem;

    span {
      font-size: 1.8rem;
    }
  }
`;

const ValueSummarySubtitle = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  opacity: 0.9;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1rem;
  }
`;

const Pricing = () => {
  return (
    <>
      <ValueSummary className="value-summary">
        <ValueSummaryInner className="value-summary-inner">
          <ValueSummaryTitle className="value-summary-title">
            Total Value: <span><s>$29,985</s></span>
          </ValueSummaryTitle>
          <ValueSummarySubtitle className="value-summary-subtitle">
            Today only - Benefit from Huge Savings
          </ValueSummarySubtitle>
        </ValueSummaryInner>
      </ValueSummary>
      
      <PricingSection className="pricing-section" id="pricing">
        <PricingInner className="pricing-inner">
          <PricingTitle className="pricing-title">Choose Your Membership Option</PricingTitle>
          
          <PricingGrid className="pricing-grid">
            <PricingOption className="pricing-option">
              <PricingBadge className="pricing-badge">BEST VALUE</PricingBadge>
              <PricingLabel className="pricing-label">Yearly</PricingLabel>
              <PricingPrice className="pricing-price">$15,000</PricingPrice>
              <PricingDesc className="pricing-desc">
                One-time annual payment. Best value for committed leaders. Get access to everything for a full year.
              </PricingDesc>
              
              <PricingFeatures className="pricing-features">
                <PricingFeature>All trainings & resources</PricingFeature>
                <PricingFeature>Monthly CEO calls</PricingFeature>
                <PricingFeature>Hot seat coaching</PricingFeature>
                <PricingFeature>In-person events</PricingFeature>
                <PricingFeature>LeaderForge platform access</PricingFeature>
              </PricingFeatures>
              
              <PricingButton 
                href="https://buy.stripe.com/cNi5kv8apdj71Yx9wFbMQ04" 
                className="pricing-btn" 
                target="_blank" 
                rel="noopener"
              >
                Get Started Now
              </PricingButton>
              
              <PricingGuarantee className="pricing-guarantee">
                30-day money-back guarantee
              </PricingGuarantee>
            </PricingOption>
            
            <PricingOption className="pricing-option">
              <PricingLabel className="pricing-label">Monthly Plan</PricingLabel>
              <PricingPrice className="pricing-price">
                $1,500 <PricingMult className="pricing-mult">x 12 months</PricingMult>
              </PricingPrice>
              <PricingDesc className="pricing-desc">
                Flexible monthly payments. Spread your investment over time while getting full access.
              </PricingDesc>
              
              <PricingFeatures className="pricing-features">
                <PricingFeature>All trainings & resources</PricingFeature>
                <PricingFeature>Monthly CEO calls</PricingFeature>
                <PricingFeature>Hot seat coaching</PricingFeature>
                <PricingFeature>In-person events</PricingFeature>
                <PricingFeature>LeaderForge platform access</PricingFeature>
              </PricingFeatures>
              
              <PricingButton 
                href="https://buy.stripe.com/7sI4jt8zzdZN73qcMR" 
                className="pricing-btn" 
                target="_blank" 
                rel="noopener"
              >
                Get Started Now
              </PricingButton>
              
              <PricingGuarantee className="pricing-guarantee">
                30-day money-back guarantee
              </PricingGuarantee>
            </PricingOption>
          </PricingGrid>
          
          <SpotsRemaining className="spots-remaining">
            LIMITED NUMBER OF SPOTS AVAILABLE
          </SpotsRemaining>
        </PricingInner>
      </PricingSection>
    </>
  );
};

export default Pricing; 