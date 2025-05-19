import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const TermsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  line-height: 1.6;
`;

const TermsTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.text};
`;

const TermsSection = styled.section`
  margin-bottom: 30px;
`;

const TermsHeading = styled.h2`
  font-size: 1.5rem;
  margin: 20px 0 10px;
  color: ${({ theme }) => theme.colors.text};
`;

const TermsSubHeading = styled.h3`
  font-size: 1.2rem;
  margin: 15px 0 8px;
  color: ${({ theme }) => theme.colors.text};
`;

const TermsParagraph = styled.p`
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.textLight};
`;

const TermsList = styled.ul`
  margin: 0 0 15px 20px;
  color: ${({ theme }) => theme.colors.textLight};
`;

const TermsListItem = styled.li`
  margin-bottom: 8px;
`;

const Terms = () => {
  return (
    <>
      <SEO 
        title="Terms of Service"
        description="Inner Circle's Terms of Service outlines the rules and guidelines for using our leadership training and coaching services."
        keywords="terms of service, legal terms, membership terms, inner circle terms, refund policy"
        canonicalUrl="/terms"
      />
      <Header />
      <TermsContainer>
        <TermsTitle>BRILLIANT INNER CIRCLE EXECUTIVE MEMBERSHIP AGREEMENT</TermsTitle>
        
        <TermsSection>
          <TermsHeading>WELCOME</TermsHeading>
          <TermsParagraph>
            Thank you for joining the Brilliant Inner Circle, our exclusive community of Kingdom Executives. 
            We are committed to providing you with exceptional leadership development, strategic insights, 
            and peer collaboration opportunities that will empower you to lead with Kingdom advantage.
          </TermsParagraph>
        </TermsSection>
        
        <TermsSection>
          <TermsHeading>PROGRAM UNDERSTANDING</TermsHeading>
          <TermsParagraph>
            Prior to finalizing your membership, please ensure you have a comprehensive understanding of 
            the Inner Circle benefits and expectations. Our team is available to address any inquiries 
            you may have regarding monthly calls, proprietary LeaderForge training, or team implementation resources.
          </TermsParagraph>
        </TermsSection>
        
        <TermsSection>
          <TermsHeading>INTELLECTUAL PROPERTY RIGHTS</TermsHeading>
          <TermsParagraph>
            All materials, content, methodologies, and proprietary frameworks (including LeaderForge) 
            provided through the Brilliant Inner Circle are the exclusive intellectual property of 
            Brilliant Perspectives, LLC. These materials are protected by copyright and other intellectual 
            property laws. Reproduction, distribution, modification, or creation of derivative works 
            without express written consent is strictly prohibited. Members may utilize these materials 
            within their organization for leadership development purposes only.
          </TermsParagraph>
        </TermsSection>
        
        <TermsSection>
          <TermsHeading>ACCESS CREDENTIALS</TermsHeading>
          <TermsParagraph>
            Your membership provides you with individual access credentials to the LeaderForge platform 
            and associated resources. These credentials are designed for your use as the organizational 
            leader, with additional access provided for designated team members as specified in your 
            membership tier. Sharing access credentials with individuals outside your organization 
            constitutes a violation of this agreement and may result in immediate termination of your 
            membership without refund.
          </TermsParagraph>
        </TermsSection>
        
        <TermsSection>
          <TermsHeading>FINANCIAL TERMS</TermsHeading>
          <TermsSubHeading>Membership Investment</TermsSubHeading>
          <TermsParagraph>
            Executive members may select one of the following investment options:
          </TermsParagraph>
          <TermsList>
            <TermsListItem>Annual payment of $15,000 due upon enrollment</TermsListItem>
            <TermsListItem>Monthly installments of $1,500 due on the first of each month for 12 consecutive months</TermsListItem>
          </TermsList>
          
          <TermsSubHeading>Late Payment Policy</TermsSubHeading>
          <TermsList>
            <TermsListItem>All payments must be received by the 5th of each month</TermsListItem>
            <TermsListItem>Late payments may incur a fee of up to 5% of the monthly installment amount</TermsListItem>
            <TermsListItem>Non-payment for 30 days may result in suspension of membership benefits</TermsListItem>
          </TermsList>
        </TermsSection>
        
        <TermsSection>
          <TermsHeading>ATTENDANCE EXPECTATIONS</TermsHeading>
          <TermsParagraph>
            Participation in monthly Inner Circle calls (first Wednesday of each month) is highly 
            recommended to maximize the value of your investment. These exclusive sessions are 
            designed to foster collaboration and strategic insight among Kingdom Executives. In the 
            event you are unable to attend a live session, recordings will be made available within 
            48 hours. We encourage implementation of insights gained through these sessions within 
            your organization.
          </TermsParagraph>
        </TermsSection>
        
        <TermsSection>
          <TermsHeading>IN-PERSON EVENTS</TermsHeading>
          <TermsParagraph>
            Your Inner Circle membership includes access to exclusive in-person events designed for 
            Kingdom Executives. These events provide valuable networking opportunities, strategic 
            insights, and prophetic encouragement. While attendance is not mandatory, we strongly 
            encourage participation to maximize the relational benefits of the Inner Circle community.
          </TermsParagraph>
        </TermsSection>
        
        <TermsSection>
          <TermsHeading>LEADERFORGE IMPLEMENTATION</TermsHeading>
          <TermsParagraph>
            As part of your Inner Circle membership, you receive access to the LeaderForge platform 
            for training your leadership team. This platform includes:
          </TermsParagraph>
          <TermsList>
            <TermsListItem>Weekly leadership training videos covering the four quadrants: leadership, work culture, innovation, and economics</TermsListItem>
            <TermsListItem>Implementation worksheets and action planning tools</TermsListItem>
            <TermsListItem>Dashboard access for tracking team engagement and progress</TermsListItem>
            <TermsListItem>Support for team leaders in facilitating growth conversations</TermsListItem>
          </TermsList>
          <TermsParagraph>
            You are authorized to utilize these resources within your organization as specified in 
            your membership tier. Implementation support is available through monthly Inner Circle 
            calls and dedicated Q&A sessions.
          </TermsParagraph>
        </TermsSection>
        
        <TermsSection>
          <TermsHeading>NON-REFUNDABLE INVESTMENT</TermsHeading>
          <TermsParagraph>
            Your investment in the Brilliant Inner Circle is non-refundable. We provide a 7-day 
            satisfaction period from the date of your initial payment, during which you may request 
            a full refund should you find the program does not meet your expectations. After this 
            period, no refunds will be issued. We encourage you to fully commit to the program and 
            engage with all available resources to maximize your return on investment.
          </TermsParagraph>
        </TermsSection>
        
        <TermsSection>
          <TermsHeading>TERM OF MEMBERSHIP</TermsHeading>
          <TermsParagraph>
            Your Inner Circle membership provides access to program materials, monthly calls, coaching 
            opportunities, and the LeaderForge platform for a period of twelve (12) months from the 
            date of enrollment. Upon conclusion of this term, you will have the option to renew your 
            membership at the then-current rate. Without renewal, access to all Inner Circle resources 
            will be discontinued.
          </TermsParagraph>
        </TermsSection>
        
        <TermsSection>
          <TermsHeading>ACKNOWLEDGMENT</TermsHeading>
          <TermsParagraph>
            By executing this agreement, you acknowledge that you have read, understood, and agree to 
            be bound by all terms and conditions outlined herein. Furthermore, you affirm your commitment 
            to leading with Kingdom principles and contributing positively to the Brilliant Inner Circle 
            community.
          </TermsParagraph>
          <TermsParagraph>
            DIGITAL SIGNATURE CONSTITUTES ACCEPTANCE OF ALL TERMS AND CONDITIONS
          </TermsParagraph>
        </TermsSection>
      </TermsContainer>
      <Footer />
    </>
  );
};

export default Terms; 