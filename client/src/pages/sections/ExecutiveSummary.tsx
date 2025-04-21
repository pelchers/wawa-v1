import { FC } from 'react';
import SectionPage from '../../components/sections/SectionPage';

const ExecutiveSummary: FC = () => {
  return (
    <SectionPage 
      title="Executive Summary"
      nextSection={{
        title: "Mission Statement",
        path: "/mission-statement"
      }}
    >
      <div className="prose prose-lg max-w-none">
        <h3 className="font-wawaHeading text-xl font-semibold mb-4">About Our Company</h3>
        <p>
          Wawa is a leading convenience store brand with a strong regional presence and an expanding footprint across the U.S. 
          We aim to elevate the Wawa experience through strategic marketing initiatives.
        </p>
        
        <h3 className="font-wawaHeading text-xl font-semibold mt-6 mb-4">Our Vision</h3>
        <p>
          To become the go-to brand for consumers seeking convenience, quality, and community. Our vision is to expand 
          Wawa's influence and brand culture across the country through our three-pronged approach of social media expansion, 
          content generation, and physical presence growth.
        </p>

        <h3 className="font-wawaHeading text-xl font-semibold mt-6 mb-4">Strategic Goals</h3>
        <ul>
          <li>Increase brand awareness in new markets</li>
          <li>Enhance customer loyalty through digital engagement</li>
          <li>Expand physical presence through strategic partnerships</li>
          <li>Strengthen community connections through local initiatives</li>
        </ul>

        <h3 className="font-wawaHeading text-xl font-semibold mt-6 mb-4">Implementation Timeline</h3>
        <p>
          Our marketing plan will be implemented over the next 12 months, with key milestones in each quarter.
          We will continuously monitor performance metrics and adjust strategies as needed to ensure optimal results.
        </p>
      </div>
    </SectionPage>
  );
};

export default ExecutiveSummary; 