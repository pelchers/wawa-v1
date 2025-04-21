import { FC } from 'react';
import SectionPage from '../../components/sections/SectionPage';

const ChallengesSolutions: FC = () => {
  return (
    <SectionPage 
      title="Challenges & Solutions"
      prevSection={{
        title: "Marketing Strategy",
        path: "/marketing-strategy"
      }}
      nextSection={{
        title: "Execution",
        path: "/execution"
      }}
    >
      <div className="prose prose-lg max-w-none">
        <h3 className="font-wawaHeading text-xl font-semibold mb-6">Strategic Challenges</h3>
        <p className="mb-8">
          As we implement our marketing strategy, we anticipate several key challenges that could impact our success. 
          We've developed proactive solutions to address each challenge, ensuring we can adapt and thrive in a 
          competitive landscape.
        </p>
        
        <div className="space-y-8 mb-12">
          {/* Challenge 1 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="font-wawaHeading text-xl font-bold text-wawa-red-600 mb-4">
                <span className="inline-block bg-wawa-red-600 text-white rounded-full w-8 h-8 text-center mr-2">1</span>
                Limited National Brand Recognition
              </h3>
              <p className="mb-4">
                While Wawa enjoys strong brand recognition in our core markets, we have limited visibility in potential 
                expansion regions, making it challenging to build customer interest and loyalty in new areas.
              </p>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Impact:</h4>
                <ul className="list-disc list-inside text-sm">
                  <li>Slower customer acquisition in new markets</li>
                  <li>Higher marketing costs to establish brand presence</li>
                  <li>Difficulty competing with established national chains</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="font-wawaHeading text-xl font-bold text-wawa-green-600 mb-4">Solution Strategy</h3>
              <p className="mb-4">
                Implement a phased approach to national brand building through strategic partnerships, digital presence, 
                and targeted physical locations in high-visibility areas.
              </p>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-wawaHeading text-base font-semibold text-wawa-green-600 mb-2">Airport Licensing Program</h4>
                  <p className="text-sm">
                    Establish Wawa locations in major airports to introduce the brand to travelers from across the country, 
                    creating brand familiarity before full market entry.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-wawaHeading text-base font-semibold text-wawa-green-600 mb-2">Influencer Partnerships</h4>
                  <p className="text-sm">
                    Collaborate with popular creators in target expansion markets to build brand awareness and credibility 
                    through authentic content and storytelling.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-wawaHeading text-base font-semibold text-wawa-green-600 mb-2">Digital Geotargeting</h4>
                  <p className="text-sm">
                    Implement targeted digital campaigns in expansion markets to build brand awareness before physical entry, 
                    focusing on Wawa's unique offerings and customer experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Challenge 2 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="font-wawaHeading text-xl font-bold text-wawa-red-600 mb-4">
                <span className="inline-block bg-wawa-red-600 text-white rounded-full w-8 h-8 text-center mr-2">2</span>
                Intense Competitive Landscape
              </h3>
              <p className="mb-4">
                The convenience store and quick-service food market is highly competitive, with established national 
                chains and regional players all vying for customer attention and loyalty.
              </p>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Impact:</h4>
                <ul className="list-disc list-inside text-sm">
                  <li>Pressure on pricing and margins</li>
                  <li>Need for continuous innovation</li>
                  <li>Customer acquisition and retention challenges</li>
                  <li>Increased marketing costs</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="font-wawaHeading text-xl font-bold text-wawa-green-600 mb-4">Solution Strategy</h3>
              <p className="mb-4">
                Differentiate Wawa through our unique product offerings, superior customer experience, and community 
                connection that competitors cannot easily replicate.
              </p>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-wawaHeading text-base font-semibold text-wawa-green-600 mb-2">Proprietary Product Focus</h4>
                  <p className="text-sm">
                    Highlight and expand our proprietary food and beverage offerings that customers can't get elsewhere, 
                    creating a unique value proposition.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-wawaHeading text-base font-semibold text-wawa-green-600 mb-2">Enhanced Customer Experience</h4>
                  <p className="text-sm">
                    Invest in employee training and technology to deliver a superior in-store experience that builds 
                    loyalty and differentiates from competitors.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-wawaHeading text-base font-semibold text-wawa-green-600 mb-2">Community Integration</h4>
                  <p className="text-sm">
                    Deepen community connections through local partnerships, events, and charitable initiatives that 
                    position Wawa as more than just a convenience store.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Challenge 3 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="font-wawaHeading text-xl font-bold text-wawa-red-600 mb-4">
                <span className="inline-block bg-wawa-red-600 text-white rounded-full w-8 h-8 text-center mr-2">3</span>
                Changing Consumer Preferences
              </h3>
              <p className="mb-4">
                Consumer preferences are rapidly evolving, with increasing demand for healthier options, 
                digital convenience, and sustainable practices that may not align with traditional convenience store offerings.
              </p>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Impact:</h4>
                <ul className="list-disc list-inside text-sm">
                  <li>Need for continuous product innovation</li>
                  <li>Investment in digital infrastructure</li>
                  <li>Sustainability initiatives and messaging</li>
                  <li>Balancing traditional offerings with new trends</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="font-wawaHeading text-xl font-bold text-wawa-green-600 mb-4">Solution Strategy</h3>
              <p className="mb-4">
                Embrace changing consumer preferences as an opportunity to innovate and differentiate, 
                positioning Wawa as a forward-thinking brand that evolves with its customers.
              </p>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-wawaHeading text-base font-semibold text-wawa-green-600 mb-2">Menu Innovation</h4>
                  <p className="text-sm">
                    Expand healthier food and beverage options while maintaining the quality and convenience 
                    that customers expect from Wawa.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-wawaHeading text-base font-semibold text-wawa-green-600 mb-2">Digital Transformation</h4>
                  <p className="text-sm">
                    Enhance our mobile app and digital ordering capabilities to provide the seamless experience 
                    that today's consumers demand.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-wawaHeading text-base font-semibold text-wawa-green-600 mb-2">Sustainability Initiatives</h4>
                  <p className="text-sm">
                    Implement and communicate sustainability practices in packaging, sourcing, and operations 
                    to appeal to environmentally conscious consumers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Risk Management */}
        <h3 className="font-wawaHeading text-xl font-semibold mb-4">Risk Management Framework</h3>
        
        <div className="bg-wawa-gray-50 rounded-xl p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Identify</h4>
              <p className="text-sm mb-3">
                Continuous monitoring of market trends, competitor actions, and consumer feedback to identify 
                potential challenges early.
              </p>
              <ul className="list-disc list-inside text-xs text-wawa-gray-600">
                <li>Quarterly market analysis</li>
                <li>Customer feedback systems</li>
                <li>Competitive intelligence</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Assess</h4>
              <p className="text-sm mb-3">
                Evaluate the potential impact and likelihood of each challenge to prioritize response efforts 
                and resource allocation.
              </p>
              <ul className="list-disc list-inside text-xs text-wawa-gray-600">
                <li>Impact assessment matrix</li>
                <li>Probability analysis</li>
                <li>Resource requirement evaluation</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Mitigate</h4>
              <p className="text-sm mb-3">
                Develop and implement proactive strategies to address challenges before they significantly 
                impact our marketing objectives.
              </p>
              <ul className="list-disc list-inside text-xs text-wawa-gray-600">
                <li>Preventive action plans</li>
                <li>Strategic partnerships</li>
                <li>Diversification strategies</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Monitor</h4>
              <p className="text-sm mb-3">
                Continuously track the effectiveness of our solutions and adjust as needed to ensure 
                ongoing success in addressing challenges.
              </p>
              <ul className="list-disc list-inside text-xs text-wawa-gray-600">
                <li>Key performance indicators</li>
                <li>Regular review meetings</li>
                <li>Adaptive response protocols</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Contingency Planning */}
        <h3 className="font-wawaHeading text-xl font-semibold mb-4">Contingency Planning</h3>
        
        <div className="bg-white border border-wawa-gray-200 rounded-xl p-6 shadow-sm mb-8">
          <p className="mb-6">
            While we've developed comprehensive solutions for anticipated challenges, we recognize the importance 
            of being prepared for unexpected developments. Our contingency planning ensures we can respond quickly 
            and effectively to changing circumstances.
          </p>
          
          <div className="space-y-4">
            <div className="border-l-4 border-wawa-yellow-500 pl-4">
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-gray-800 mb-2">Market Entry Resistance</h4>
              <p className="text-sm text-wawa-gray-700">
                If we encounter stronger than expected resistance in new markets, we'll pivot to a more gradual 
                approach with increased community engagement and local partnerships to build acceptance.
              </p>
            </div>
            
            <div className="border-l-4 border-wawa-yellow-500 pl-4">
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-gray-800 mb-2">Digital Adoption Challenges</h4>
              <p className="text-sm text-wawa-gray-700">
                If digital engagement metrics fall below targets, we'll implement enhanced in-store promotion of 
                digital tools, simplified user interfaces, and additional incentives for digital adoption.
              </p>
            </div>
            
            <div className="border-l-4 border-wawa-yellow-500 pl-4">
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-gray-800 mb-2">Competitive Response</h4>
              <p className="text-sm text-wawa-gray-700">
                If competitors aggressively respond to our expansion, we'll emphasize our unique value proposition 
                and potentially accelerate certain initiatives to maintain momentum and market position.
              </p>
            </div>
            
            <div className="border-l-4 border-wawa-yellow-500 pl-4">
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-gray-800 mb-2">Economic Volatility</h4>
              <p className="text-sm text-wawa-gray-700">
                In case of economic downturns, we have tiered spending plans that allow for strategic scaling back 
                of certain initiatives while maintaining core programs essential to long-term growth.
              </p>
            </div>
          </div>
        </div>
        
        {/* Success Metrics */}
        <h3 className="font-wawaHeading text-xl font-semibold mb-4">Solution Success Metrics</h3>
        
        <div className="bg-wawa-red-50 rounded-xl p-6">
          <p className="mb-6">
            To ensure our solutions are effectively addressing the challenges, we'll track the following key metrics:
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Brand Recognition</h4>
              <ul className="list-disc list-inside text-sm">
                <li>Brand awareness surveys in new markets</li>
                <li>Social media mention growth</li>
                <li>Search volume for Wawa in target regions</li>
                <li>Target: 30% increase in brand recognition in expansion markets within 12 months</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Competitive Position</h4>
              <ul className="list-disc list-inside text-sm">
                <li>Market share in core and expansion regions</li>
                <li>Customer preference surveys</li>
                <li>Conversion rates from competitors</li>
                <li>Target: Maintain or grow market share in all regions despite increased competition</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Consumer Engagement</h4>
              <ul className="list-disc list-inside text-sm">
                <li>Digital platform adoption rates</li>
                <li>Healthy menu option sales</li>
                <li>Customer feedback on new initiatives</li>
                <li>Target: 50% increase in mobile app engagement within 9 months</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SectionPage>
  );
};

export default ChallengesSolutions;