import React from 'react';
import { wawaTheme } from '../styles/wawa-theme';

const MarketResearch = () => {
  return (
    <section className={`${wawaTheme.tertiary} ${wawaTheme.section}`}>
      <div className={wawaTheme.container}>
        <h2 className="text-display-md font-wawa-heading font-bold text-wawa-red-600 mb-8 text-center">
          Market Research
        </h2>
        
        {/* Competitors */}
        <div className="mb-16">
          <h3 className="text-heading-lg font-wawa-heading font-semibold text-wawa-black-800 mb-6">
            Competitors
          </h3>
          
          <div className="overflow-x-auto whitespace-nowrap scroll-smooth snap-x flex space-x-4 p-4">
            {/* Competitor Cards - Horizontal Scroll */}
            {['7-Eleven', 'Sheetz', 'QuickChek', 'Royal Farms', 'Cumberland Farms'].map((competitor, index) => (
              <div key={index} className="inline-block w-[300px] snap-center bg-white rounded-lg shadow-md p-6 border border-wawa-black-100">
                <h4 className="text-heading-sm font-wawa-heading font-bold text-wawa-black-800 mb-3">
                  {competitor}
                </h4>
                <p className="text-body-md text-wawa-black-700 mb-4">
                  Major convenience store chain with national presence and established digital marketing strategies.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-body-sm text-wawa-black-500">Market Share</span>
                  <div className="w-24 h-2 bg-wawa-black-100 rounded-full overflow-hidden">
                    <div className="h-full bg-wawa-blue-500 rounded-full" style={{ width: `${Math.floor(Math.random() * 70 + 30)}%` }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Stats & Metrics */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-heading-lg font-wawa-heading font-semibold text-wawa-black-800 mb-6">
              Stats
            </h3>
            <div className="bg-white rounded-lg shadow-md p-6 border border-wawa-black-100">
              <ul className="space-y-4">
                <li className="flex justify-between items-center pb-3 border-b border-wawa-black-100">
                  <span className="text-body-md font-medium text-wawa-black-700">Social Media Engagement Rate</span>
                  <span className="text-heading-sm font-bold text-wawa-red-600">3.2%</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-wawa-black-100">
                  <span className="text-body-md font-medium text-wawa-black-700">Brand Awareness in Target Markets</span>
                  <span className="text-heading-sm font-bold text-wawa-red-600">68%</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-wawa-black-100">
                  <span className="text-body-md font-medium text-wawa-black-700">Customer Loyalty Score</span>
                  <span className="text-heading-sm font-bold text-wawa-red-600">8.7/10</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-body-md font-medium text-wawa-black-700">Market Growth Potential</span>
                  <span className="text-heading-sm font-bold text-wawa-red-600">22%</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-heading-lg font-wawa-heading font-semibold text-wawa-black-800 mb-6">
              Metrics
            </h3>
            <div className="bg-white rounded-lg shadow-md p-6 border border-wawa-black-100">
              <ul className="space-y-4">
                <li className="flex justify-between items-center pb-3 border-b border-wawa-black-100">
                  <span className="text-body-md font-medium text-wawa-black-700">Social Media Engagement</span>
                  <span className="text-body-sm text-wawa-green-600 bg-wawa-green-50 px-2 py-1 rounded-full">Primary KPI</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-wawa-black-100">
                  <span className="text-body-md font-medium text-wawa-black-700">Airport Stall Sales</span>
                  <span className="text-body-sm text-wawa-green-600 bg-wawa-green-50 px-2 py-1 rounded-full">Primary KPI</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-wawa-black-100">
                  <span className="text-body-md font-medium text-wawa-black-700">Brand Awareness Surveys</span>
                  <span className="text-body-sm text-wawa-blue-600 bg-wawa-blue-50 px-2 py-1 rounded-full">Secondary KPI</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-body-md font-medium text-wawa-black-700">Content Reach & Impressions</span>
                  <span className="text-body-sm text-wawa-blue-600 bg-wawa-blue-50 px-2 py-1 rounded-full">Secondary KPI</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Issues & Solutions */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-heading-lg font-wawa-heading font-semibold text-wawa-black-800 mb-6">
              Potential Issues
            </h3>
            <div className="bg-white rounded-lg shadow-md p-6 border border-wawa-black-100">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-wawa-red-100 text-wawa-red-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">!</div>
                  <div>
                    <p className="font-medium text-wawa-black-800">Competition from established brands</p>
                    <p className="text-body-sm text-wawa-black-600">Existing convenience stores have strong market presence in target regions</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-wawa-red-100 text-wawa-red-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">!</div>
                  <div>
                    <p className="font-medium text-wawa-black-800">High cost of influencer partnerships</p>
                    <p className="text-body-sm text-wawa-black-600">Premium influencers may require significant investment</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-wawa-red-100 text-wawa-red-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">!</div>
                  <div>
                    <p className="font-medium text-wawa-black-800">Airport licensing challenges</p>
                    <p className="text-body-sm text-wawa-black-600">Competitive bidding and regulatory hurdles in new markets</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-heading-lg font-wawa-heading font-semibold text-wawa-black-800 mb-6">
              Potential Solutions
            </h3>
            <div className="bg-white rounded-lg shadow-md p-6 border border-wawa-black-100">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-wawa-green-100 text-wawa-green-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                  <div>
                    <p className="font-medium text-wawa-black-800">Tiered influencer strategy</p>
                    <p className="text-body-sm text-wawa-black-600">Mix of micro, mid-tier, and macro influencers for cost efficiency</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-wawa-green-100 text-wawa-green-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                  <div>
                    <p className="font-medium text-wawa-black-800">Strategic airport partnerships</p>
                    <p className="text-body-sm text-wawa-black-600">Focus on secondary airports with lower entry barriers initially</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-wawa-green-100 text-wawa-green-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                  <div>
                    <p className="font-medium text-wawa-black-800">Differentiated brand positioning</p>
                    <p className="text-body-sm text-wawa-black-600">Emphasize Wawa's unique offerings and corporate culture</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketResearch; 