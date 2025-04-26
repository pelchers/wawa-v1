import { FC } from 'react';
import SectionPage from '../../components/sections/SectionPage';

const MarketResearch: FC = () => {
  return (
    <SectionPage 
      title="Market Research"
      prevSection={{
        title: "SWOT Analysis",
        path: "/swot-analysis"
      }}
      nextSection={{
        title: "Marketing Strategy",
        path: "/marketing-strategy"
      }}
    >
      <div className="prose prose-lg max-w-none">
        <h3 className="font-wawaHeading text-xl font-semibold mb-6">Market Analysis Overview</h3>
        <p className="mb-8">
          Our comprehensive market research focuses on identifying expansion opportunities and consumer behavior patterns 
          (i.e., analyzing travel hub demographics, digital engagement trends, and regional food preferences). This data-driven 
          approach informs our strategic decisions and helps optimize our market entry strategies.
        </p>
        
        {/* Market Segments Analysis */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-wawa-gray-200">
            <h3 className="font-wawaHeading text-xl font-bold text-wawa-red-600 mb-4">Travel Hub Market</h3>
            <div className="space-y-4">
              <div className="bg-wawa-red-50 p-4 rounded-lg">
                <p className="text-sm font-semibold mb-2">Key Demographics:</p>
                <ul className="list-disc pl-4 text-sm text-wawa-gray-600">
                  <li>Business travelers (i.e., 45% of airport traffic)</li>
                  <li>Leisure travelers (i.e., 35% domestic, 20% international)</li>
                  <li>Airport staff and crew (i.e., 15,000+ per major hub)</li>
                </ul>
              </div>
              <p className="text-sm text-wawa-gray-600">
                High-traffic locations with consistent foot traffic and premium positioning opportunities 
                (i.e., 24/7 operation potential).
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-wawa-gray-200">
            <h3 className="font-wawaHeading text-xl font-bold text-wawa-red-600 mb-4">Digital Audience</h3>
            <div className="space-y-4">
              <div className="bg-wawa-yellow-50 p-4 rounded-lg">
                <p className="text-sm font-semibold mb-2">Platform Demographics:</p>
                <ul className="list-disc pl-4 text-sm text-wawa-gray-600">
                  <li>Gen Z (i.e., 40% of social media engagement)</li>
                  <li>Millennials (i.e., 35% of app users)</li>
                  <li>Gen X (i.e., 25% of online orders)</li>
                </ul>
              </div>
              <p className="text-sm text-wawa-gray-600">
                Strong potential for viral marketing and digital community building (i.e., food-focused content creation).
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-wawa-gray-200">
            <h3 className="font-wawaHeading text-xl font-bold text-wawa-red-600 mb-4">Regional Markets</h3>
            <div className="space-y-4">
              <div className="bg-wawa-green-50 p-4 rounded-lg">
                <p className="text-sm font-semibold mb-2">Target Regions:</p>
                <ul className="list-disc pl-4 text-sm text-wawa-gray-600">
                  <li>West Coast hubs (i.e., LAX, SFO terminals)</li>
                  <li>Mountain region (i.e., Denver airport)</li>
                  <li>Southwest expansion (i.e., Phoenix market)</li>
                </ul>
              </div>
              <p className="text-sm text-wawa-gray-600">
                Focus on high-traffic travel hubs and surrounding metropolitan areas (i.e., airport-to-city expansion model).
              </p>
            </div>
          </div>
        </div>

        {/* Consumer Behavior Analysis */}
        <h3 className="font-wawaHeading text-xl font-semibold mb-4">Consumer Behavior Insights</h3>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-wawa-gray-50 p-6 rounded-xl">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Travel Hub Patterns</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Peak purchase times (i.e., morning rush, lunch hours)</li>
              <li>Popular product categories (i.e., grab-and-go items)</li>
              <li>Average transaction value (i.e., 30% higher than street locations)</li>
              <li>Customer dwell time (i.e., 8-12 minutes average)</li>
            </ul>
          </div>
          
          <div className="bg-wawa-gray-50 p-6 rounded-xl">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Digital Engagement</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Content consumption patterns (i.e., video vs. static posts)</li>
              <li>Platform preferences (i.e., TikTok engagement rates)</li>
              <li>Interaction peaks (i.e., meal-time posting success)</li>
              <li>Viral content triggers (i.e., behind-the-scenes content)</li>
            </ul>
          </div>
          
          <div className="bg-wawa-gray-50 p-6 rounded-xl">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Regional Preferences</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Menu adaptation needs (i.e., spice level preferences)</li>
              <li>Local competitor analysis (i.e., pricing strategies)</li>
              <li>Cultural considerations (i.e., dietary preferences)</li>
              <li>Seasonal variations (i.e., weather impact on menu)</li>
            </ul>
          </div>
          
          <div className="bg-wawa-gray-50 p-6 rounded-xl">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Purchase Drivers</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Quality perception (i.e., fresh food emphasis)</li>
              <li>Convenience factors (i.e., mobile ordering)</li>
              <li>Price sensitivity (i.e., value meal popularity)</li>
              <li>Brand loyalty indicators (i.e., app usage patterns)</li>
            </ul>
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
                Example: Social Media Sentiment Analysis
              </h4>
              <p className="text-wawa-gray-700">
                Development of a real-time social media sentiment analysis system using natural language processing. 
                The system monitors brand mentions, analyzes customer feedback, and identifies trending topics across 
                platforms. Implementation includes automated response triggers for negative sentiment and trend-based 
                content recommendations.
              </p>
              <div className="mt-4 text-sm text-wawa-gray-600">
                <strong>Expected Results:</strong> 45% faster response time to customer feedback, 
                60% improvement in sentiment accuracy tracking, and 30% increase in positive brand mentions.
              </div>
            </div>
            
            {/* Regional Analysis Example */}
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">
                Example: Regional Taste Profile Mapping
              </h4>
              <p className="text-wawa-gray-700">
                Creation of a dynamic taste profile mapping system for new market entry. The system combines 
                local food trend data, competitor menu analysis, and customer preference surveys to generate 
                market-specific menu recommendations. Implementation includes test kitchen partnerships and 
                limited-time offer experiments.
              </p>
              <div className="mt-4 text-sm text-wawa-gray-600">
                <strong>Expected Results:</strong> 40% reduction in menu adaptation time, 
                30% improvement in new item success rate, and 25% increase in customer satisfaction scores.
            </div>
            </div>
          </div>
        </section>
      </div>
    </SectionPage>
  );
};

export default MarketResearch; 