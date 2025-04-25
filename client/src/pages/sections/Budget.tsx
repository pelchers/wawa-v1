import { FC } from 'react';
import SectionPage from '../../components/sections/SectionPage';

const Budget: FC = () => {
  return (
    <SectionPage 
      title="Budget"
      prevSection={{
        title: "Execution",
        path: "/execution"
      }}
      nextSection={{
        title: "Conclusion",
        path: "/conclusion"
      }}
    >
      <div className="prose prose-lg max-w-none">
        {/* Strategic Overview - Updated with inline examples */}
        <div className="bg-wawa-red-50 rounded-xl p-6 mb-8">
          <h3 className="font-wawaHeading text-xl font-semibold text-wawa-red-600 mb-4">Strategic Investment Approach</h3>
          <p className="mb-4">
            Our budget allocation prioritizes high-impact, cost-efficient initiatives (i.e., digital partnerships over 
            traditional advertising, strategic licensing over owned locations) while maintaining flexibility for market 
            opportunities (i.e., contingency fund for emerging partnerships, rapid response capabilities).
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Digital Engagement</h4>
              <p className="text-sm text-wawa-gray-700">
                Structured partnership tiers with 100 premiere and 100-150 sublevel partnerships, targeting 
                250K+ followers per platform.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-yellow-600 mb-2">Media Licensing</h4>
              <p className="text-sm text-wawa-gray-700">
                Strategic entertainment partnerships with cultural figures, TV shows, movies, and major events 
                for brand integration.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-green-600 mb-2">Strategic Locations</h4>
              <p className="text-sm text-wawa-gray-700">
                Cost-effective expansion through travel hubs and event centers with regional product adaptation.
              </p>
            </div>
          </div>
        </div>

        <h3 className="font-wawaHeading text-xl font-semibold mb-6">Marketing Budget Allocation</h3>
        <p className="mb-8">
          Our budget allocation is strategically designed to maximize brand impact while maintaining a cost-efficient 
          approach. We focus on high-impact, low-cost initiatives across digital engagement, traditional media licensing, 
          and strategic location expansion, achieving an 80% cost reduction compared to traditional expansion methods.
        </p>
        
        {/* Budget Table */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-12">
          <h3 className="font-wawaHeading text-xl font-bold text-wawa-red-600 mb-6 text-center">Marketing Budget Allocation</h3>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-wawa-red-50 text-wawa-red-700">
                  <th className="py-3 px-4 text-left">Category</th>
                  <th className="py-3 px-4 text-center">Allocation</th>
                  <th className="py-3 px-4 text-right">Budget</th>
                  <th className="py-3 px-4 text-left">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-wawa-gray-200">
                <tr>
                  <td className="py-3 px-4 font-medium">Digital Marketing</td>
                  <td className="py-3 px-4 text-center">30%</td>
                  <td className="py-3 px-4 text-right">$3,000,000</td>
                  <td className="py-3 px-4 text-sm">Social media campaigns, influencer partnerships, segmented digital content</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Media Licensing</td>
                  <td className="py-3 px-4 text-center">25%</td>
                  <td className="py-3 px-4 text-right">$2,500,000</td>
                  <td className="py-3 px-4 text-sm">Celebrity partnerships, TV/movie licensing, entertainment collaborations</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Location & Product Development</td>
                  <td className="py-3 px-4 text-center">20%</td>
                  <td className="py-3 px-4 text-right">$2,000,000</td>
                  <td className="py-3 px-4 text-sm">Market-specific menu development, airport/event center adaptations</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Market Analysis & Metrics</td>
                  <td className="py-3 px-4 text-center">15%</td>
                  <td className="py-3 px-4 text-right">$1,500,000</td>
                  <td className="py-3 px-4 text-sm">Cross-channel tracking, market viability studies, expansion analysis</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Contingency</td>
                  <td className="py-3 px-4 text-center">10%</td>
                  <td className="py-3 px-4 text-right">$1,000,000</td>
                  <td className="py-3 px-4 text-sm">Rapid response to market opportunities, emergency funds</td>
                </tr>
                <tr className="bg-wawa-gray-50 font-semibold">
                  <td className="py-3 px-4">Total</td>
                  <td className="py-3 px-4 text-center">100%</td>
                  <td className="py-3 px-4 text-right">$10,000,000</td>
                  <td className="py-3 px-4">Annual marketing budget</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Budget Breakdown */}
        <h3 className="font-wawaHeading text-xl font-semibold mb-4">Channel-Specific Investments</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-4">Digital Engagement ($3,000,000)</h4>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Premiere Partnerships</span>
                  <span className="text-wawa-red-600">$1,200,000</span>
                </div>
                <p className="text-sm text-wawa-gray-600">
                  100 high-impact influencer partnerships with major digital creators and platforms.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Sublevel Partnerships</span>
                  <span className="text-wawa-red-600">$900,000</span>
                </div>
                <p className="text-sm text-wawa-gray-600">
                  100-150 targeted partnerships with niche market influencers and content creators.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Platform Growth</span>
                  <span className="text-wawa-red-600">$600,000</span>
                </div>
                <p className="text-sm text-wawa-gray-600">
                  Targeted campaigns to achieve 250K+ followers per social media platform.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Content Strategy</span>
                  <span className="text-wawa-red-600">$300,000</span>
                </div>
                <p className="text-sm text-wawa-gray-600">
                  Market-segmented content development and optimization across platforms.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-yellow-600 mb-4">Traditional Media ($2,500,000)</h4>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Celebrity Partnerships</span>
                  <span className="text-wawa-yellow-600">$1,000,000</span>
                </div>
                <p className="text-sm text-wawa-gray-600">
                  Strategic partnerships with prominent cultural figures and brand ambassadors.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Entertainment Licensing</span>
                  <span className="text-wawa-yellow-600">$900,000</span>
                </div>
                <p className="text-sm text-wawa-gray-600">
                  TV show and movie product placement, entertainment property licensing.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Cultural Integration</span>
                  <span className="text-wawa-yellow-600">$600,000</span>
                </div>
                <p className="text-sm text-wawa-gray-600">
                  Integration with major cultural events and entertainment venues.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Location & Product Development */}
        <div className="bg-green-50 rounded-xl p-6 mb-12">
          <h4 className="font-wawaHeading text-lg font-semibold text-wawa-green-600 mb-4">Location & Product Strategy ($2,000,000)</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-wawaHeading text-base font-semibold mb-3">Travel Hub Implementation</h5>
              <ul className="list-disc pl-6 space-y-2 text-sm text-wawa-gray-700">
                <li>Airport location partnerships and setup</li>
                <li>Event center presence establishment</li>
                <li>Transit hub optimization</li>
                <li>Location-specific operations</li>
              </ul>
            </div>
            <div>
              <h5 className="font-wawaHeading text-base font-semibold mb-3">Product Adaptation</h5>
              <ul className="list-disc pl-6 space-y-2 text-sm text-wawa-gray-700">
                <li>Regional menu customization</li>
                <li>Travel-friendly packaging solutions</li>
                <li>Event-specific offerings</li>
                <li>Market-specific testing</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Performance Metrics */}
        <h3 className="font-wawaHeading text-xl font-semibold mb-4">Performance Metrics</h3>
        
        <div className="bg-wawa-gray-50 rounded-xl p-6 mb-12">
          <p className="mb-6">
            Our investment strategy prioritizes brand awareness and market penetration over immediate customer 
            acquisition, with a focus on cost-efficient expansion and long-term brand equity building.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-4 text-center">Cost Efficiency</h4>
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 rounded-full bg-wawa-red-50 flex items-center justify-center">
                  <span className="text-2xl font-bold text-wawa-red-600">80%</span>
                </div>
              </div>
              <p className="text-sm text-center">
                Reduction in expansion costs compared to traditional methods through strategic partnerships.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-4 text-center">Brand Recognition</h4>
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 rounded-full bg-wawa-red-50 flex items-center justify-center">
                  <span className="text-2xl font-bold text-wawa-red-600">3.5x</span>
                </div>
              </div>
              <p className="text-sm text-center">
                Expected ROI on brand recognition initiatives through media value versus spend.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-4 text-center">Market Share</h4>
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 rounded-full bg-wawa-red-50 flex items-center justify-center">
                  <span className="text-2xl font-bold text-wawa-red-600">10%+</span>
                </div>
              </div>
              <p className="text-sm text-center">
                Target market share in new markets, exceeding current fast food brand penetration rates.
              </p>
            </div>
          </div>
        </div>

        {/* Implementation Examples Section */}
        <section className="implementation-examples mt-8 bg-wawa-gray-50 rounded-xl p-6">
          <h3 className="font-wawaHeading text-xl font-semibold text-wawa-red-600 mb-4">
            Implementation Examples
          </h3>
          
          <div className="space-y-6">
            {/* Budget Optimization Example */}
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">
                Example: Dynamic Budget Allocation System
              </h4>
              <p className="text-wawa-gray-700">
                Implementation of an AI-driven budget optimization system:
                Performance Tracking (i.e., real-time ROI monitoring by channel),
                Automated Reallocation (i.e., shifting funds to high-performing initiatives),
                Predictive Modeling (i.e., forecasting budget needs by quarter),
                Risk Management (i.e., maintaining optimal contingency levels).
                System includes monthly rebalancing and quarterly strategic reviews.
              </p>
              <div className="mt-4 text-sm text-wawa-gray-600">
                <strong>Expected Results:</strong> 30% improvement in marketing ROI,
                25% reduction in underutilized funds, 40% better budget forecasting accuracy.
              </div>
            </div>

            {/* Cost Control Example */}
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">
                Example: Strategic Cost Management Program
              </h4>
              <p className="text-wawa-gray-700">
                Development of a comprehensive cost control framework:
                Partnership Optimization (i.e., volume-based pricing tiers),
                Resource Sharing (i.e., cross-campaign asset utilization),
                Vendor Management (i.e., preferred partner program),
                Efficiency Metrics (i.e., cost-per-impact tracking).
                Program includes automated cost monitoring and variance alerts.
              </p>
              <div className="mt-4 text-sm text-wawa-gray-600">
                <strong>Expected Results:</strong> 35% reduction in operational costs,
                45% improvement in resource utilization, 20% better vendor pricing.
              </div>
            </div>

            {/* Investment Planning Example */}
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">
                Example: Strategic Investment Framework
              </h4>
              <p className="text-wawa-gray-700">
                Creation of a data-driven investment planning system:
                Market Analysis (i.e., opportunity scoring model),
                ROI Projection (i.e., multi-scenario financial modeling),
                Risk Assessment (i.e., investment risk rating system),
                Performance Tracking (i.e., investment outcome monitoring).
                Framework includes quarterly review and adjustment cycles.
              </p>
              <div className="mt-4 text-sm text-wawa-gray-600">
                <strong>Expected Results:</strong> 50% better investment success rate,
                40% improvement in capital efficiency, 30% faster investment decisions.
              </div>
            </div>
          </div>
        </section>
      </div>
    </SectionPage>
  );
};

export default Budget; 