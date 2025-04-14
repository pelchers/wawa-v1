import React from 'react';
import { wawaTheme } from '../styles/wawa-theme';

const MarketingObjectives = () => {
  return (
    <section className={`${wawaTheme.secondary} ${wawaTheme.section}`}>
      <div className={wawaTheme.container}>
        <h2 className="text-display-md font-wawa-heading font-bold text-wawa-red-600 mb-8 text-center">
          Marketing Objectives
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Problem */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-heading-md font-wawa-heading font-bold text-wawa-red-600 mb-4">
              The Problem
            </h3>
            <p className="text-body-lg text-wawa-black-700 mb-4">
              Wawa has limited national visibility compared to some competitors and must increase brand awareness to expand into new regions.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-wawa-black-700">
              <li>Limited presence in certain geographic regions</li>
              <li>Untapped potential in digital and social media spaces</li>
              <li>Need for innovative approaches to reach new markets</li>
              <li>Opportunity to leverage existing brand strength in new ways</li>
            </ul>
          </div>
          
          {/* Solutions */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-heading-md font-wawa-heading font-bold text-wawa-red-600 mb-4">
              Potential Solutions
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-wawa-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">1</div>
                <p className="text-body-md text-wawa-black-700">
                  <span className="font-bold">Social Media Partnerships:</span> Collaborate with creators and influencers to expand digital presence
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-wawa-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">2</div>
                <p className="text-body-md text-wawa-black-700">
                  <span className="font-bold">Corporate Events:</span> Host exclusive events with notable artists to generate content and buzz
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-wawa-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">3</div>
                <p className="text-body-md text-wawa-black-700">
                  <span className="font-bold">Airport Licensing:</span> Expand physical presence through strategic airport stalls with minimal upfront costs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingObjectives; 