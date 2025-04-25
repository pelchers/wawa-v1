import { FC } from 'react';
import SectionPage from '../../components/sections/SectionPage';

const KeyPerformance: FC = () => {
  return (
    <SectionPage 
      title="Key Performance Areas"
      prevSection={{
        title: "Marketing Objectives",
        path: "/marketing-objectives"
      }}
      nextSection={{
        title: "SWOT Analysis",
        path: "/swot-analysis"
      }}
    >
      <div className="prose prose-lg max-w-none">
        <h3 className="font-wawaHeading text-xl font-semibold mb-6">Performance Metrics Overview</h3>
        <p className="mb-8">
          Our marketing strategy focuses on three key performance areas: Digital Engagement, Market Share, and Brand Impact. 
          We prioritize brand loyalty and awareness over immediate customer growth, leveraging a cost-efficient approach 
          across social media, traditional media licensing, and strategic location expansion.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-wawa-gray-200">
            <h3 className="font-wawaHeading text-xl font-bold text-wawa-red-600 mb-4">Digital Engagement</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-wawa-gray-700">Current</span>
                <span className="font-bold text-wawa-red-600">Untracked</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-wawa-gray-700">Target</span>
                <span className="font-bold text-wawa-green-600">Multi-Tier</span>
              </div>
              <div className="space-y-2 text-sm text-wawa-gray-600">
                <p>• 100 Premiere Partnerships</p>
                <p>• 100-150 Sublevel Partnerships</p>
                <p>• 250K+ followers per platform</p>
              </div>
              <div className="h-2 bg-wawa-gray-100 rounded-full">
                <div className="h-2 bg-wawa-red-500 rounded-full" style={{ width: '0%' }}></div>
              </div>
              <p className="text-sm text-wawa-gray-600">
                Implementing structured tracking for partnerships and engagement across all platforms.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-wawa-gray-200">
            <h3 className="font-wawaHeading text-xl font-bold text-wawa-red-600 mb-4">Market Share</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-wawa-gray-700">Current</span>
                <span className="font-bold text-wawa-red-600">0%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-wawa-gray-700">Target</span>
                <span className="font-bold text-wawa-green-600">10%+</span>
              </div>
              <div className="h-2 bg-wawa-gray-100 rounded-full">
                <div className="h-2 bg-wawa-red-500 rounded-full" style={{ width: '0%' }}></div>
              </div>
              <p className="text-sm text-wawa-gray-600">
                Aiming to exceed current fast food brand penetration in new markets through strategic positioning.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-wawa-gray-200">
            <h3 className="font-wawaHeading text-xl font-bold text-wawa-red-600 mb-4">Brand Impact</h3>
            <div className="space-y-4">
              <div className="bg-wawa-yellow-50 p-3 rounded-lg">
                <p className="text-sm text-wawa-gray-700 font-semibold mb-2">Strategic Focus:</p>
                <p className="text-sm text-wawa-gray-600">
                  Prioritizing brand loyalty and awareness over immediate customer growth through:
                </p>
                <ul className="list-disc pl-4 mt-2 text-sm text-wawa-gray-600">
                  <li>Social media expansion</li>
                  <li>Strategic media licensing</li>
                  <li>Travel hub presence</li>
                </ul>
              </div>
              <p className="text-sm text-wawa-gray-600">
                Low-cost approach enables focused brand building without pressure for immediate customer acquisition.
              </p>
            </div>
          </div>
        </div>
        
        <h3 className="font-wawaHeading text-xl font-semibold mb-4">Channel-Specific Metrics</h3>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-wawa-gray-50 p-6 rounded-xl">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Digital Performance</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Social engagement by market segment</li>
              <li>Influencer campaign ROI tracking</li>
              <li>Digital content performance by region</li>
              <li>Community growth metrics by platform</li>
            </ul>
          </div>
          
          <div className="bg-wawa-gray-50 p-6 rounded-xl">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Traditional Media Impact</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Celebrity partnership performance</li>
              <li>Entertainment placement effectiveness</li>
              <li>Brand recognition lift by market</li>
              <li>Cross-promotion conversion rates</li>
            </ul>
          </div>
          
          <div className="bg-wawa-gray-50 p-6 rounded-xl">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Location Performance</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Product mix success by location</li>
              <li>Regional menu adaptation metrics</li>
              <li>Travel hub vs event center analytics</li>
              <li>Market expansion viability scores</li>
            </ul>
          </div>
          
          <div className="bg-wawa-gray-50 p-6 rounded-xl">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Cost Efficiency</h4>
            <p className="mb-2"><strong>Target:</strong> 80% reduction vs. traditional expansion</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Partnership ROI metrics</li>
              <li>Location operating costs</li>
              <li>Marketing spend efficiency</li>
              <li>Cross-channel optimization</li>
            </ul>
          </div>
        </div>
        
        <h3 className="font-wawaHeading text-xl font-semibold mb-4">Measurement & Reporting</h3>
        <p>
          Our data-driven approach focuses on cross-channel performance tracking and market viability analysis. 
          Dedicated teams monitor digital performance, traditional media impact, and location metrics to identify 
          successful strategies and optimize our low-cost, high-impact approach across all channels.
        </p>
      </div>
    </SectionPage>
  );
};

export default KeyPerformance; 