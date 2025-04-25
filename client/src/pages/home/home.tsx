import { useState, useEffect, useRef } from 'react';
import { logPageView } from '../../utils/logger';
import SectionNavigation, { Section } from '../../components/navigation/SectionNavigation';
import PrimaryNavbar from '../../components/navigation/PrimaryNavbar';
import FeedbackForm from '../../components/feedback/FeedbackForm';
import ApprovalModal from '../../components/approvals/ApprovalModal';
import MarketingPlanDropdown from '../../components/navigation/MarketingPlanDropdown';
import SectionApprovalList from '../../components/approvals/SectionApprovalList';
import SectionFeedback from '../../components/feedback/SectionFeedback';

// Keep the same sections as original home page
const sections: Section[] = [
  { id: 'executive-summary', title: 'Executive Summary' },
  { id: 'mission-statement', title: 'Mission Statement' },
  { id: 'marketing-objectives', title: 'Marketing Objectives' },
  { id: 'swot-analysis', title: 'SWOT Analysis' },
  { id: 'market-research', title: 'Market Research' },
  { id: 'marketing-strategy', title: 'Marketing Strategy' },
  { id: 'challenges-solutions', title: 'Challenges & Solutions' },
  { id: 'execution', title: 'Execution' },
  { id: 'budget', title: 'Budget' },
  { id: 'conclusion', title: 'Conclusion' },
  { id: 'feedback', title: 'Feedback' }
];

const Home = () => {
  const [activeSection, setActiveSection] = useState<string>('executive-summary');
  const [showApprovalModal, setShowApprovalModal] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  
  const sectionRefs = {
    'executive-summary': useRef<HTMLDivElement>(null),
    'mission-statement': useRef<HTMLDivElement>(null),
    'marketing-objectives': useRef<HTMLDivElement>(null),
    'swot-analysis': useRef<HTMLDivElement>(null),
    'market-research': useRef<HTMLDivElement>(null),
    'marketing-strategy': useRef<HTMLDivElement>(null),
    'market-challenges': useRef<HTMLDivElement>(null),
    'execution': useRef<HTMLDivElement>(null),
    'budget': useRef<HTMLDivElement>(null),
    'conclusion': useRef<HTMLDivElement>(null),
    'feedback': useRef<HTMLDivElement>(null),
    'key-performance': useRef<HTMLDivElement>(null)
  };

  useEffect(() => {
    logPageView('home-v2');
  }, []);

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    sectionRefs[sectionId as keyof typeof sectionRefs]?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const handleApproveClick = () => setShowApprovalModal(true);
  const handleApprovalSuccess = () => setIsApproved(true);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner - Full Width with Red Background */}
      <div className="w-full bg-wawa-red-600 text-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-16">
          <div className="text-center">
            <h1 className="font-wawaHeading text-4xl md:text-5xl font-bold mb-6">
              Marketing Plan
            </h1>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              A comprehensive marketing strategy to drive growth and engagement for Wawa's coffee products.
            </p>
            {isApproved ? (
              <div className="inline-flex items-center bg-wawa-green-100 text-wawa-green-800 px-4 py-2 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-wawaHeading font-medium">Approved</span>
              </div>
            ) : (
              <button 
                onClick={handleApproveClick}
                className="bg-wawa-yellow-400 hover:bg-wawa-yellow-500 text-wawa-red-900 font-wawaHeading font-medium px-8 py-3 rounded-xl transition-all duration-200 hover:scale-105"
              >
                Approve Marketing Plan
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Area - Bento Grid Layout */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Executive Summary - Full Width */}
          <div className="md:col-span-2 lg:col-span-3">
            <section 
              ref={sectionRefs['executive-summary']}
              id="executive-summary"
              className="bg-wawa-red-50 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg"
            >
              <h2 className="font-wawaHeading text-3xl font-bold text-wawa-red-600 mb-6">
                Executive Summary
              </h2>
              <div className="prose prose-lg max-w-none">
                <h3 className="font-wawaHeading text-xl font-semibold mb-4">About Our Company</h3>
                <p>
                  Wawa is a leading convenience store brand with a strong regional presence and an expanding footprint across the U.S. 
                  We aim to elevate the Wawa experience through strategic marketing initiatives.
                </p>
                
                <h3 className="font-wawaHeading text-xl font-semibold mt-6 mb-4">Our Vision</h3>
                <p>
                  To become the go-to brand for consumers seeking convenience, quality, and community through our 
                  three strategic pillars: aggressive social media expansion and digital engagement, strategic 
                  traditional media licensing with prominent cultural figures and brands with corporate event expansion (public exposure of events), and cost-effective 
                  expansion into travel hubs and event centers nationwide.
       </p>
              </div>
            </section>
          </div>

          {/* Mission Statement - Colored Background */}
          <div className="md:col-span-2">
            <section 
              ref={sectionRefs['mission-statement']}
              id="mission-statement"
              className="bg-wawa-yellow-50 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg"
            >
              <h2 className="font-wawaHeading text-3xl font-bold text-wawa-red-600 mb-6">
                Mission Statement
              </h2>
              <blockquote className="text-xl font-wawaHeading text-wawa-gray-800 italic mb-6">
                "To provide high-quality, customer-focused service with products and experiences that reflect Wawa's commitment to community and innovation."
              </blockquote>
              <p className="text-wawa-gray-700">
                Our unique selling proposition (USP) is centered around Wawa's commitment to quality, innovation, and customer experience. 
                We aim to deliver exceptional value through social media engagement, corporate events, and strategic licensing to enhance our brand visibility.
              </p>
            </section>
          </div>

          {/* Marketing Objectives */}
          <div>
            <section 
              ref={sectionRefs['marketing-objectives']}
              id="marketing-objectives"
              className="bg-blue-50 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg h-full"
            >
              <h2 className="font-wawaHeading text-2xl font-bold text-wawa-red-600 mb-6">
                Marketing Objectives
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4">
                  <h3 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Problem</h3>
                  <p className="text-wawa-gray-700">Limited national visibility compared to competitors</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h3 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Solution</h3>
                  <p className="text-wawa-gray-700">Leverage social media partnerships, live events, and airport stall licensing</p>
                </div>
              </div>
            </section>
          </div>

          {/* Key Performance Areas - Before SWOT Analysis */}
          <div className="lg:col-span-3">
            <section 
              ref={sectionRefs['key-performance']}
              id="key-performance"
              className="bg-blue-50 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg"
            >
              <h2 className="font-wawaHeading text-3xl font-bold text-wawa-red-600 mb-6">
                Key Performance Areas
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6">
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
                      <p>• 100 Premiere Partnerships</p>
                      <p>• 100-150 Sublevel Partnerships</p>
                      <p>• 250K+ followers per platform</p>
                    </div>
                    <div className="h-2 bg-wawa-gray-100 rounded-full">
                      <div className="h-2 bg-wawa-red-500 rounded-full" style={{ width: '0%' }}></div>
                    </div>
                    <p className="text-xs text-wawa-gray-500 italic">Starting fresh with structured tracking</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6">
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
                    <div className="space-y-2 text-sm text-wawa-gray-600">
                      <p className="font-semibold">Goal: Exceed current fast food brand penetration in new markets</p>
                    </div>
                    <div className="h-2 bg-wawa-gray-100 rounded-full">
                      <div className="h-2 bg-wawa-red-500 rounded-full" style={{ width: '0%' }}></div>
                    </div>
                    <p className="text-xs text-wawa-gray-500 italic">New market entry strategy</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6">
                  <h3 className="font-wawaHeading text-xl font-bold text-wawa-red-600 mb-4">Brand Impact</h3>
                  <div className="space-y-4">
                    <div className="bg-wawa-yellow-50 p-3 rounded-lg">
                      <p className="text-sm text-wawa-gray-700 font-semibold mb-2">Strategic Focus Note:</p>
                      <p className="text-sm text-wawa-gray-600">Prioritizing brand loyalty and awareness over immediate customer growth, leveraging low-cost approach across:</p>
                      <ul className="list-disc pl-4 mt-2 text-sm text-wawa-gray-600">
                        <li>Social media expansion</li>
                        <li>Strategic media licensing</li>
                        <li>Travel hub presence</li>
                      </ul>
                    </div>
                    <div className="text-sm text-wawa-gray-600 mt-2">
                      <p className="font-semibold">Cost-Efficient Strategy:</p>
                      <p>Low overhead approach enables focused brand building without pressure for immediate customer acquisition</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Performance Context */}
              <div className="bg-white rounded-xl p-6 mt-6">
                <h3 className="font-wawaHeading text-xl font-bold text-wawa-red-600 mb-4">Performance Strategy Context</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-wawaHeading text-lg font-semibold text-wawa-gray-800 mb-2">Digital Engagement Breakdown</h4>
                    <ul className="list-disc pl-6 text-wawa-base font-wawa text-wawa-gray-700">
                      <li className="mb-2">Premiere partnerships focus on major influencers and cultural figures</li>
                      <li className="mb-2">Sublevel partnerships target niche market segments</li>
                      <li className="mb-2">Platform-specific content strategies for organic growth</li>
                      <li className="mb-2">Cross-platform engagement tracking and optimization</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-wawaHeading text-lg font-semibold text-wawa-gray-800 mb-2">Market Entry Approach</h4>
                    <ul className="list-disc pl-6 text-wawa-base font-wawa text-wawa-gray-700">
                      <li className="mb-2">Focus on brand recognition before expansion</li>
                      <li className="mb-2">Strategic positioning against established brands</li>
                      <li className="mb-2">Leveraging high-traffic, low-cost locations</li>
                      <li className="mb-2">Building foundation for future growth</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* SWOT Analysis with more detail */}
          <div className="md:col-span-2 lg:col-span-3">
            <section 
              ref={sectionRefs['swot-analysis']}
              id="swot-analysis"
              className="bg-green-50 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg"
            >
              <h2 className="font-wawaHeading text-3xl font-bold text-wawa-red-600 mb-6">
                SWOT Analysis
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6">
                  <h3 className="font-wawaHeading text-xl font-bold text-wawa-red-600 mb-4">Strengths</h3>
                  <ul className="list-disc list-inside space-y-2 text-wawa-gray-700">
                    <li>Strong brand recognition in existing markets</li>
                    <li>High-quality product offerings and service standards</li>
                    <li>Established customer loyalty programs</li>
                    <li>Efficient supply chain management</li>
                    <li>Strong financial position</li>
                    <li>Experienced management team</li>
                    <li>Proven track record in contract negotiations</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <h3 className="font-wawaHeading text-xl font-bold text-wawa-red-600 mb-4">Weaknesses</h3>
                  <ul className="list-disc list-inside space-y-2 text-wawa-gray-700">
                    <li>Limited presence outside core regions</li>
                    <li>Regional brand perception constraints</li>
                    <li>Market saturation in existing territories</li>
                    <li>Dependency on traditional marketing channels</li>
                    <li>Limited digital engagement metrics</li>
                    <li>Resource constraints for rapid expansion</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <h3 className="font-wawaHeading text-xl font-bold text-wawa-red-600 mb-4">Opportunities</h3>
                  <ul className="list-disc list-inside space-y-2 text-wawa-gray-700">
                    <li>Expansion into airport locations nationwide</li>
                    <li>Growing social media influence potential</li>
                    <li>Strategic creator partnerships</li>
                    <li>New market penetration opportunities</li>
                    <li>Digital transformation initiatives</li>
                    <li>Emerging consumer trends alignment</li>
                    <li>Innovation in product offerings</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <h3 className="font-wawaHeading text-xl font-bold text-wawa-red-600 mb-4">Threats</h3>
                  <ul className="list-disc list-inside space-y-2 text-wawa-gray-700">
                    <li>Intense market competition</li>
                    <li>Economic volatility impact</li>
                    <li>Changing consumer preferences</li>
                    <li>Supply chain disruptions</li>
                    <li>Regulatory changes</li>
                    <li>Rising operational costs</li>
                    <li>Technology adaptation challenges</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Market Research - Full Width with Original Content */}
          <div className="lg:col-span-3">
            <section 
              ref={sectionRefs['market-research']}
              id="market-research"
              className="bg-purple-50 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg"
            >
              <h2 className="font-wawaHeading text-3xl font-bold text-wawa-red-600 mb-6">
                Market Research
              </h2>
              
              {/* Competitor Analysis Table */}
              <div className="bg-white rounded-xl p-6 mb-6">
                <h3 className="font-wawaHeading text-xl font-bold text-wawa-red-600 mb-4">Competitor Analysis</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr className="bg-wawa-red-50 text-wawa-red-700">
                        <th className="py-3 px-4 text-left">Competitor</th>
                        <th className="py-3 px-4 text-left">Strengths</th>
                        <th className="py-3 px-4 text-left">Weaknesses</th>
                        <th className="py-3 px-4 text-left">Market Share</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-wawa-gray-200">
                      <tr>
                        <td className="py-3 px-4 font-medium">7-Eleven</td>
                        <td className="py-3 px-4">Global presence, 24/7 operations</td>
                        <td className="py-3 px-4">Limited fresh food options</td>
                        <td className="py-3 px-4">28%</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">Sheetz</td>
                        <td className="py-3 px-4">Made-to-order food, modern stores</td>
                        <td className="py-3 px-4">Limited East Coast presence</td>
                        <td className="py-3 px-4">15%</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">QuickChek</td>
                        <td className="py-3 px-4">Fresh food, coffee program</td>
                        <td className="py-3 px-4">Smaller footprint, regional</td>
                        <td className="py-3 px-4">8%</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">Royal Farms</td>
                        <td className="py-3 px-4">Famous fried chicken, clean stores</td>
                        <td className="py-3 px-4">Limited menu variety</td>
                        <td className="py-3 px-4">12%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Market Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-wawaHeading text-lg font-semibold text-wawa-gray-800 mb-2">Customer Demographics</h4>
                  <ul className="list-disc pl-6 text-wawa-base font-wawa text-wawa-gray-700">
                    <li className="mb-2">Core customers: 25-54 years old</li>
                    <li className="mb-2">60% commuters and travelers</li>
                    <li className="mb-2">40% local neighborhood residents</li>
                    <li className="mb-2">Average visit frequency: 2-3 times per week</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-wawaHeading text-lg font-semibold text-wawa-gray-800 mb-2">Market Trends</h4>
                  <ul className="list-disc pl-6 text-wawa-base font-wawa text-wawa-gray-700">
                    <li className="mb-2">Growing demand for healthier on-the-go options</li>
                    <li className="mb-2">Increased use of mobile ordering and payment</li>
                    <li className="mb-2">Rising preference for sustainable and local products</li>
                    <li className="mb-2">Shift toward electric vehicle charging stations</li>
                  </ul>
                </div>
              </div>

              {/* Key Issues */}
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-wawaHeading text-xl font-bold text-wawa-red-600 mb-4">Key Issues</h3>
                <ul className="list-disc pl-6 text-wawa-base font-wawa text-wawa-gray-700">
                  <li className="mb-2">Need to differentiate from growing competition</li>
                  <li className="mb-2">Balancing traditional offerings with healthier options</li>
                  <li className="mb-2">Adapting to changing commuter patterns post-pandemic</li>
                  <li className="mb-2">Maintaining quality and consistency across expanding locations</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Marketing Strategy */}
          <div className="lg:col-span-3">
            <section 
              ref={sectionRefs['marketing-strategy']}
              id="marketing-strategy"
              className="bg-yellow-50 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg"
            >
              <h2 className="font-wawaHeading text-3xl font-bold text-wawa-yellow-600 mb-6">
                Marketing Strategy
              </h2>
              
              {/* Strategic Goals */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-wawaHeading text-lg font-semibold text-wawa-yellow-700 mb-2">Short-term</h4>
                  <ul className="list-disc pl-6 text-wawa-base font-wawa text-wawa-gray-700">
                    <li className="mb-2">Launch segmented influencer campaigns</li>
                    <li className="mb-2">Establish market-specific metrics tracking</li>
                    <li className="mb-2">Test regional product variations</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-wawaHeading text-lg font-semibold text-wawa-yellow-700 mb-2">Mid-term</h4>
                  <ul className="list-disc pl-6 text-wawa-base font-wawa text-wawa-gray-700">
                    <li className="mb-2">Optimize location-specific offerings</li>
                    <li className="mb-2">Scale successful market adaptations</li>
                    <li className="mb-2">Refine cross-channel tracking</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-wawaHeading text-lg font-semibold text-wawa-yellow-700 mb-2">Long-term</h4>
                  <ul className="list-disc pl-6 text-wawa-base font-wawa text-wawa-gray-700">
                    <li className="mb-2">Data-driven expansion strategy</li>
                    <li className="mb-2">Market-optimized product lines</li>
                    <li className="mb-2">Integrated performance analytics</li>
                  </ul>
                </div>
              </div>

              {/* Marketing Channels */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-wawaHeading text-lg font-semibold text-wawa-gray-800 mb-2">Digital Presence</h4>
                  <ul className="list-disc pl-6 text-wawa-base font-wawa text-wawa-gray-700">
                    <li className="mb-2">Market-segmented social campaigns</li>
                    <li className="mb-2">Regional influencer partnerships</li>
                    <li className="mb-2">Location-based digital content</li>
                    <li className="mb-2">Targeted community initiatives</li>
                    <li className="mb-2">Performance tracking by segment</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-wawaHeading text-lg font-semibold text-wawa-gray-800 mb-2">Traditional Media</h4>
                  <ul className="list-disc pl-6 text-wawa-base font-wawa text-wawa-gray-700">
                    <li className="mb-2">Market-aligned celebrity partnerships</li>
                    <li className="mb-2">Regional entertainment collaborations</li>
                    <li className="mb-2">Local cultural integration</li>
                    <li className="mb-2">Cross-market brand tracking</li>
                    <li className="mb-2">ROI analysis by region</li>
                  </ul>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-wawaHeading text-xl font-bold text-wawa-red-600 mb-4">Timeline</h3>
                <div className="relative">
                  <div className="absolute top-0 bottom-0 left-6 w-1 bg-wawa-yellow-200"></div>
                  <div className="ml-12 space-y-6">
                    <div className="relative">
                      <div className="absolute -left-12 top-1 w-6 h-6 rounded-full bg-wawa-yellow-500"></div>
                      <h4 className="text-wawa-lg font-wawaHeading font-semibold text-wawa-yellow-700">Q1 2023</h4>
                      <p className="text-wawa-base font-wawa text-wawa-gray-700">Launch influencer partnership program and social media campaign</p>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-12 top-1 w-6 h-6 rounded-full bg-wawa-yellow-500"></div>
                      <h4 className="text-wawa-lg font-wawaHeading font-semibold text-wawa-yellow-700">Q2 2023</h4>
                      <p className="text-wawa-base font-wawa text-wawa-gray-700">Secure first major entertainment industry partnership and begin airport location rollout</p>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-12 top-1 w-6 h-6 rounded-full bg-wawa-yellow-500"></div>
                      <h4 className="text-wawa-lg font-wawaHeading font-semibold text-wawa-yellow-700">Q3 2023</h4>
                      <p className="text-wawa-base font-wawa text-wawa-gray-700">Launch celebrity ambassador program and expand travel hub presence</p>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-12 top-1 w-6 h-6 rounded-full bg-wawa-yellow-500"></div>
                      <h4 className="text-wawa-lg font-wawaHeading font-semibold text-wawa-yellow-700">Q4 2023</h4>
                      <p className="text-wawa-base font-wawa text-wawa-gray-700">Major entertainment event sponsorships and digital community expansion</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Detailed Problems & Solutions Analysis */}
          <div className="lg:col-span-3">
            <section 
              ref={sectionRefs['market-challenges']}
              id="market-challenges"
              className="bg-red-50 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg"
            >
              <h2 className="font-wawaHeading text-3xl font-bold text-wawa-red-600 mb-6">
                Market Challenges & Solutions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Market Reach Issues */}
                <div className="bg-white rounded-xl p-6">
                  <h3 className="font-wawaHeading text-xl font-bold text-wawa-red-600 mb-4">
                    Market Reach Limitations
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-wawaHeading text-lg font-semibold text-wawa-gray-800 mb-2">Issues:</h4>
                      <ul className="list-disc list-inside space-y-2 text-wawa-gray-700">
                        <li>Regional brand recognition constraints</li>
                        <li>Limited exposure in potential growth markets</li>
                        <li>Geographical expansion challenges</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-wawaHeading text-lg font-semibold text-wawa-gray-800 mb-2">Targeted Solutions:</h4>
                      <ul className="list-disc list-inside space-y-2 text-wawa-gray-700">
                        <li>Strategic airport stall placement in new markets</li>
                        <li>Influencer partnerships in target regions</li>
                        <li>Digital presence expansion through social media</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Customer Loyalty Evolution */}
                <div className="bg-white rounded-xl p-6">
                  <h3 className="font-wawaHeading text-xl font-bold text-wawa-red-600 mb-4">
                    Customer Loyalty Challenges
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-wawaHeading text-lg font-semibold text-wawa-gray-800 mb-2">Issues:</h4>
                      <ul className="list-disc list-inside space-y-2 text-wawa-gray-700">
                        <li>Regressive family culture connection</li>
                        <li>Changing demographic preferences</li>
                        <li>Traditional loyalty program limitations</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-wawaHeading text-lg font-semibold text-wawa-gray-800 mb-2">Solutions:</h4>
                      <ul className="list-disc list-inside space-y-2 text-wawa-gray-700">
                        <li>Modernized loyalty program with digital integration</li>
                        <li>Enhanced mobile app experience</li>
                        <li>Community-focused social media engagement</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Brand Image Alignment */}
                <div className="bg-white rounded-xl p-6">
                  <h3 className="font-wawaHeading text-xl font-bold text-wawa-red-600 mb-4">
                    Corporate Values Integration
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-wawaHeading text-lg font-semibold text-wawa-gray-800 mb-2">Issues:</h4>
                      <ul className="list-disc list-inside space-y-2 text-wawa-gray-700">
                        <li>Corporate values not fully visible in brand image</li>
                        <li>Inconsistent message across channels</li>
                        <li>Limited corporate culture showcase</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-wawaHeading text-lg font-semibold text-wawa-gray-800 mb-2">Solutions:</h4>
                      <ul className="list-disc list-inside space-y-2 text-wawa-gray-700">
                        <li>Creator-driven content highlighting company culture</li>
                        <li>Employee spotlight series on social media</li>
                        <li>Corporate event content distribution</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Budget & Growth Constraints */}
                <div className="bg-white rounded-xl p-6">
                  <h3 className="font-wawaHeading text-xl font-bold text-wawa-red-600 mb-4">
                    Resource Optimization
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-wawaHeading text-lg font-semibold text-wawa-gray-800 mb-2">Issues:</h4>
                      <ul className="list-disc list-inside space-y-2 text-wawa-gray-700">
                        <li>Major budget constraints</li>
                        <li>Diminishing returns on store expansion</li>
                        <li>Limited new product sales growth</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-wawaHeading text-lg font-semibold text-wawa-gray-800 mb-2">Solutions:</h4>
                      <ul className="list-disc list-inside space-y-2 text-wawa-gray-700">
                        <li>Cost-effective airport licensing strategy</li>
                        <li>Leveraged creator partnerships for marketing</li>
                        <li>Data-driven market research improvements</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Execution */}
          <div className="lg:col-span-3">
            <section 
              ref={sectionRefs['execution']}
              id="execution"
              className="bg-blue-50 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg"
            >
              <h2 className="font-wawaHeading text-3xl font-bold text-wawa-red-600 mb-6">
                Execution
              </h2>
              
              {/* Process Steps with Numbered Circles */}
              <h3 className="font-wawaHeading text-2xl font-semibold mb-4">Process</h3>
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                <div className="bg-wawa-red-50 p-4 rounded-lg text-center">
                  <div className="w-12 h-12 bg-wawa-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-wawa-xl font-bold">1</span>
                  </div>
                  <h4 className="text-wawa-lg font-wawaHeading font-semibold text-wawa-red-700 mb-2">Planning</h4>
                  <p className="text-wawa-sm font-wawa text-wawa-gray-700">Strategy development and resource allocation</p>
                </div>
                
                <div className="bg-wawa-red-50 p-4 rounded-lg text-center">
                  <div className="w-12 h-12 bg-wawa-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-wawa-xl font-bold">2</span>
                  </div>
                  <h4 className="text-wawa-lg font-wawaHeading font-semibold text-wawa-red-700 mb-2">Creation</h4>
                  <p className="text-wawa-sm font-wawa text-wawa-gray-700">Content and campaign development</p>
                </div>
                
                <div className="bg-wawa-red-50 p-4 rounded-lg text-center">
                  <div className="w-12 h-12 bg-wawa-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-wawa-xl font-bold">3</span>
                  </div>
                  <h4 className="text-wawa-lg font-wawaHeading font-semibold text-wawa-red-700 mb-2">Execution</h4>
                  <p className="text-wawa-sm font-wawa text-wawa-gray-700">Campaign launch and implementation</p>
                </div>
                
                <div className="bg-wawa-red-50 p-4 rounded-lg text-center">
                  <div className="w-12 h-12 bg-wawa-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-wawa-xl font-bold">4</span>
                  </div>
                  <h4 className="text-wawa-lg font-wawaHeading font-semibold text-wawa-red-700 mb-2">Analysis</h4>
                  <p className="text-wawa-sm font-wawa text-wawa-gray-700">Performance tracking and optimization</p>
                </div>
              </div>
              
              {/* Team Structure */}
              <h3 className="font-wawaHeading text-2xl font-semibold mb-4">Team Structure</h3>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white border border-wawa-gray-200 rounded-lg p-4">
                  <h4 className="text-wawa-lg font-wawaHeading font-semibold text-wawa-red-600 mb-2">Marketing Team</h4>
                  <ul className="list-disc pl-6 text-wawa-base font-wawa text-wawa-gray-700">
                    <li className="mb-2">Marketing Director</li>
                    <li className="mb-2">Brand Managers (2)</li>
                    <li className="mb-2">Digital Marketing Specialists (3)</li>
                    <li className="mb-2">Content Creators (2)</li>
                    <li className="mb-2">Social Media Managers (2)</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-wawa-gray-200 rounded-lg p-4">
                  <h4 className="text-wawa-lg font-wawaHeading font-semibold text-wawa-red-600 mb-2">Operations Team</h4>
                  <ul className="list-disc pl-6 text-wawa-base font-wawa text-wawa-gray-700">
                    <li className="mb-2">Operations Director</li>
                    <li className="mb-2">Regional Managers (4)</li>
                    <li className="mb-2">Training Specialists (2)</li>
                    <li className="mb-2">Supply Chain Coordinator</li>
                    <li className="mb-2">Quality Assurance Manager</li>
                  </ul>
                </div>
                
                <div className="bg-white border border-wawa-gray-200 rounded-lg p-4">
                  <h4 className="text-wawa-lg font-wawaHeading font-semibold text-wawa-red-600 mb-2">Technology Team</h4>
                  <ul className="list-disc pl-6 text-wawa-base font-wawa text-wawa-gray-700">
                    <li className="mb-2">IT Director</li>
                    <li className="mb-2">Mobile App Developers (3)</li>
                    <li className="mb-2">UX/UI Designers (2)</li>
                    <li className="mb-2">Data Analysts (2)</li>
                    <li className="mb-2">Systems Administrator</li>
                  </ul>
                </div>
              </div>
              
              {/* Resources */}
              <h3 className="font-wawaHeading text-2xl font-semibold mb-4">Resources</h3>
              <div className="bg-wawa-gray-100 p-4 rounded-lg">
                <h4 className="text-wawa-lg font-wawaHeading font-semibold text-wawa-gray-800 mb-2">Technology</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-6 text-wawa-base font-wawa text-wawa-gray-700">
                    <li className="mb-2">Mobile app development platform</li>
                    <li className="mb-2">Customer relationship management (CRM) system</li>
                    <li className="mb-2">Digital asset management system</li>
                  </ul>
                  <ul className="list-disc pl-6 text-wawa-base font-wawa text-wawa-gray-700">
                    <li className="mb-2">Analytics and reporting tools</li>
                    <li className="mb-2">Social media management platform</li>
                    <li className="mb-2">Email marketing automation</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Budget */}
          <div className="lg:col-span-3">
            <section 
              ref={sectionRefs['budget']}
              id="budget"
              className="bg-green-50 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg"
            >
              <h2 className="font-wawaHeading text-3xl font-bold text-wawa-red-600 mb-6">
                Budget Allocation
              </h2>
              
              {/* Detailed Budget Table */}
              <div className="bg-white rounded-xl p-6 mb-6">
                <h3 className="font-wawaHeading text-xl font-bold text-wawa-red-600 mb-4">Marketing Budget Allocation</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr className="bg-wawa-yellow-50 text-wawa-yellow-700">
                        <th className="py-3 px-4 text-left">Category</th>
                        <th className="py-3 px-4 text-left">Allocation</th>
                        <th className="py-3 px-4 text-left">Amount</th>
                        <th className="py-3 px-4 text-left">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-wawa-gray-200">
                      <tr>
                        <td className="py-3 px-4 font-medium">Digital Marketing</td>
                        <td className="py-3 px-4">30%</td>
                        <td className="py-3 px-4">$3,000,000</td>
                        <td className="py-3 px-4">Social media campaigns, influencer partnerships, segmented digital content by market</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">Media Licensing</td>
                        <td className="py-3 px-4">25%</td>
                        <td className="py-3 px-4">$2,500,000</td>
                        <td className="py-3 px-4">Celebrity partnerships, TV/movie licensing, market-specific entertainment collaborations</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">Location & Product Development</td>
                        <td className="py-3 px-4">20%</td>
                        <td className="py-3 px-4">$2,000,000</td>
                        <td className="py-3 px-4">Market-specific menu development, airport/event center adaptations, regional product testing</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">Market Analysis & Metrics</td>
                        <td className="py-3 px-4">15%</td>
                        <td className="py-3 px-4">$1,500,000</td>
                        <td className="py-3 px-4">Cross-channel performance tracking, market viability studies, expansion metrics analysis</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">Contingency</td>
                        <td className="py-3 px-4">10%</td>
                        <td className="py-3 px-4">$1,000,000</td>
                        <td className="py-3 px-4">Rapid response to market opportunities, emergency funds</td>
                      </tr>
                      <tr className="bg-wawa-yellow-50 font-medium">
                        <td className="py-3 px-4">Total</td>
                        <td className="py-3 px-4">100%</td>
                        <td className="py-3 px-4">$10,000,000</td>
                        <td className="py-3 px-4">Annual marketing budget</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Market Metrics - Updated Section */}
              <div className="grid md:grid-cols-3 gap-4 mb-6 mt-8">
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Digital Metrics</h4>
                  <ul className="list-disc pl-6 text-wawa-base font-wawa text-wawa-gray-700">
                    <li className="mb-2">Social engagement by market segment</li>
                    <li className="mb-2">Influencer campaign ROI tracking</li>
                    <li className="mb-2">Digital content performance by region</li>
                    <li className="mb-2">Community growth metrics by platform</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-wawaHeading text-lg font-semibold text-wawa-yellow-600 mb-2">Traditional Media Impact</h4>
                  <ul className="list-disc pl-6 text-wawa-base font-wawa text-wawa-gray-700">
                    <li className="mb-2">Celebrity partnership performance</li>
                    <li className="mb-2">Entertainment placement effectiveness</li>
                    <li className="mb-2">Brand recognition lift by market</li>
                    <li className="mb-2">Cross-promotion conversion rates</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-wawaHeading text-lg font-semibold text-wawa-green-600 mb-2">Location Performance</h4>
                  <ul className="list-disc pl-6 text-wawa-base font-wawa text-wawa-gray-700">
                    <li className="mb-2">Product mix success by location</li>
                    <li className="mb-2">Regional menu adaptation metrics</li>
                    <li className="mb-2">Travel hub vs event center analytics</li>
                    <li className="mb-2">Market expansion viability scores</li>
                  </ul>
                </div>
              </div>

              {/* Strategic Implementation */}
              <div className="bg-white rounded-xl p-6 mt-6">
                <h3 className="font-wawaHeading text-xl font-bold text-wawa-red-600 mb-4">Market-Specific Implementation</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-wawaHeading text-lg font-semibold text-wawa-gray-800 mb-2">Product Development Strategy</h4>
                    <ul className="list-disc pl-6 text-wawa-base font-wawa text-wawa-gray-700">
                      <li className="mb-2">Airport-specific menu optimization</li>
                      <li className="mb-2">Event center product variations</li>
                      <li className="mb-2">Regional taste preference adaptation</li>
                      <li className="mb-2">Travel-friendly packaging solutions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-wawaHeading text-lg font-semibold text-wawa-gray-800 mb-2">Market Analysis Teams</h4>
                    <ul className="list-disc pl-6 text-wawa-base font-wawa text-wawa-gray-700">
                      <li className="mb-2">Digital performance tracking team</li>
                      <li className="mb-2">Traditional media impact analysts</li>
                      <li className="mb-2">Location viability researchers</li>
                      <li className="mb-2">Cross-channel metrics coordinators</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* ROI Metrics */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white rounded-xl p-6 text-center">
                  <p className="text-3xl font-wawaHeading font-bold text-wawa-yellow-600">3.5x</p>
                  <p className="text-sm font-wawa text-wawa-gray-700">Brand Recognition ROI</p>
                  <p className="text-xs text-wawa-gray-500 mt-2">Based on media value vs. spend</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center">
                  <p className="text-3xl font-wawaHeading font-bold text-wawa-yellow-600">85%</p>
                  <p className="text-sm font-wawa text-wawa-gray-700">Brand Awareness Target</p>
                  <p className="text-xs text-wawa-gray-500 mt-2">In new market segments</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center">
                  <p className="text-3xl font-wawaHeading font-bold text-wawa-yellow-600">80%</p>
                  <p className="text-sm font-wawa text-wawa-gray-700">Cost Reduction</p>
                  <p className="text-xs text-wawa-gray-500 mt-2">Vs. traditional expansion</p>
                </div>
              </div>

              {/* Cost-Benefit Analysis */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-wawa-red-50 rounded-xl p-6">
                  <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-700 mb-4">Potential Challenges</h4>
                  <ul className="list-disc pl-6 text-wawa-base font-wawa text-wawa-gray-700">
                    <li className="mb-2">Higher than anticipated media costs</li>
                    <li className="mb-2">Slower adoption of mobile app features</li>
                    <li className="mb-2">Competitive response to new initiatives</li>
                    <li className="mb-2">Supply chain disruptions affecting product launches</li>
                  </ul>
                </div>
                <div className="bg-wawa-green-50 rounded-xl p-6">
                  <h4 className="font-wawaHeading text-lg font-semibold text-wawa-green-700 mb-4">Expected Benefits</h4>
                  <ul className="list-disc pl-6 text-wawa-base font-wawa text-wawa-gray-700">
                    <li className="mb-2">Increased customer loyalty and frequency</li>
                    <li className="mb-2">Higher average transaction value</li>
                    <li className="mb-2">Improved brand perception and awareness</li>
                    <li className="mb-2">Successful entry into new markets</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Conclusion */}
          <div className="lg:col-span-3">
            <section 
              ref={sectionRefs['conclusion']}
              id="conclusion"
              className="bg-wawa-red-50 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg"
            >
              <h2 className="font-wawaHeading text-3xl font-bold text-wawa-red-600 mb-6">
                Conclusion
              </h2>
              
              {/* Summary */}
              <div className="bg-white rounded-xl p-6 mb-6">
                <h3 className="font-wawaHeading text-xl font-bold text-wawa-red-600 mb-4">Summary</h3>
                <p className="text-wawa-base font-wawa text-wawa-gray-700 mb-6">
                  This marketing plan presents a bold strategy focused on three key pillars: aggressive social media 
                  expansion to build digital engagement, strategic traditional media licensing with major cultural 
                  figures and entertainment properties, and cost-effective physical expansion through travel hubs 
                  and event centers. By leveraging these channels while maintaining our commitment to quality and 
                  service, we are positioned to achieve nationwide brand recognition and significant market growth.
                </p>
              </div>

              {/* Key Takeaways */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Social Media Expansion</h4>
                  <p className="text-sm font-wawa text-wawa-gray-700">
                    Aggressive growth in digital presence through targeted social media campaigns and enhanced online engagement strategies.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-wawaHeading text-lg font-semibold text-wawa-yellow-600 mb-2">Traditional Media & Events</h4>
                  <p className="text-sm font-wawa text-wawa-gray-700">
                    Strategic investment in traditional advertising channels and major event sponsorships to strengthen brand visibility and community connections.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-wawaHeading text-lg font-semibold text-wawa-green-600 mb-2">Strategic Location Expansion</h4>
                  <p className="text-sm font-wawa text-wawa-gray-700">
                    Testing low-cost expansion opportunities in airports, travel hubs, and event centers to maximize market penetration with minimal investment.
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-wawa-red-50 rounded-xl p-6 text-center">
                <p className="text-xl font-wawaHeading font-semibold text-wawa-red-700 mb-4">
                  Let's Soar with Wawa!
                </p>
                <p className="text-base font-wawa text-wawa-gray-700 mb-6">
                  This marketing plan provides a roadmap for growth and success. Now is the time to execute with 
                  precision, measure our progress, and adapt as needed to achieve our ambitious goals.
                </p>
                <button 
                  onClick={handleApproveClick}
                  className="bg-wawa-red-600 hover:bg-wawa-red-700 text-white font-wawaHeading font-medium py-3 px-6 rounded-xl transition-all duration-200 hover:scale-105"
                >
                  {isApproved ? 'Plan Approved ✓' : 'Approve Marketing Plan'}
                </button>
              </div>
            </section>
          </div>
          
          {/* Feedback Section - Full Width */}
          <div className="md:col-span-2 lg:col-span-3">
            <section 
              ref={sectionRefs['feedback']}
              id="feedback"
              className="bg-purple-50 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg"
            >
              <h2 className="font-wawaHeading text-3xl font-bold text-wawa-red-600 mb-6">
                Provide Feedback
              </h2>
              <FeedbackForm />
            </section>
          </div>

          {/* Approvals & Feedback Section - Full Width */}
          <div className="lg:col-span-3">
            <section className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="font-wawaHeading text-3xl font-bold text-wawa-red-600 mb-6">
                Approvals & Feedback
              </h2>
              
              <div className="space-y-12">
                {/* Section Approvals */}
                <div>
                  <SectionApprovalList 
                    sections={sections.map(s => ({ id: s.id, title: s.title }))}
                    onApprovalChange={(approvals) => {
                      console.log('Section approvals changed:', approvals);
                    }}
                  />
                </div>

                {/* Section Feedback */}
                <div>
                  <h3 className="font-wawaHeading text-xl font-bold text-wawa-red-600 mb-6">
                    Section Feedback
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sections.slice(0, 9).map((section) => (
                      <SectionFeedback
                        key={section.id}
                        sectionId={section.id}
                        sectionTitle={section.title}
                        onFeedbackSubmit={() => {
                          console.log('Feedback submitted for section:', section.id);
                        }}
                      />
                    ))}
                    {sections.slice(9).map((section) => (
                      <div key={section.id} className="lg:col-span-3 max-w-md mx-auto">
                        <SectionFeedback
                          sectionId={section.id}
                          sectionTitle={section.title}
                          onFeedbackSubmit={() => {
                            console.log('Feedback submitted for section:', section.id);
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Approval Modal */}
      {showApprovalModal && (
        <ApprovalModal 
          isOpen={true}
          onClose={() => setShowApprovalModal(false)}
          itemId="marketing-plan-2023"
          itemType="marketing-plan"
          planType="marketing-plan-full-v2"
          onSuccess={handleApprovalSuccess}
        />
      )}

      {/* Add Marketing Plan Dropdown */}
      <MarketingPlanDropdown />
    </div>
  );
};

export default Home; 