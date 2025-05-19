import React from 'react';
import styled from 'styled-components';

const OfferListContainer = styled.ul`
  width: 90%;
  margin: 24px auto 0 auto;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  padding: 0;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 98%;
  }
`;

const OfferItem = styled.li`
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid #f0f0f0;
  padding: 18px 12px 18px 0;
  position: relative;

  &:last-child {
    border-bottom: none;
  }
`;

const OfferIcon = styled.span`
  font-size: 1.1em;
  color: ${({ theme }) => theme.colors.text};
  margin: 6px 18px 0 18px;
  flex-shrink: 0;
`;

const OfferDetails = styled.div`
  flex: 1;
  min-width: 0;
`;

const OfferTitle = styled.div`
  font-weight: 700;
  font-size: 1.05em;
  margin-bottom: 2px;
  color: ${({ theme }) => theme.colors.text};
`;

const OfferDesc = styled.div`
  font-size: 0.97em;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 0;
`;

const OfferValue = styled.div`
  color: #00b6e6;
  font-weight: 700;
  font-size: 1em;
  margin-left: 18px;
  white-space: nowrap;
  align-self: flex-start;

  span {
    color: #888;
    font-weight: 400;
    font-size: 0.95em;
  }
`;

const OfferComputer = styled.img`
  display: block;
  margin: 0 auto 24px auto;
  max-width: 340px;
  width: 100%;
  height: auto;
`;

const OfferList = () => {
  const offers = [
    {
      title: "Team Leadership Training",
      description: "The LeaderForge platform allows you to extend your learning to your entire leadership team. Each week, team members watch one training video and complete focused worksheets that capture key insights and bold actions. Team leaders conduct brief 5-minute meetings with each team member to support their growth and implementation. The platform provides comprehensive dashboards for tracking engagement and progress across your organization.",
      value: "$9,997"
    },
    {
      title: "Monthly CEO Calls",
      description: "On the first Wednesday of each month, join an exclusive and intimate group of other Kingdom Executives. The call is designed to foster a culture of trust, collaboration, and continuous learning among top-tier leaders as we discuss and implement high-level proprietary growth strategies proven by decades of results.",
      value: "$9,997"
    },
    {
      title: "Hot Seat Coaching",
      description: "Get into the hot seat and receive laser-focused strategies that can be immediately implemented in your business. Double or triple your team's performance, solve challenging issues, and increase your business' value with strategic Kingdom-based approaches. Learn to lead from rest while empowering your teams to perform at levels they never thought possible.",
      value: "$2,997"
    },
    {
      title: "In-Person Events",
      description: "Join us for exclusive in-person networking and training events. Main sessions are crafted to empower Kingdom leaders. Experience a time of worship and directed learning from God including crafted prophetic encouragement. Enjoy collaborative sessions with lunch, laser coaching, and the development of your Kingdom action plan to consolidate learning and bring transformation to your business.",
      value: "$4,997"
    },
    {
      title: "Proprietary LeaderForge Training",
      description: "Dive into our high-level proprietary LeaderForge training and we'll show you the exact 'Step By Step' Method our clients use to maximize the value of their business, create a thriving company culture, and free you up to lead with Kingdom advantage. Based on Dionne's PhD research, LeaderForge brings the best thinking and practices from top leaders around the world into a single comprehensive framework covering leadership, work culture, innovation, and economics.",
      value: "$9,997"
    },
    {
      title: "LeaderForge Platform Access",
      description: "Access all trainings on demand at any time, any place with our LeaderForge platform. Chat, ask questions, and get real-time support through our comprehensive training ecosystem designed for Kingdom Executives.",
      value: "$1,997"
    }
  ];

  return (
    <OfferListContainer className="offer-list">
      <OfferComputer 
        src="/assets/Computer.png" 
        className="offer-computer-img" 
        alt="Computer" 
      />
      {offers.map((offer, index) => (
        <OfferItem key={index}>
          <OfferIcon className="offer-icon">➔</OfferIcon>
          <OfferDetails className="offer-details">
            <OfferTitle className="offer-title">{offer.title}</OfferTitle>
            <OfferDesc className="offer-desc">{offer.description}</OfferDesc>
          </OfferDetails>
          <OfferValue className="offer-value">
            {offer.value} <span>(Value)</span>
          </OfferValue>
        </OfferItem>
      ))}
    </OfferListContainer>
  );
};

export default OfferList; 