import { FC } from 'react';
import SectionPage from '../../components/sections/SectionPage';

const Conclusion: FC = () => {
  return (
    <SectionPage 
      title="Conclusion"
      prevSection={{
        title: "Budget",
        path: "/budget"
      }}
      nextSection={{
        title: "Feedback",
        path: "/feedback"
      }}
    >
      <div className="prose prose-lg max-w-none">
        <h3 className="font-wawaHeading text-xl font-semibold mb-6">Strategic Summary</h3>
        <p className="mb-8">
          This marketing plan presents a bold strategy focused on three key pillars: aggressive social media 
          expansion to build digital engagement (i.e., structured influencer partnerships, content strategy), 
          strategic traditional media licensing with major cultural figures (i.e., sports team collaborations, 
          entertainment integrations), and cost-effective physical expansion through travel hubs (i.e., premium 
          airport locations, event venues).
        </p>
        
        {/* Key Takeaways */}
        <div className="bg-wawa-red-50 rounded-xl p-8 mb-12">
          <h3 className="font-wawaHeading text-2xl font-bold text-wawa-red-600 mb-6 text-center">Key Takeaways</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-wawa-red-600 text-white rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Social Media Expansion</h4>
              <p className="text-sm text-wawa-gray-700">
                Aggressive digital growth through structured partnership tiers (100 premiere, 100-150 sublevel) 
                and targeted content strategy to achieve 250K+ followers per platform.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-wawa-yellow-600 text-white rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-yellow-600 mb-2">Traditional Media Licensing</h4>
              <p className="text-sm text-wawa-gray-700">
                Strategic partnerships with cultural figures, TV shows, movies, and entertainment properties 
                to build brand recognition and market presence.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-wawaHeading text-lg font-semibold text-green-600 mb-2">Strategic Locations</h4>
              <p className="text-sm text-wawa-gray-700">
                Cost-effective expansion through travel hubs and event centers, focusing on high-traffic 
                locations with minimal investment requirements.
              </p>
            </div>
          </div>
        </div>
        
        {/* Performance Metrics */}
        <h3 className="font-wawaHeading text-xl font-semibold mb-4">Key Performance Metrics</h3>
        
        <div className="bg-white border border-wawa-gray-200 rounded-xl p-6 shadow-sm mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-wawa-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-wawa-red-600">80%</span>
              </div>
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-gray-800 mb-2">Cost Reduction</h4>
              <p className="text-sm text-wawa-gray-600">vs. traditional expansion methods</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-wawa-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-wawa-red-600">3.5x</span>
              </div>
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-gray-800 mb-2">Brand Recognition ROI</h4>
              <p className="text-sm text-wawa-gray-600">media value vs. spend</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-wawa-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-wawa-red-600">10%+</span>
              </div>
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-gray-800 mb-2">Market Share</h4>
              <p className="text-sm text-wawa-gray-600">target in new markets</p>
            </div>
          </div>
        </div>
        
        {/* Next Steps */}
        <h3 className="font-wawaHeading text-xl font-semibold mb-4">Implementation Plan</h3>
        
        <div className="bg-white border border-wawa-gray-200 rounded-xl p-6 shadow-sm mb-12">
          <ol className="space-y-4">
            <li className="flex">
              <span className="bg-wawa-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">1</span>
              <div>
                <h4 className="font-wawaHeading text-lg font-semibold text-wawa-gray-800">Launch Digital Partnerships</h4>
                <p className="text-sm text-wawa-gray-600">
                  Begin outreach and negotiations for premiere and sublevel partnerships, establish content 
                  creation pipelines, and implement tracking systems.
                </p>
              </div>
            </li>
            
            <li className="flex">
              <span className="bg-wawa-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">2</span>
              <div>
                <h4 className="font-wawaHeading text-lg font-semibold text-wawa-gray-800">Secure Media Licensing</h4>
                <p className="text-sm text-wawa-gray-600">
                  Initiate discussions with entertainment properties, cultural figures, and media platforms 
                  for strategic brand integration opportunities.
                </p>
              </div>
            </li>
            
            <li className="flex">
              <span className="bg-wawa-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">3</span>
              <div>
                <h4 className="font-wawaHeading text-lg font-semibold text-wawa-gray-800">Location Strategy</h4>
                <p className="text-sm text-wawa-gray-600">
                  Identify and evaluate potential travel hub and event center locations, develop market-specific 
                  product offerings, and establish partnerships.
                </p>
              </div>
            </li>
            
            <li className="flex">
              <span className="bg-wawa-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">4</span>
              <div>
                <h4 className="font-wawaHeading text-lg font-semibold text-wawa-gray-800">Performance Tracking</h4>
                <p className="text-sm text-wawa-gray-600">
                  Implement comprehensive tracking systems for digital engagement, media impact, and location 
                  performance metrics across all channels.
                </p>
              </div>
            </li>
          </ol>
        </div>
        
        {/* Vision Statement */}
        <div className="bg-wawa-red-600 text-white rounded-xl p-8 mb-8">
          <h3 className="font-wawaHeading text-2xl font-bold mb-4 text-center">Our Path Forward</h3>
          <p className="text-lg italic text-center mb-6">
            "Through our three-pillar strategy of social media expansion, traditional media licensing, and 
            strategic location presence, we will establish Wawa as a nationally recognized brand while 
            maintaining an 80% cost reduction compared to traditional expansion methods."
          </p>
          <p className="text-center">
            By prioritizing brand awareness and market penetration over immediate customer acquisition, 
            we are positioned to achieve sustainable growth through high-impact, low-cost initiatives.
          </p>
        </div>

        {/* Implementation Examples Section */}
<div className="temp-hidden" style={{ display: 'none' }}>
        <section className="implementation-examples mt-8 bg-wawa-gray-50 rounded-xl p-6">
          <h3 className="font-wawaHeading text-xl font-semibold text-wawa-red-600 mb-4">
            Implementation Examples
          </h3>
          
          <div className="space-y-6">
            {/* Strategy Integration Example */}
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">
                Example: Integrated Marketing Launch
              </h4>
              <p className="text-wawa-gray-700">
                Implementation of a coordinated multi-channel launch strategy:
                Digital Presence (i.e., influencer content calendar, social media campaigns),
                Traditional Media (i.e., entertainment property integrations, sports partnerships),
                Physical Locations (i.e., airport terminal openings, event center presence).
                Strategy includes synchronized timing and cross-channel promotion.
              </p>
              <div className="mt-4 text-sm text-wawa-gray-600">
                <strong>Expected Results:</strong> 200% increase in brand visibility,
                45% improvement in cross-channel engagement, 30% higher launch success rate.
              </div>
            </div>

            {/* Performance Tracking Example */}
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">
                Example: Comprehensive Success Metrics System
              </h4>
              <p className="text-wawa-gray-700">
                Development of an integrated performance tracking framework:
                Brand Metrics (i.e., awareness tracking, sentiment analysis),
                Financial Metrics (i.e., ROI by channel, cost efficiency),
                Operational Metrics (i.e., location performance, digital engagement),
                Market Share Metrics (i.e., penetration rates, competitive position).
                System includes real-time dashboards and predictive analytics.
              </p>
              <div className="mt-4 text-sm text-wawa-gray-600">
                <strong>Expected Results:</strong> 40% better performance prediction,
                35% faster strategy adjustments, 50% improvement in reporting accuracy.
              </div>
            </div>

            {/* Future Planning Example */}
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">
                Example: Strategic Evolution Framework
              </h4>
              <p className="text-wawa-gray-700">
                Creation of a dynamic strategy evolution system:
                Market Monitoring (i.e., trend analysis, competitive intelligence),
                Opportunity Assessment (i.e., new market scoring model),
                Resource Planning (i.e., capability gap analysis),
                Growth Modeling (i.e., expansion scenario planning).
                Framework includes quarterly strategy reviews and annual deep-dives.
              </p>
              <div className="mt-4 text-sm text-wawa-gray-600">
                <strong>Expected Results:</strong> 60% better opportunity identification,
                45% faster market response time, 35% improvement in growth forecasting.
              </div>
            </div>
          </div>
        </section>
  </div>
      </div>
    </SectionPage>
  );
};

export default Conclusion; 