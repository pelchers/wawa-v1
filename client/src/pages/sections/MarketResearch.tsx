import { FC } from 'react';
import SectionPage from '../../components/sections/SectionPage';

const MarketResearch: FC = () => {
  return (
    <SectionPage 
      title="Market Research"
      prevSection={{
        title: "SWOT Analysis",
        path: "/swot-analysis"
      }}
      nextSection={{
        title: "Marketing Strategy",
        path: "/marketing-strategy"
      }}
    >
      <div className="prose prose-lg max-w-none">
        <h3 className="font-wawaHeading text-xl font-semibold mb-6">Industry Overview</h3>
        <p className="mb-8">
          The convenience store industry continues to evolve rapidly, with increasing competition from both traditional 
          players and new entrants. Our research indicates several key trends that will shape the market in the coming years, 
          including digital integration, healthier food options, and enhanced customer experiences.
        </p>
        
        {/* Competitor Analysis Table */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-sm">
          <h3 className="font-wawaHeading text-xl font-bold text-wawa-red-600 mb-4">Competitor Analysis</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-wawa-red-50 text-wawa-red-700">
                  <th className="py-3 px-4 text-left">Competitor</th>
                  <th className="py-3 px-4 text-left">Strengths</th>
                  <th className="py-3 px-4 text-left">Weaknesses</th>
                  <th className="py-3 px-4 text-left">Market Share</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-wawa-gray-200">
                <tr>
                  <td className="py-3 px-4 font-medium">7-Eleven</td>
                  <td className="py-3 px-4">Global presence, 24/7 operations</td>
                  <td className="py-3 px-4">Limited fresh food options</td>
                  <td className="py-3 px-4">28%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Sheetz</td>
                  <td className="py-3 px-4">Made-to-order food, modern stores</td>
                  <td className="py-3 px-4">Limited East Coast presence</td>
                  <td className="py-3 px-4">15%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">QuickChek</td>
                  <td className="py-3 px-4">Fresh food, coffee program</td>
                  <td className="py-3 px-4">Smaller footprint, regional</td>
                  <td className="py-3 px-4">8%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Royal Farms</td>
                  <td className="py-3 px-4">Famous fried chicken, clean stores</td>
                  <td className="py-3 px-4">Limited menu variety</td>
                  <td className="py-3 px-4">12%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Cumberland Farms</td>
                  <td className="py-3 px-4">Strong loyalty program, food service</td>
                  <td className="py-3 px-4">Inconsistent store quality</td>
                  <td className="py-3 px-4">10%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Market Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-gray-800 mb-4">Customer Demographics</h4>
            <ul className="list-disc pl-6 text-wawa-base font-wawa text-wawa-gray-700">
              <li className="mb-2">Core customers: 25-54 years old</li>
              <li className="mb-2">60% commuters and travelers</li>
              <li className="mb-2">40% local neighborhood residents</li>
              <li className="mb-2">Average visit frequency: 2-3 times per week</li>
              <li className="mb-2">Growing segment: health-conscious millennials</li>
              <li className="mb-2">Increasing digital engagement across all age groups</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-gray-800 mb-4">Market Trends</h4>
            <ul className="list-disc pl-6 text-wawa-base font-wawa text-wawa-gray-700">
              <li className="mb-2">Growing demand for healthier on-the-go options</li>
              <li className="mb-2">Increased use of mobile ordering and payment</li>
              <li className="mb-2">Rising preference for sustainable and local products</li>
              <li className="mb-2">Shift toward electric vehicle charging stations</li>
              <li className="mb-2">Expansion of delivery services for convenience items</li>
              <li className="mb-2">Integration of technology for personalized experiences</li>
            </ul>
          </div>
        </div>

        {/* Consumer Insights */}
        <div className="bg-purple-50 rounded-xl p-6 mb-8">
          <h3 className="font-wawaHeading text-xl font-bold text-wawa-red-600 mb-4">Consumer Insights</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Convenience Factor</h4>
              <p>
                Our research shows that 78% of consumers rank convenience as the primary factor in choosing where to shop, 
                with location and speed of service being the top considerations.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Quality Perception</h4>
              <p>
                65% of consumers are willing to pay a premium for higher quality food options in convenience stores, 
                with fresh ingredients and made-to-order items being particularly valued.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Digital Engagement</h4>
              <p>
                Mobile app usage for convenience store purchases has increased by 45% in the past year, with loyalty 
                rewards and mobile ordering being the most utilized features.
              </p>
            </div>
          </div>
        </div>

        {/* Key Issues */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="font-wawaHeading text-xl font-bold text-wawa-red-600 mb-4">Key Market Challenges</h3>
          <ul className="list-disc pl-6 text-wawa-base font-wawa text-wawa-gray-700">
            <li className="mb-2">Need to differentiate from growing competition</li>
            <li className="mb-2">Balancing traditional offerings with healthier options</li>
            <li className="mb-2">Adapting to changing commuter patterns post-pandemic</li>
            <li className="mb-2">Maintaining quality and consistency across expanding locations</li>
            <li className="mb-2">Meeting increasing consumer expectations for digital integration</li>
            <li className="mb-2">Addressing sustainability concerns in packaging and operations</li>
          </ul>
        </div>
      </div>
    </SectionPage>
  );
};

export default MarketResearch; 