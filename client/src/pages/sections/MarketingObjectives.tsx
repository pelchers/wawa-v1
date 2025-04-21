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
        <h3 className="font-wawaHeading text-xl font-semibold mb-6">Primary Objectives</h3>
        
        <div className="bg-blue-50 rounded-xl p-6 mb-8">
          <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-4">Problem Statement</h4>
          <p className="mb-4">
            Despite strong regional brand recognition, Wawa faces limited national visibility compared to competitors, 
            restricting our growth potential in new markets and our ability to leverage our brand equity on a national scale.
          </p>
          
          <h4 className="font-wawaHeading text-lg font-semibold text-wawa-green-600 mb-4">Solution Approach</h4>
          <p>
            Leverage social media partnerships, live events, and airport stall licensing to increase brand awareness 
            and establish Wawa's presence in new markets without the immediate need for full store expansion.
          </p>
        </div>
        
        <h3 className="font-wawaHeading text-xl font-semibold mb-4">SMART Objectives</h3>
        
        <div className="space-y-6">
          <div className="bg-white border border-wawa-gray-200 rounded-xl p-6 shadow-sm">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Brand Awareness</h4>
            <p className="mb-2"><strong>Specific:</strong> Increase brand recognition in non-store markets by 30%</p>
            <p className="mb-2"><strong>Measurable:</strong> Track through brand awareness surveys and social media analytics</p>
            <p className="mb-2"><strong>Achievable:</strong> Through targeted digital campaigns and strategic partnerships</p>
            <p className="mb-2"><strong>Relevant:</strong> Directly supports expansion goals and market penetration</p>
            <p><strong>Time-bound:</strong> Achieve within 12 months</p>
          </div>
          
          <div className="bg-white border border-wawa-gray-200 rounded-xl p-6 shadow-sm">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Digital Engagement</h4>
            <p className="mb-2"><strong>Specific:</strong> Increase social media engagement by 50% and app downloads by 25%</p>
            <p className="mb-2"><strong>Measurable:</strong> Track through platform analytics and app download metrics</p>
            <p className="mb-2"><strong>Achievable:</strong> Through content strategy and user experience improvements</p>
            <p className="mb-2"><strong>Relevant:</strong> Strengthens customer relationships and drives loyalty</p>
            <p><strong>Time-bound:</strong> Achieve within 9 months</p>
          </div>
          
          <div className="bg-white border border-wawa-gray-200 rounded-xl p-6 shadow-sm">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Market Expansion</h4>
            <p className="mb-2"><strong>Specific:</strong> Establish 15 airport licensing partnerships in new markets</p>
            <p className="mb-2"><strong>Measurable:</strong> Count of new partnership agreements signed</p>
            <p className="mb-2"><strong>Achievable:</strong> Through targeted outreach and value proposition</p>
            <p className="mb-2"><strong>Relevant:</strong> Creates physical presence in new markets with lower investment</p>
            <p><strong>Time-bound:</strong> Achieve within 18 months</p>
          </div>
        </div>
        
        <h3 className="font-wawaHeading text-xl font-semibold mt-8 mb-4">Expected Outcomes</h3>
        <ul>
          <li>Increased brand recognition in target expansion markets</li>
          <li>Higher customer engagement and loyalty across digital platforms</li>
          <li>New revenue streams through licensing partnerships</li>
          <li>Stronger foundation for future physical expansion</li>
          <li>Enhanced competitive position against national convenience store chains</li>
        </ul>
      </div>
    </SectionPage>
  );
};

export default MarketingObjectives; 