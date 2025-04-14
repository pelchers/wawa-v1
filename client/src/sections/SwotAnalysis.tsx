import React from 'react';
import { wawaTheme } from '../styles/wawa-theme';

const SwotAnalysis = () => {
  return (
    <section className={`${wawaTheme.dark} ${wawaTheme.section}`}>
      <div className={wawaTheme.container}>
        <h2 className="text-display-md font-wawa-heading font-bold text-wawa-yellow-400 mb-8 text-center">
          SWOT Analysis
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Strengths */}
          <div className="bg-wawa-black-700 p-6 rounded-lg border-t-4 border-wawa-green-500">
            <h3 className="text-heading-sm font-wawa-heading font-bold text-wawa-green-400 mb-4">
              Strengths
            </h3>
            <ul className="space-y-2 text-white">
              <li className="flex items-start gap-2">
                <span className="text-wawa-green-400">✓</span>
                <span>Strong regional brand loyalty</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-wawa-green-400">✓</span>
                <span>Quality products and customer service</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-wawa-green-400">✓</span>
                <span>Effective contract negotiation skills</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-wawa-green-400">✓</span>
                <span>Established corporate culture</span>
              </li>
            </ul>
          </div>
          
          {/* Weaknesses */}
          <div className="bg-wawa-black-700 p-6 rounded-lg border-t-4 border-wawa-red-500">
            <h3 className="text-heading-sm font-wawa-heading font-bold text-wawa-red-400 mb-4">
              Weaknesses
            </h3>
            <ul className="space-y-2 text-white">
              <li className="flex items-start gap-2">
                <span className="text-wawa-red-400">✗</span>
                <span>Limited national visibility</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-wawa-red-400">✗</span>
                <span>Underdeveloped social media presence</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-wawa-red-400">✗</span>
                <span>Geographic concentration in specific regions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-wawa-red-400">✗</span>
                <span>Limited brand recognition in new markets</span>
              </li>
            </ul>
          </div>
          
          {/* Opportunities */}
          <div className="bg-wawa-black-700 p-6 rounded-lg border-t-4 border-wawa-blue-500">
            <h3 className="text-heading-sm font-wawa-heading font-bold text-wawa-blue-400 mb-4">
              Opportunities
            </h3>
            <ul className="space-y-2 text-white">
              <li className="flex items-start gap-2">
                <span className="text-wawa-blue-400">→</span>
                <span>Airport expansion with minimal upfront costs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-wawa-blue-400">→</span>
                <span>Growing creator economy for partnerships</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-wawa-blue-400">→</span>
                <span>Untapped markets in new geographic regions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-wawa-blue-400">→</span>
                <span>Potential for viral social media content</span>
              </li>
            </ul>
          </div>
          
          {/* Threats */}
          <div className="bg-wawa-black-700 p-6 rounded-lg border-t-4 border-wawa-orange-500">
            <h3 className="text-heading-sm font-wawa-heading font-bold text-wawa-orange-400 mb-4">
              Threats
            </h3>
            <ul className="space-y-2 text-white">
              <li className="flex items-start gap-2">
                <span className="text-wawa-orange-400">!</span>
                <span>Established competitors in target markets</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-wawa-orange-400">!</span>
                <span>Changing consumer preferences</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-wawa-orange-400">!</span>
                <span>Economic fluctuations affecting travel</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-wawa-orange-400">!</span>
                <span>Saturation in the convenience store market</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Proposed Solution */}
        <div className="bg-wawa-black-600 p-8 rounded-lg max-w-4xl mx-auto">
          <h3 className="text-heading-md font-wawa-heading font-bold text-wawa-yellow-400 mb-4">
            Proposed Solution Based on SWOT
          </h3>
          <p className="text-body-lg text-white mb-6">
            Capitalize on Wawa's contract negotiation strength to expand in airports, increasing brand exposure at minimal cost. Simultaneously, collaborate with influencers and creators to drive social media engagement and awareness in new markets.
          </p>
          <div className="flex justify-center">
            <button className={wawaTheme.buttonSecondary}>
              View Detailed Strategy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwotAnalysis; 