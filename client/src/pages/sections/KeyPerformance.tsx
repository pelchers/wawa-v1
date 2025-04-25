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
          Our marketing strategy focuses on three key performance areas: Digital Engagement, Market Share, and Brand Impact 
          (i.e., measuring social media growth, market penetration rates, and brand sentiment scores). We prioritize brand 
          loyalty and awareness over immediate customer growth, leveraging a cost-efficient approach across social media, 
          traditional media licensing, and strategic location expansion.
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
                <p>• 100 Premiere Partnerships (i.e., food critics with 100k+ followers)</p>
                <p>• 100-150 Sublevel Partnerships (i.e., local food bloggers)</p>
                <p>• 250K+ followers per platform (i.e., TikTok, Instagram, YouTube)</p>
              </div>
              <div className="h-2 bg-wawa-gray-100 rounded-full">
                <div className="h-2 bg-wawa-red-500 rounded-full" style={{ width: '0%' }}></div>
              </div>
              <p className="text-sm text-wawa-gray-600">
                Implementing structured tracking for partnerships and engagement across all platforms 
                (i.e., using tools like Sprout Social for unified analytics).
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
                Aiming to exceed current fast food brand penetration in new markets through strategic positioning 
                (i.e., targeting high-traffic locations like Denver International Airport).
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
                  <li>Social media expansion (i.e., TikTok challenges)</li>
                  <li>Strategic media licensing (i.e., local music partnerships)</li>
                  <li>Travel hub presence (i.e., airport locations)</li>
                </ul>
              </div>
              <p className="text-sm text-wawa-gray-600">
                Low-cost approach enables focused brand building without pressure for immediate customer acquisition 
                (i.e., using organic growth vs paid advertising).
              </p>
            </div>
          </div>
        </div>
        
        <h3 className="font-wawaHeading text-xl font-semibold mb-4">Channel-Specific Metrics</h3>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-wawa-gray-50 p-6 rounded-xl">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Digital Performance</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Social engagement by market segment (i.e., Gen Z engagement rates)</li>
              <li>Influencer campaign ROI tracking (i.e., conversion tracking)</li>
              <li>Digital content performance by region (i.e., view rates)</li>
              <li>Community growth metrics by platform (i.e., follower growth)</li>
            </ul>
          </div>
          
          <div className="bg-wawa-gray-50 p-6 rounded-xl">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Traditional Media Impact</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Celebrity partnership performance (i.e., mention tracking)</li>
              <li>Entertainment placement effectiveness (i.e., brand recall)</li>
              <li>Brand recognition lift by market (i.e., survey results)</li>
              <li>Cross-promotion conversion rates (i.e., code redemptions)</li>
            </ul>
          </div>
          
          <div className="bg-wawa-gray-50 p-6 rounded-xl">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Location Performance</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Product mix success by location (i.e., regional favorites)</li>
              <li>Regional menu adaptation metrics (i.e., sales data)</li>
              <li>Travel hub vs event center analytics (i.e., traffic flow)</li>
              <li>Market expansion viability scores (i.e., demographic fit)</li>
            </ul>
          </div>
          
          <div className="bg-wawa-gray-50 p-6 rounded-xl">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Cost Efficiency</h4>
            <p className="mb-2"><strong>Target:</strong> 80% reduction vs. traditional expansion</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Partnership ROI metrics (i.e., cost per engagement)</li>
              <li>Location operating costs (i.e., express format savings)</li>
              <li>Marketing spend efficiency (i.e., organic vs paid)</li>
              <li>Cross-channel optimization (i.e., content repurposing)</li>
            </ul>
          </div>
        </div>
        
        <h3 className="font-wawaHeading text-xl font-semibold mb-4">Measurement & Reporting</h3>
        <p className="mb-8">
          Our data-driven approach focuses on cross-channel performance tracking and market viability analysis. 
          Dedicated teams monitor digital performance, traditional media impact, and location metrics to identify 
          successful strategies and optimize our low-cost, high-impact approach across all channels.
        </p>

        {/* Implementation Examples Section */}
        <section className="implementation-examples mt-8 bg-wawa-gray-50 rounded-xl p-6">
          <h3 className="font-wawaHeading text-xl font-semibold text-wawa-red-600 mb-4">
            Implementation Examples
          </h3>
          
          <div className="space-y-6">
            {/* Digital Performance Example */}
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">
                Example: Influencer Campaign Tracking
              </h4>
              <p className="text-wawa-gray-700">
                Implementation of a comprehensive influencer tracking system using Sprout Social and custom analytics 
                dashboard. The system monitors real-time engagement metrics, sentiment analysis, and conversion tracking 
                for each tier of partnerships. Custom UTM parameters and unique promo codes are assigned to each 
                influencer for accurate attribution.
              </p>
              <div className="mt-4 text-sm text-wawa-gray-600">
                <strong>Expected Results:</strong> 25% improvement in campaign ROI tracking accuracy, 
                40% increase in conversion attribution clarity, and real-time performance optimization 
                capabilities.
              </div>
            </div>

            {/* Location Performance Example */}
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">
                Example: Regional Menu Performance Analysis
              </h4>
              <p className="text-wawa-gray-700">
                Development of a data-driven menu optimization system for new market locations. The system 
                analyzes sales patterns, customer feedback, and regional preferences to create market-specific 
                menu variations. Implementation includes real-time sales tracking, customer satisfaction surveys, 
                and automated inventory optimization.
              </p>
              <div className="mt-4 text-sm text-wawa-gray-600">
                <strong>Expected Results:</strong> 15% reduction in food waste, 20% increase in customer 
                satisfaction scores, and 25% improvement in inventory turnover rates.
              </div>
            </div>

            {/* Cost Efficiency Example */}
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">
                Example: Cross-Channel Content Optimization
              </h4>
              <p className="text-wawa-gray-700">
                Implementation of a content repurposing strategy that maximizes the value of created assets 
                across all channels. Original content from influencer partnerships is adapted for in-store 
                displays, social media, and traditional marketing materials. The system includes a central 
                content repository, automated distribution workflow, and performance tracking.
              </p>
              <div className="mt-4 text-sm text-wawa-gray-600">
                <strong>Expected Results:</strong> 60% reduction in content production costs, 3x increase 
                in content utilization, and 45% improvement in content engagement rates.
              </div>
            </div>
          </div>
        </section>
      </div>
    </SectionPage>
  );
};

export default KeyPerformance; 