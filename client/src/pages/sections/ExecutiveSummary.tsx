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
          We aim to elevate the Wawa experience through strategic marketing initiatives focused on brand awareness and loyalty.
        </p>
        
        <h3 className="font-wawaHeading text-xl font-semibold mt-6 mb-4">Our Vision</h3>
        <p>
          To become the go-to brand for consumers seeking convenience, quality, and community through our 
          three strategic pillars: aggressive social media expansion and digital engagement, strategic 
          traditional media licensing with prominent cultural figures and brands with corporate event expansion (public exposure of events), and cost-effective 
          expansion into travel hubs and event centers nationwide.
        </p>

        <h3 className="font-wawaHeading text-xl font-semibold mt-6 mb-4">Strategic Focus</h3>
        <div className="space-y-4">
          <div className="bg-wawa-red-50 rounded-xl p-4">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Digital Engagement</h4>
            <ul className="list-disc pl-6">
              <li>100 Premiere Partnerships</li>
              <li>100-150 Sublevel Partnerships</li>
              <li>250K+ followers per platform</li>
            </ul>
          </div>
          
          <div className="bg-wawa-yellow-50 rounded-xl p-4">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-yellow-600 mb-2">Traditional Media</h4>
            <ul className="list-disc pl-6">
              <li>Celebrity brand partnerships</li>
              <li>Entertainment industry licensing</li>
              <li>Cultural icon collaborations</li>
            </ul>
          </div>
          
          <div className="bg-green-50 rounded-xl p-4">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-green-600 mb-2">Strategic Locations</h4>
            <ul className="list-disc pl-6">
              <li>Airport and travel hub presence</li>
              <li>Event center partnerships</li>
              <li>Regional market adaptation</li>
            </ul>
          </div>
        </div>

        <h3 className="font-wawaHeading text-xl font-semibold mt-6 mb-4">Cost-Efficient Approach</h3>
        <div className="bg-wawa-gray-50 rounded-xl p-4">
          <ul className="list-disc pl-6">
            <li>80% cost reduction vs traditional expansion methods</li>
            <li>Focus on brand awareness over immediate customer growth</li>
            <li>High-impact, low-investment market entry strategy</li>
            <li>Cross-channel performance optimization</li>
          </ul>
        </div>

        <h3 className="font-wawaHeading text-xl font-semibold mt-6 mb-4">Implementation Timeline</h3>
        <p>
          Our marketing plan will be implemented over the next 12 months, with dedicated teams tracking performance 
          across digital engagement, traditional media impact, and location metrics. Success will be measured through 
          brand recognition and market penetration rather than immediate customer acquisition.
        </p>
      </div>
    </SectionPage>
  );
};

export default ExecutiveSummary; 