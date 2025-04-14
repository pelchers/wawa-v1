import React from 'react';
import { wawaTheme } from '../styles/wawa-theme';

const MarketingStrategy = () => {
  return (
    <section className={`${wawaTheme.primary} ${wawaTheme.section}`}>
      <div className={wawaTheme.container}>
        <h2 className="text-display-md font-wawa-heading font-bold text-white mb-8 text-center">
          Marketing Strategy
        </h2>
        
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-body-lg text-white/90">
            Our three-pronged approach focuses on expanding Wawa's social media presence, leveraging corporate events, and increasing physical presence through airport licensing.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Strategy 1: Social Media Expansion */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <div className="bg-wawa-yellow-400 text-wawa-black-800 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">1</div>
            <h3 className="text-heading-md font-wawa-heading font-bold text-white mb-4 text-center">
              Social Media Expansion
            </h3>
            <ul className="space-y-3 text-white">
              <li className="flex items-start gap-2">
                <span className="text-wawa-yellow-300">•</span>
                <span>Partner with creators across various platforms</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-wawa-yellow-300">•</span>
                <span>Send new products and merchandise to influencers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-wawa-yellow-300">•</span>
                <span>Invite creators to exclusive corporate events</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-wawa-yellow-300">•</span>
                <span>Develop branded content guidelines for consistency</span>
              </li>
            </ul>
            <div className="mt-6 text-center">
              <button className={wawaTheme.buttonSecondary}>
                Explore Strategy
              </button>
            </div>
          </div>
          
          {/* Strategy 2: Corporate Events */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <div className="bg-wawa-yellow-400 text-wawa-black-800 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">2</div>
            <h3 className="text-heading-md font-wawa-heading font-bold text-white mb-4 text-center">
              Corporate Events
            </h3>
            <ul className="space-y-3 text-white">
              <li className="flex items-start gap-2">
                <span className="text-wawa-yellow-300">•</span>
                <span>Host exclusive events with notable artists</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-wawa-yellow-300">•</span>
                <span>Create licensable media from event content</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-wawa-yellow-300">•</span>
                <span>Showcase Wawa corporate culture in a fun way</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-wawa-yellow-300">•</span>
                <span>Involve employees in content creation</span>
              </li>
            </ul>
            <div className="mt-6 text-center">
              <button className={wawaTheme.buttonSecondary}>
                Explore Strategy
              </button>
            </div>
          </div>
          
          {/* Strategy 3: Airport Expansion */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <div className="bg-wawa-yellow-400 text-wawa-black-800 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">3</div>
            <h3 className="text-heading-md font-wawa-heading font-bold text-white mb-4 text-center">
              Airport Expansion
            </h3>
            <ul className="space-y-3 text-white">
              <li className="flex items-start gap-2">
                <span className="text-wawa-yellow-300">•</span>
                <span>Expand physical presence through airport stalls</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-wawa-yellow-300">•</span>
                <span>Leverage contract negotiation strengths</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-wawa-yellow-300">•</span>
                <span>Test new markets with minimal upfront costs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-wawa-yellow-300">•</span>
                <span>Build physical brand awareness nationwide</span>
              </li>
            </ul>
            <div className="mt-6 text-center">
              <button className={wawaTheme.buttonSecondary}>
                Explore Strategy
              </button>
            </div>
          </div>
        </div>
        
        {/* Target Audience */}
        <div className="mt-16 bg-white/5 p-8 rounded-lg">
          <h3 className="text-heading-lg font-wawa-heading font-bold text-white mb-6 text-center">
            Target Audience
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-wawa-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-wawa-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h4 className="text-heading-sm font-wawa-heading font-bold text-white mb-2">Travelers</h4>
              <p className="text-body-sm text-white/80">
                Frequent flyers and airport visitors looking for convenient, quality food and beverage options
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-wawa-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-wawa-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-heading-sm font-wawa-heading font-bold text-white mb-2">Digital Natives</h4>
              <p className="text-body-sm text-white/80">
                Social media users who follow creators and engage with branded content across platforms
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-wawa-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-wawa-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h4 className="text-heading-sm font-wawa-heading font-bold text-white mb-2">Local Communities</h4>
              <p className="text-body-sm text-white/80">
                Residents in new market regions who value convenience, quality, and community engagement
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingStrategy; 