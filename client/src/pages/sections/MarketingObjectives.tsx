import { FC } from 'react';
import SectionPage from '../../components/sections/SectionPage';

const MarketingObjectives: FC = () => {
  return (
    <SectionPage 
      title="Marketing Objectives"
      prevSection={{
        title: "Mission Statement",
        path: "/mission-statement"
      }}
      nextSection={{
        title: "Key Performance Areas",
        path: "/key-performance"
      }}
    >
      <div className="prose prose-lg max-w-none">
        <h3 className="font-wawaHeading text-xl font-semibold mb-6">Strategic Focus</h3>
        
        <div className="bg-blue-50 rounded-xl p-6 mb-8">
          <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-4">Market Opportunity</h4>
          <p className="mb-4">
            Despite strong regional brand recognition, Wawa has the opportunity to achieve national visibility 
            through a cost-efficient, three-pronged approach that prioritizes brand awareness and market 
            penetration over immediate customer acquisition (i.e., leveraging existing brand strength in the 
            Northeast to create viral moments and social media buzz that reaches potential customers nationwide).
          </p>
          
          <h4 className="font-wawaHeading text-lg font-semibold text-wawa-green-600 mb-4">Strategic Approach</h4>
          <p>
            Implement high-impact, low-cost initiatives across social media expansion, traditional media 
            licensing, and strategic location partnerships to achieve an 80% cost reduction compared to 
            traditional expansion methods (i.e., establishing airport locations instead of full stores, 
            partnering with influencers for organic reach rather than paid advertising).
          </p>
        </div>
        
        <h3 className="font-wawaHeading text-xl font-semibold mb-4">Core Objectives</h3>
        
        <div className="space-y-6">
          <div className="bg-white border border-wawa-gray-200 rounded-xl p-6 shadow-sm">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Digital Engagement</h4>
            <p className="mb-2"><strong>Specific:</strong> Achieve structured partnership tiers and platform growth</p>
            <p className="mb-2"><strong>Measurable:</strong> 
              • 100 Premiere Partnerships (i.e., food creators with 100k+ followers who specialize in food reviews)
              • 100-150 Sublevel Partnerships (i.e., lifestyle creators who occasionally feature food content)
              • 250K+ followers per platform (focusing on TikTok, Instagram, and YouTube)
            </p>
            <p className="mb-2"><strong>Achievable:</strong> Through targeted outreach and content strategy</p>
            <p className="mb-2"><strong>Relevant:</strong> Builds brand presence and digital community</p>
            <p><strong>Time-bound:</strong> Complete partnership tiers within 12 months</p>
          </div>
          
          <div className="bg-white border border-wawa-gray-200 rounded-xl p-6 shadow-sm">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-yellow-600 mb-2">Traditional Media Licensing</h4>
            <p className="mb-2"><strong>Specific:</strong> Secure strategic entertainment and cultural partnerships</p>
            <p className="mb-2"><strong>Measurable:</strong> 
              • Celebrity brand ambassadors (i.e., Philadelphia-based musicians and athletes)
              • TV/movie product placement (i.e., featuring in Philadelphia-based shows)
              • Entertainment property licensing (i.e., local music for in-store playlists)
            </p>
            <p className="mb-2"><strong>Achievable:</strong> Through targeted media partnerships</p>
            <p className="mb-2"><strong>Relevant:</strong> Enhances brand recognition and cultural relevance</p>
            <p><strong>Time-bound:</strong> Establish key partnerships within 18 months</p>
          </div>
          
          <div className="bg-white border border-wawa-gray-200 rounded-xl p-6 shadow-sm">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-green-600 mb-2">Strategic Locations</h4>
            <p className="mb-2"><strong>Specific:</strong> Establish presence in high-traffic, low-investment locations</p>
            <p className="mb-2"><strong>Measurable:</strong> 
              • Airport location partnerships (i.e., express format stores in major transit hubs)
              • Event center presence (i.e., stadium kiosks during sports events)
              • Regional product adaptation (i.e., city-specific hoagie varieties)
            </p>
            <p className="mb-2"><strong>Achievable:</strong> Through targeted location partnerships</p>
            <p className="mb-2"><strong>Relevant:</strong> Creates physical presence with minimal investment</p>
            <p><strong>Time-bound:</strong> Launch initial locations within 15 months</p>
          </div>
        </div>
        
        <h3 className="font-wawaHeading text-xl font-semibold mt-8 mb-4">Performance Targets</h3>
        <div className="bg-wawa-gray-50 rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Cost Efficiency</h4>
              <p className="text-wawa-gray-700">
                Achieve 80% cost reduction compared to traditional expansion methods through strategic partnerships 
                and low-investment initiatives (i.e., virtual kitchen partnerships instead of full restaurant buildouts).
              </p>
            </div>
            
            <div>
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Brand Recognition</h4>
              <p className="text-wawa-gray-700">
                Generate 3.5x ROI on brand recognition initiatives through media value versus spend across all channels 
                (i.e., organic social media reach vs paid advertising costs).
              </p>
            </div>
            
            <div>
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Market Share</h4>
              <p className="text-wawa-gray-700">
                Achieve 10%+ market share in new markets, exceeding current fast food brand penetration rates 
                (i.e., targeting college campuses and business districts).
              </p>
            </div>
          </div>
        </div>

        {/* Implementation Examples Section */}
        <section className="implementation-examples mt-8 bg-wawa-gray-50 rounded-xl p-6">
          <h3 className="font-wawaHeading text-xl font-semibold text-wawa-red-600 mb-4">
            Implementation Examples
          </h3>
          
          <div className="space-y-6">
            {/* Digital Engagement Example */}
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">
                Example: Premiere Partnership Program
              </h4>
              <p className="text-wawa-gray-700">
                Partnership with "PhillyFoodie" (180k TikTok, 150k Instagram followers) who creates weekly 
                food review content. The creator would produce a monthly series called "Wawa Wednesday" 
                featuring new menu items, secret menu hacks, and customer favorites. Content includes 
                behind-the-scenes looks at food preparation and interviews with store associates.
              </p>
              <div className="mt-4 text-sm text-wawa-gray-600">
                <strong>Expected Results:</strong> 2M+ monthly impressions, 500k+ engagement actions, 
                and 50k+ store locator searches from non-local viewers.
              </div>
            </div>

            {/* Traditional Media Example */}
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">
                Example: Cultural Integration Campaign
              </h4>
              <p className="text-wawa-gray-700">
                Partnership with Philadelphia-based band "The Hooters" to create a modern version of 
                their iconic song "And We Danced" titled "And We Wawa'd". The new version would be used 
                in stores, at gas pumps, and in promotional material. The campaign includes a TikTok 
                dance challenge, in-store music events, and limited edition merchandise featuring 
                song lyrics.
              </p>
              <div className="mt-4 text-sm text-wawa-gray-600">
                <strong>Expected Results:</strong> 5M+ social media impressions, 100k+ user-generated 
                content pieces, and 25% increase in brand sentiment metrics.
              </div>
            </div>

            {/* Strategic Locations Example */}
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">
                Example: Airport Hub Implementation
              </h4>
              <p className="text-wawa-gray-700">
                Express format store at Denver International Airport's Terminal B, featuring a streamlined 
                menu of breakfast items, hoagies, and coffee. Implementation includes mobile ordering for 
                pickup, "grab-and-go" coolers, and digital menu boards showcasing regional favorites. 
                Store design incorporates local Colorado elements while maintaining Wawa's core branding.
              </p>
              <div className="mt-4 text-sm text-wawa-gray-600">
                <strong>Expected Results:</strong> 2,000+ daily transactions, 40% repeat customers among 
                frequent travelers, and 15% conversion to app downloads for non-local customers.
              </div>
            </div>
          </div>
        </section>
      </div>
    </SectionPage>
  );
};

export default MarketingObjectives; 