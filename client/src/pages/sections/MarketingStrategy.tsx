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
          Our marketing strategy is built on three core pillars: expanding brand awareness through digital channels, 
          establishing physical presence in new markets through strategic partnerships, and enhancing customer loyalty 
          through personalized experiences. This integrated approach will drive sustainable growth while maintaining 
          Wawa's unique brand identity.
        </p>
        
        {/* Strategy Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-wawa-red-50 rounded-xl p-6">
            <div className="w-12 h-12 bg-wawa-red-600 text-white rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Digital Expansion</h4>
            <p>
              Leverage social media, influencer partnerships, and digital advertising to increase brand awareness in 
              new markets and engage with younger demographics.
            </p>
            <ul className="mt-4 list-disc list-inside text-sm">
              <li>Creator partnerships</li>
              <li>Targeted social campaigns</li>
              <li>Enhanced mobile app experience</li>
              <li>User-generated content initiatives</li>
            </ul>
          </div>
          
          <div className="bg-wawa-yellow-50 rounded-xl p-6">
            <div className="w-12 h-12 bg-wawa-yellow-500 text-white rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Strategic Partnerships</h4>
            <p>
              Establish Wawa's presence in new markets through airport licensing, corporate partnerships, and 
              strategic alliances with complementary brands.
            </p>
            <ul className="mt-4 list-disc list-inside text-sm">
              <li>Airport licensing program</li>
              <li>Corporate campus partnerships</li>
              <li>Co-branded initiatives</li>
              <li>Travel hub expansion</li>
            </ul>
          </div>
          
          <div className="bg-green-50 rounded-xl p-6">
            <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Customer Loyalty</h4>
            <p>
              Enhance customer loyalty through personalized experiences, expanded rewards programs, and 
              community engagement initiatives.
            </p>
            <ul className="mt-4 list-disc list-inside text-sm">
              <li>Enhanced loyalty program</li>
              <li>Personalized mobile offers</li>
              <li>Community involvement</li>
              <li>Customer feedback integration</li>
            </ul>
          </div>
        </div>
        
        {/* Target Audience */}
        <h3 className="font-wawaHeading text-xl font-semibold mb-4">Target Audience Segments</h3>
        
        <div className="space-y-6 mb-12">
          <div className="bg-white border border-wawa-gray-200 rounded-xl p-6 shadow-sm">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Commuters & Travelers</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="mb-4">
                  Working professionals and travelers seeking convenient, quality food and beverage options during their daily commute or travels.
                </p>
                <ul className="list-disc list-inside text-sm">
                  <li>Age: 25-54</li>
                  <li>Income: $50,000-$120,000</li>
                  <li>Behavior: Value convenience and speed</li>
                  <li>Needs: Quick service, quality products, mobile ordering</li>
                </ul>
              </div>
              <div>
                <h5 className="font-wawaHeading text-base font-semibold mb-2">Marketing Approach:</h5>
                <ul className="list-disc list-inside text-sm">
                  <li>Mobile app promotions for frequent purchases</li>
                  <li>Airport and travel hub presence</li>
                  <li>Loyalty rewards for repeat visits</li>
                  <li>Targeted ads in commuter-heavy areas</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-wawa-gray-200 rounded-xl p-6 shadow-sm">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Health-Conscious Millennials</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="mb-4">
                  Young professionals seeking healthier on-the-go options without sacrificing convenience or quality.
                </p>
                <ul className="list-disc list-inside text-sm">
                  <li>Age: 25-40</li>
                  <li>Income: $40,000-$90,000</li>
                  <li>Behavior: Health-conscious, digitally engaged</li>
                  <li>Needs: Nutritious options, sustainability, digital convenience</li>
                </ul>
              </div>
              <div>
                <h5 className="font-wawaHeading text-base font-semibold mb-2">Marketing Approach:</h5>
                <ul className="list-disc list-inside text-sm">
                  <li>Influencer partnerships highlighting healthy options</li>
                  <li>Social media campaigns featuring nutritional information</li>
                  <li>Sustainability initiatives and messaging</li>
                  <li>Mobile app features for customizing orders</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-wawa-gray-200 rounded-xl p-6 shadow-sm">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Local Community Members</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="mb-4">
                  Residents who view Wawa as part of their community and regularly visit for daily needs and social interaction.
                </p>
                <ul className="list-disc list-inside text-sm">
                  <li>Age: 18-65+</li>
                  <li>Income: Varied</li>
                  <li>Behavior: Regular visitors, community-oriented</li>
                  <li>Needs: Familiar environment, quality service, community connection</li>
                </ul>
              </div>
              <div>
                <h5 className="font-wawaHeading text-base font-semibold mb-2">Marketing Approach:</h5>
                <ul className="list-disc list-inside text-sm">
                  <li>Local community events and sponsorships</li>
                  <li>Charitable initiatives and partnerships</li>
                  <li>Store-specific promotions and events</li>
                  <li>Recognition programs for regular customers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Marketing Channels */}
        <h3 className="font-wawaHeading text-xl font-semibold mb-4">Marketing Channels & Tactics</h3>
        
        <div className="bg-wawa-gray-50 rounded-xl p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-4">Digital Channels</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-wawa-red-100 text-wawa-red-600 p-1 rounded mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-medium">Social Media Marketing</span>
                    <p className="text-sm text-wawa-gray-600">Targeted campaigns on Instagram, TikTok, and Facebook to reach new audiences and engage existing customers.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-wawa-red-100 text-wawa-red-600 p-1 rounded mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-medium">Influencer Partnerships</span>
                    <p className="text-sm text-wawa-gray-600">Collaborations with creators who align with our brand values to expand reach and build credibility.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-wawa-red-100 text-wawa-red-600 p-1 rounded mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-medium">Mobile App Enhancements</span>
                    <p className="text-sm text-wawa-gray-600">Improved functionality, personalized offers, and loyalty rewards to drive engagement and repeat purchases.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-wawa-red-100 text-wawa-red-600 p-1 rounded mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-medium">Email Marketing</span>
                    <p className="text-sm text-wawa-gray-600">Targeted campaigns based on customer preferences and purchase history to drive repeat visits.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-4">Traditional & Experiential</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-wawa-red-100 text-wawa-red-600 p-1 rounded mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-medium">Airport Licensing Program</span>
                    <p className="text-sm text-wawa-gray-600">Strategic placement in high-traffic airports to introduce the brand to travelers from across the country.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-wawa-red-100 text-wawa-red-600 p-1 rounded mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-medium">Community Events</span>
                    <p className="text-sm text-wawa-gray-600">Sponsorships and participation in local events to strengthen community connections and brand loyalty.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-wawa-red-100 text-wawa-red-600 p-1 rounded mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-medium">Out-of-Home Advertising</span>
                    <p className="text-sm text-wawa-gray-600">Strategic billboard and transit advertising in expansion markets to build brand awareness.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-wawa-red-100 text-wawa-red-600 p-1 rounded mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-medium">Pop-up Experiences</span>
                    <p className="text-sm text-wawa-gray-600">Temporary locations at events and festivals to introduce the brand to new audiences.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Positioning Statement */}
        <div className="bg-wawa-red-50 rounded-xl p-6 mb-8">
          <h3 className="font-wawaHeading text-xl font-bold text-wawa-red-600 mb-4">Brand Positioning Statement</h3>
          <blockquote className="text-xl font-wawaHeading text-wawa-gray-800 italic border-l-4 border-wawa-red-600 pl-4">
            "For busy individuals seeking quality convenience, Wawa offers a superior combination of fresh food, friendly service, and community connection that transforms everyday moments into meaningful experiences."
          </blockquote>
        </div>
      </div>
    </SectionPage>
  );
};

export default MarketingStrategy; 