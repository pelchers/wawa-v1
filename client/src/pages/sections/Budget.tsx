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
        <h3 className="font-wawaHeading text-xl font-semibold mb-6">Marketing Budget Allocation</h3>
        <p className="mb-8">
          Our budget allocation is strategically designed to support our marketing objectives while ensuring 
          efficient use of resources. We've prioritized investments in digital channels, strategic partnerships, 
          and customer experience enhancements to drive maximum impact.
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
                  <td className="py-3 px-4 text-center">35%</td>
                  <td className="py-3 px-4 text-right">$1,750,000</td>
                  <td className="py-3 px-4 text-sm">Social media, influencer partnerships, digital advertising</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Strategic Partnerships</td>
                  <td className="py-3 px-4 text-center">25%</td>
                  <td className="py-3 px-4 text-right">$1,250,000</td>
                  <td className="py-3 px-4 text-sm">Airport licensing, corporate partnerships, co-branding</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Customer Experience</td>
                  <td className="py-3 px-4 text-center">20%</td>
                  <td className="py-3 px-4 text-right">$1,000,000</td>
                  <td className="py-3 px-4 text-sm">Mobile app enhancements, loyalty program, in-store experience</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Market Research</td>
                  <td className="py-3 px-4 text-center">10%</td>
                  <td className="py-3 px-4 text-right">$500,000</td>
                  <td className="py-3 px-4 text-sm">Consumer insights, competitive analysis, trend monitoring</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Contingency</td>
                  <td className="py-3 px-4 text-center">10%</td>
                  <td className="py-3 px-4 text-right">$500,000</td>
                  <td className="py-3 px-4 text-sm">Reserved for unexpected opportunities or challenges</td>
                </tr>
                <tr className="bg-wawa-gray-50 font-semibold">
                  <td className="py-3 px-4">Total</td>
                  <td className="py-3 px-4 text-center">100%</td>
                  <td className="py-3 px-4 text-right">$5,000,000</td>
                  <td className="py-3 px-4"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Budget Breakdown */}
        <h3 className="font-wawaHeading text-xl font-semibold mb-4">Detailed Breakdown</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-4">Digital Marketing ($1,750,000)</h4>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Social Media Campaigns</span>
                  <span className="text-wawa-red-600">$700,000</span>
                </div>
                <p className="text-sm text-wawa-gray-600">
                  Targeted advertising on Instagram, TikTok, Facebook, and Twitter to reach new audiences and engage existing customers.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Influencer Partnerships</span>
                  <span className="text-wawa-red-600">$500,000</span>
                </div>
                <p className="text-sm text-wawa-gray-600">
                  Collaborations with creators who align with our brand values to expand reach and build credibility in new markets.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Content Creation</span>
                  <span className="text-wawa-red-600">$350,000</span>
                </div>
                <p className="text-sm text-wawa-gray-600">
                  Development of high-quality video, photography, and written content for digital channels and campaigns.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Digital Analytics & Tools</span>
                  <span className="text-wawa-red-600">$200,000</span>
                </div>
                <p className="text-sm text-wawa-gray-600">
                  Investment in analytics platforms, marketing automation, and other digital tools to optimize campaign performance.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-4">Strategic Partnerships ($1,250,000)</h4>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Airport Licensing Program</span>
                  <span className="text-wawa-red-600">$750,000</span>
                </div>
                <p className="text-sm text-wawa-gray-600">
                  Establishment of Wawa locations in major airports, including licensing fees, design, and implementation costs.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Corporate Partnerships</span>
                  <span className="text-wawa-red-600">$300,000</span>
                </div>
                <p className="text-sm text-wawa-gray-600">
                  Development of partnerships with corporations for campus locations, catering services, and employee programs.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Co-Branding Initiatives</span>
                  <span className="text-wawa-red-600">$200,000</span>
                </div>
                <p className="text-sm text-wawa-gray-600">
                  Collaborative product development and marketing with complementary brands to expand reach and enhance offerings.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* ROI Projections */}
        <h3 className="font-wawaHeading text-xl font-semibold mb-4">ROI Projections</h3>
        
        <div className="bg-wawa-gray-50 rounded-xl p-6 mb-12">
          <p className="mb-6">
            Our marketing investments are projected to deliver significant returns across multiple metrics, 
            with a focus on both short-term revenue growth and long-term brand equity building.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-4 text-center">Financial ROI</h4>
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 rounded-full bg-wawa-red-50 flex items-center justify-center">
                  <span className="text-2xl font-bold text-wawa-red-600">3.2x</span>
                </div>
              </div>
              <p className="text-sm text-center">
                Expected return on marketing investment, with $16M in incremental revenue from $5M marketing spend.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-4 text-center">Customer Growth</h4>
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 rounded-full bg-wawa-red-50 flex items-center justify-center">
                  <span className="text-2xl font-bold text-wawa-red-600">+15%</span>
                </div>
              </div>
              <p className="text-sm text-center">
                Projected increase in active customer base, with 700,000 new customers acquired through marketing initiatives.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-4 text-center">Brand Value</h4>
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 rounded-full bg-wawa-red-50 flex items-center justify-center">
                  <span className="text-2xl font-bold text-wawa-red-600">+20%</span>
                </div>
              </div>
              <p className="text-sm text-center">
                Expected increase in brand value, strengthening Wawa's position in the market and supporting future growth.
              </p>
            </div>
          </div>
        </div>
        
        {/* Budget Management */}
        <h3 className="font-wawaHeading text-xl font-semibold mb-4">Budget Management</h3>
        
        <div className="bg-white border border-wawa-gray-200 rounded-xl p-6 shadow-sm mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-4">Monitoring & Control</h4>
              <ul className="list-disc list-inside text-sm space-y-2">
                <li>Monthly budget reviews with all department heads</li>
                <li>Quarterly performance assessments against KPIs</li>
                <li>Real-time tracking of digital campaign spend</li>
                <li>Approval process for any budget reallocation</li>
                <li>Contingency fund management protocol</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-4">Optimization Strategy</h4>
              <ul className="list-disc list-inside text-sm space-y-2">
                <li>Performance-based budget reallocation</li>
                <li>A/B testing to optimize campaign efficiency</li>
                <li>Scaling successful initiatives with additional funding</li>
                <li>Reducing or eliminating underperforming activities</li>
                <li>Leveraging data analytics for spend optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SectionPage>
  );
};

export default Budget; 