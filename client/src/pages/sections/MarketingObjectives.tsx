import { FC } from 'react';
import SectionPage from '../../components/sections/SectionPage';

const MarketingObjectives: FC = () => {
  return (
    <SectionPage 
      title="Marketing Objectives"
      prevSection={{
        title: "Mission Statement",
        path: "/mission-statement"
      }}
      nextSection={{
        title: "Key Performance Areas",
        path: "/key-performance"
      }}
    >
      <div className="prose prose-lg max-w-none">
        <h3 className="font-wawaHeading text-xl font-semibold mb-6">Strategic Focus</h3>
        
        <div className="bg-blue-50 rounded-xl p-6 mb-8">
          <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-4">Market Opportunity</h4>
          <p className="mb-4">
            Despite strong regional brand recognition, Wawa has the opportunity to achieve national visibility 
            through a cost-efficient, three-pronged approach that prioritizes brand awareness and market 
            penetration over immediate customer acquisition.
          </p>
          
          <h4 className="font-wawaHeading text-lg font-semibold text-wawa-green-600 mb-4">Strategic Approach</h4>
          <p>
            Implement high-impact, low-cost initiatives across social media expansion, traditional media 
            licensing, and strategic location partnerships to achieve an 80% cost reduction compared to 
            traditional expansion methods.
          </p>
        </div>
        
        <h3 className="font-wawaHeading text-xl font-semibold mb-4">Core Objectives</h3>
        
        <div className="space-y-6">
          <div className="bg-white border border-wawa-gray-200 rounded-xl p-6 shadow-sm">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Digital Engagement</h4>
            <p className="mb-2"><strong>Specific:</strong> Achieve structured partnership tiers and platform growth</p>
            <p className="mb-2"><strong>Measurable:</strong> 
              • 100 Premiere Partnerships
              • 100-150 Sublevel Partnerships
              • 250K+ followers per platform
            </p>
            <p className="mb-2"><strong>Achievable:</strong> Through targeted outreach and content strategy</p>
            <p className="mb-2"><strong>Relevant:</strong> Builds brand presence and digital community</p>
            <p><strong>Time-bound:</strong> Complete partnership tiers within 12 months</p>
          </div>
          
          <div className="bg-white border border-wawa-gray-200 rounded-xl p-6 shadow-sm">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-yellow-600 mb-2">Traditional Media Licensing</h4>
            <p className="mb-2"><strong>Specific:</strong> Secure strategic entertainment and cultural partnerships</p>
            <p className="mb-2"><strong>Measurable:</strong> 
              • Celebrity brand ambassadors
              • TV/movie product placement
              • Entertainment property licensing
            </p>
            <p className="mb-2"><strong>Achievable:</strong> Through targeted media partnerships</p>
            <p className="mb-2"><strong>Relevant:</strong> Enhances brand recognition and cultural relevance</p>
            <p><strong>Time-bound:</strong> Establish key partnerships within 18 months</p>
          </div>
          
          <div className="bg-white border border-wawa-gray-200 rounded-xl p-6 shadow-sm">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-green-600 mb-2">Strategic Locations</h4>
            <p className="mb-2"><strong>Specific:</strong> Establish presence in high-traffic, low-investment locations</p>
            <p className="mb-2"><strong>Measurable:</strong> 
              • Airport location partnerships
              • Event center presence
              • Regional product adaptation
            </p>
            <p className="mb-2"><strong>Achievable:</strong> Through targeted location partnerships</p>
            <p className="mb-2"><strong>Relevant:</strong> Creates physical presence with minimal investment</p>
            <p><strong>Time-bound:</strong> Launch initial locations within 15 months</p>
          </div>
        </div>
        
        <h3 className="font-wawaHeading text-xl font-semibold mt-8 mb-4">Performance Targets</h3>
        <div className="bg-wawa-gray-50 rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Cost Efficiency</h4>
              <p className="text-wawa-gray-700">
                Achieve 80% cost reduction compared to traditional expansion methods through strategic partnerships 
                and low-investment initiatives.
              </p>
            </div>
            
            <div>
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Brand Recognition</h4>
              <p className="text-wawa-gray-700">
                Generate 3.5x ROI on brand recognition initiatives through media value versus spend across all channels.
              </p>
            </div>
            
            <div>
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Market Share</h4>
              <p className="text-wawa-gray-700">
                Achieve 10%+ market share in new markets, exceeding current fast food brand penetration rates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionPage>
  );
};

export default MarketingObjectives; 