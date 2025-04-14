import React from 'react';
import { wawaTheme } from '../styles/wawa-theme';

const ExecutionPlan = () => {
  return (
    <section className={`${wawaTheme.tertiary} ${wawaTheme.section}`}>
      <div className={wawaTheme.container}>
        <h2 className="text-display-md font-wawa-heading font-bold text-wawa-red-600 mb-8 text-center">
          Execution Plan
        </h2>
        
        {/* Process Timeline */}
        <div className="mb-16">
          <h3 className="text-heading-lg font-wawa-heading font-semibold text-wawa-black-800 mb-6">
            Process
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-wawa-red-200 transform md:translate-x-[-50%] hidden md:block"></div>
            
            {/* Timeline Items */}
            <div className="space-y-8">
              {/* Phase 1 */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                <div className="md:w-[45%] order-2 md:order-1 mt-4 md:mt-0">
                  <div className="bg-white p-6 rounded-lg shadow-md border border-wawa-black-100">
                    <h4 className="text-heading-sm font-wawa-heading font-bold text-wawa-red-600 mb-2">
                      Phase 1: Planning & Partnerships (Months 1-3)
                    </h4>
                    <ul className="list-disc pl-5 space-y-2 text-wawa-black-700">
                      <li>Identify and contact potential creator partners</li>
                      <li>Research airport licensing opportunities</li>
                      <li>Develop content strategy and guidelines</li>
                      <li>Plan first corporate event with notable artist</li>
                    </ul>
                  </div>
                </div>
                
                <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-wawa-red-600 rounded-full transform md:translate-x-[-50%] flex items-center justify-center text-white font-bold">
                  1
                </div>
                
                <div className="md:w-[45%] order-1 md:order-2">
                  <p className="font-wawa-heading font-bold text-wawa-red-600 text-heading-xs">Q1 2024</p>
                </div>
              </div>
              
              {/* Phase 2 */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                <div className="md:w-[45%] order-2 md:order-2 mt-4 md:mt-0">
                  <div className="bg-white p-6 rounded-lg shadow-md border border-wawa-black-100">
                    <h4 className="text-heading-sm font-wawa-heading font-bold text-wawa-red-600 mb-2">
                      Phase 2: Initial Launch (Months 4-6)
                    </h4>
                    <ul className="list-disc pl-5 space-y-2 text-wawa-black-700">
                      <li>Execute first corporate event with creator attendance</li>
                      <li>Begin social media campaign with initial partners</li>
                      <li>Secure first airport licensing agreements</li>
                      <li>Develop measurement framework for KPIs</li>
                    </ul>
                  </div>
                </div>
                
                <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-wawa-red-600 rounded-full transform md:translate-x-[-50%] flex items-center justify-center text-white font-bold">
                  2
                </div>
                
                <div className="md:w-[45%] order-1 md:order-1">
                  <p className="font-wawa-heading font-bold text-wawa-red-600 text-heading-xs">Q2 2024</p>
                </div>
              </div>
              
              {/* Phase 3 */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                <div className="md:w-[45%] order-2 md:order-1 mt-4 md:mt-0">
                  <div className="bg-white p-6 rounded-lg shadow-md border border-wawa-black-100">
                    <h4 className="text-heading-sm font-wawa-heading font-bold text-wawa-red-600 mb-2">
                      Phase 3: Expansion (Months 7-9)
                    </h4>
                    <ul className="list-disc pl-5 space-y-2 text-wawa-black-700">
                      <li>Open first airport locations</li>
                      <li>Expand creator partnerships based on performance</li>
                      <li>Produce and distribute content from first event</li>
                      <li>Conduct mid-campaign performance review</li>
                    </ul>
                  </div>
                </div>
                
                <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-wawa-red-600 rounded-full transform md:translate-x-[-50%] flex items-center justify-center text-white font-bold">
                  3
                </div>
                
                <div className="md:w-[45%] order-1 md:order-2">
                  <p className="font-wawa-heading font-bold text-wawa-red-600 text-heading-xs">Q3 2024</p>
                </div>
              </div>
              
              {/* Phase 4 */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                <div className="md:w-[45%] order-2 md:order-2 mt-4 md:mt-0">
                  <div className="bg-white p-6 rounded-lg shadow-md border border-wawa-black-100">
                    <h4 className="text-heading-sm font-wawa-heading font-bold text-wawa-red-600 mb-2">
                      Phase 4: Optimization (Months 10-12)
                    </h4>
                    <ul className="list-disc pl-5 space-y-2 text-wawa-black-700">
                      <li>Host second corporate event based on learnings</li>
                      <li>Optimize airport operations and expand to new locations</li>
                      <li>Refine creator strategy based on performance data</li>
                      <li>Develop plan for Year 2 expansion</li>
                    </ul>
                  </div>
                </div>
                
                <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-wawa-red-600 rounded-full transform md:translate-x-[-50%] flex items-center justify-center text-white font-bold">
                  4
                </div>
                
                <div className="md:w-[45%] order-1 md:order-1">
                  <p className="font-wawa-heading font-bold text-wawa-red-600 text-heading-xs">Q4 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Team & Resources */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-heading-lg font-wawa-heading font-semibold text-wawa-black-800 mb-6">
              Team
            </h3>
            <div className="bg-white rounded-lg shadow-md p-6 border border-wawa-black-100">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-wawa-red-100 rounded-full flex items-center justify-center text-wawa-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-heading-xs font-wawa-heading font-bold text-wawa-black-800">Marketing Team</h4>
                    <p className="text-body-sm text-wawa-black-600">Oversees campaign strategy, content creation, and performance tracking</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-wawa-red-100 rounded-full flex items-center justify-center text-wawa-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-heading-xs font-wawa-heading font-bold text-wawa-black-800">Social Media Managers</h4>
                    <p className="text-body-sm text-wawa-black-600">Manages creator relationships and social media content distribution</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-wawa-red-100 rounded-full flex items-center justify-center text-wawa-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-heading-xs font-wawa-heading font-bold text-wawa-black-800">Business Development</h4>
                    <p className="text-body-sm text-wawa-black-600">Leads airport licensing negotiations and partnership agreements</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-wawa-red-100 rounded-full flex items-center justify-center text-wawa-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-heading-xs font-wawa-heading font-bold text-wawa-black-800">Event Coordinators</h4>
                    <p className="text-body-sm text-wawa-black-600">Plans and executes corporate events with notable artists</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-heading-lg font-wawa-heading font-semibold text-wawa-black-800 mb-6">
              Resources
            </h3>
            <div className="bg-white rounded-lg shadow-md p-6 border border-wawa-black-100">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-wawa-yellow-100 rounded-full flex items-center justify-center text-wawa-yellow-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-heading-xs font-wawa-heading font-bold text-wawa-black-800">Budget Allocation</h4>
                    <p className="text-body-sm text-wawa-black-600">$2.5M for creator partnerships, $1.8M for events, $3.2M for airport expansion</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-wawa-yellow-100 rounded-full flex items-center justify-center text-wawa-yellow-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-heading-xs font-wawa-heading font-bold text-wawa-black-800">Creator Network</h4>
                    <p className="text-body-sm text-wawa-black-600">50+ identified creators across TikTok, Instagram, YouTube, and Twitter</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-wawa-yellow-100 rounded-full flex items-center justify-center text-wawa-yellow-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-heading-xs font-wawa-heading font-bold text-wawa-black-800">Legal Support</h4>
                    <p className="text-body-sm text-wawa-black-600">Dedicated legal team for licensing agreements and creator contracts</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-wawa-yellow-100 rounded-full flex items-center justify-center text-wawa-yellow-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-heading-xs font-wawa-heading font-bold text-wawa-black-800">Analytics Platform</h4>
                    <p className="text-body-sm text-wawa-black-600">Comprehensive data tracking for campaign performance and ROI analysis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutionPlan; 