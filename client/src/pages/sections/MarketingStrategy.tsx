import { FC } from 'react';
import SectionPage from '../../components/sections/SectionPage';

const MarketingStrategy: FC = () => {
  return (
    <SectionPage 
      title="Marketing Strategy"
      prevSection={{
        title: "Market Research",
        path: "/market-research"
      }}
      nextSection={{
        title: "Challenges & Solutions",
        path: "/challenges-solutions"
      }}
    >
      <div className="prose prose-lg max-w-none">
        <h3 className="font-wawaHeading text-xl font-semibold mb-6">Strategic Approach</h3>
        <p className="mb-8">
          Our marketing strategy is built on three cost-efficient pillars: aggressive social media expansion with 
          targeted partnerships, strategic traditional media licensing with prominent cultural figures and brands, 
          and selective physical presence through travel hubs and event centers. This approach prioritizes brand 
          awareness and loyalty over immediate customer growth.
        </p>
        
        {/* Strategy Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-wawa-red-50 rounded-xl p-6">
            <div className="w-12 h-12 bg-wawa-red-600 text-white rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Social Media Expansion</h4>
            <p>
              Aggressive digital growth through structured partnership tiers and targeted content strategy to build 
              brand presence across platforms.
            </p>
            <ul className="mt-4 list-disc list-inside text-sm">
              <li>100 Premiere Partnerships</li>
              <li>100-150 Sublevel Partnerships</li>
              <li>250K+ followers per platform</li>
              <li>Market-segmented content</li>
            </ul>
          </div>
          
          <div className="bg-wawa-yellow-50 rounded-xl p-6">
            <div className="w-12 h-12 bg-wawa-yellow-500 text-white rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Traditional Media Licensing</h4>
            <p>
              Strategic partnerships with prominent cultural figures, TV shows, movies, and entertainment properties 
              to build brand recognition.
            </p>
            <ul className="mt-4 list-disc list-inside text-sm">
              <li>Celebrity brand ambassadors</li>
              <li>TV/movie product placement</li>
              <li>Entertainment collaborations</li>
              <li>Cultural icon endorsements</li>
            </ul>
          </div>
          
          <div className="bg-green-50 rounded-xl p-6">
            <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Strategic Locations</h4>
            <p>
              Cost-effective expansion through travel hubs and event centers, focusing on high-traffic locations 
              with minimal investment requirements.
            </p>
            <ul className="mt-4 list-disc list-inside text-sm">
              <li>Airport location partnerships</li>
              <li>Event center presence</li>
              <li>Travel hub optimization</li>
              <li>Regional product adaptation</li>
            </ul>
          </div>
        </div>
        
        {/* Target Audience */}
        <h3 className="font-wawaHeading text-xl font-semibold mb-4">Market Focus & Segmentation</h3>
        
        <div className="space-y-6 mb-12">
          <div className="bg-white border border-wawa-gray-200 rounded-xl p-6 shadow-sm">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Digital Audience</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="mb-4">
                  Social media users and digital-first consumers who engage with branded content and influencer partnerships.
                </p>
                <ul className="list-disc list-inside text-sm">
                  <li>Platform-specific engagement</li>
                  <li>Content consumption patterns</li>
                  <li>Digital community participation</li>
                  <li>Social sharing behaviors</li>
                </ul>
              </div>
              <div>
                <h5 className="font-wawaHeading text-base font-semibold mb-2">Engagement Strategy:</h5>
                <ul className="list-disc list-inside text-sm">
                  <li>Tiered influencer partnerships</li>
                  <li>Platform-optimized content</li>
                  <li>Community building initiatives</li>
                  <li>Interactive digital campaigns</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-wawa-gray-200 rounded-xl p-6 shadow-sm">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Entertainment Consumers</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="mb-4">
                  Audiences who engage with traditional media, entertainment content, and cultural touchpoints.
                </p>
                <ul className="list-disc list-inside text-sm">
                  <li>TV/movie viewers</li>
                  <li>Entertainment event attendees</li>
                  <li>Celebrity follower demographics</li>
                  <li>Cultural trend adopters</li>
                </ul>
              </div>
              <div>
                <h5 className="font-wawaHeading text-base font-semibold mb-2">Engagement Strategy:</h5>
                <ul className="list-disc list-inside text-sm">
                  <li>Strategic media placements</li>
                  <li>Celebrity partnerships</li>
                  <li>Entertainment venue presence</li>
                  <li>Cultural event integration</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-wawa-gray-200 rounded-xl p-6 shadow-sm">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Travel Hub Visitors</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="mb-4">
                  Travelers and event attendees seeking convenient, quality food options in high-traffic locations.
                </p>
                <ul className="list-disc list-inside text-sm">
                  <li>Airport travelers</li>
                  <li>Event center attendees</li>
                  <li>Transit hub users</li>
                  <li>Regional preferences</li>
                </ul>
              </div>
              <div>
                <h5 className="font-wawaHeading text-base font-semibold mb-2">Location Strategy:</h5>
                <ul className="list-disc list-inside text-sm">
                  <li>Strategic site selection</li>
                  <li>Regional menu adaptation</li>
                  <li>Travel-friendly offerings</li>
                  <li>Event-specific promotions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Implementation Approach */}
        <h3 className="font-wawaHeading text-xl font-semibold mb-4">Implementation & Metrics</h3>
        
        <div className="bg-wawa-gray-50 rounded-xl p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-4">Performance Tracking</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-wawa-red-100 text-wawa-red-600 p-1 rounded mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-medium">Digital Metrics</span>
                    <p className="text-sm text-wawa-gray-600">Track partnership performance, follower growth, and engagement rates across platforms.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-wawa-red-100 text-wawa-red-600 p-1 rounded mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-medium">Media Impact</span>
                    <p className="text-sm text-wawa-gray-600">Measure brand recognition lift and effectiveness of entertainment partnerships.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-wawa-red-100 text-wawa-red-600 p-1 rounded mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-medium">Location Analytics</span>
                    <p className="text-sm text-wawa-gray-600">Analyze performance of travel hub locations and regional product adaptations.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-4">Cost Efficiency</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-wawa-red-100 text-wawa-red-600 p-1 rounded mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-medium">80% Cost Reduction</span>
                    <p className="text-sm text-wawa-gray-600">Achieve significant savings compared to traditional expansion methods.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-wawa-red-100 text-wawa-red-600 p-1 rounded mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-medium">ROI Optimization</span>
                    <p className="text-sm text-wawa-gray-600">Focus on high-impact, low-cost initiatives across all channels.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SectionPage>
  );
};

export default MarketingStrategy; 