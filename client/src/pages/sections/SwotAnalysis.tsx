import { FC } from 'react';
import SectionPage from '../../components/sections/SectionPage';

const SwotAnalysis: FC = () => {
  return (
    <SectionPage 
      title="SWOT Analysis"
      prevSection={{
        title: "Key Performance Areas",
        path: "/key-performance"
      }}
      nextSection={{
        title: "Market Research",
        path: "/market-research"
      }}
    >
      <div className="prose prose-lg max-w-none">
        <h3 className="font-wawaHeading text-xl font-semibold mb-6">Strategic Assessment</h3>
        <p className="mb-8">
          Our comprehensive SWOT analysis identifies Wawa's internal strengths and weaknesses, as well as external 
          opportunities and threats (i.e., analyzing factors from brand recognition to market competition). This 
          assessment forms the foundation of our marketing strategy, helping us leverage our advantages while 
          addressing challenges.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-50 rounded-xl p-6">
            <h3 className="font-wawaHeading text-xl font-bold text-wawa-red-600 mb-4">Strengths</h3>
            <ul className="list-disc list-inside space-y-2 text-wawa-gray-700">
              <li>Strong brand recognition in existing markets (i.e., 90% awareness in Northeast)</li>
              <li>High-quality product offerings and service standards (i.e., made-to-order food)</li>
              <li>Established customer loyalty programs (i.e., mobile app rewards)</li>
              <li>Efficient supply chain management (i.e., regional distribution centers)</li>
              <li>Strong financial position (i.e., debt-free expansion capability)</li>
              <li>Experienced management team (i.e., industry veterans)</li>
              <li>Proven track record in contract negotiations (i.e., vendor partnerships)</li>
              <li>Distinctive store design and customer experience (i.e., touchscreen ordering)</li>
              <li>Proprietary food and beverage offerings (i.e., signature hoagies)</li>
            </ul>
          </div>
          
          <div className="bg-red-50 rounded-xl p-6">
            <h3 className="font-wawaHeading text-xl font-bold text-wawa-red-600 mb-4">Weaknesses</h3>
            <ul className="list-disc list-inside space-y-2 text-wawa-gray-700">
              <li>Limited presence outside core regions (i.e., minimal West Coast exposure)</li>
              <li>Regional brand perception constraints (i.e., "East Coast brand" image)</li>
              <li>Market saturation in existing territories (i.e., Philadelphia market)</li>
              <li>Dependency on traditional marketing channels (i.e., local TV advertising)</li>
              <li>Limited digital engagement metrics (i.e., below-industry social media presence)</li>
              <li>Resource constraints for rapid expansion (i.e., training capacity)</li>
              <li>Vulnerability to supply chain disruptions (i.e., fresh food logistics)</li>
              <li>Increasing competition in core markets (i.e., quick-service restaurants)</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="font-wawaHeading text-xl font-bold text-wawa-red-600 mb-4">Opportunities</h3>
            <ul className="list-disc list-inside space-y-2 text-wawa-gray-700">
              <li>Expansion into airport locations nationwide (i.e., major transit hubs)</li>
              <li>Growing social media influence potential (i.e., viral marketing campaigns)</li>
              <li>Strategic creator partnerships (i.e., food influencer collaborations)</li>
              <li>New market penetration opportunities (i.e., West Coast entry points)</li>
              <li>Digital transformation initiatives (i.e., mobile ordering expansion)</li>
              <li>Emerging consumer trends alignment (i.e., healthy food options)</li>
              <li>Innovation in product offerings (i.e., regional menu variations)</li>
              <li>Sustainability initiatives (i.e., eco-friendly packaging)</li>
              <li>Mobile ordering and delivery expansion (i.e., third-party partnerships)</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 rounded-xl p-6">
            <h3 className="font-wawaHeading text-xl font-bold text-wawa-red-600 mb-4">Threats</h3>
            <ul className="list-disc list-inside space-y-2 text-wawa-gray-700">
              <li>Intense market competition (i.e., established national chains)</li>
              <li>Economic volatility impact (i.e., inflation effects on pricing)</li>
              <li>Changing consumer preferences (i.e., health-conscious trends)</li>
              <li>Supply chain disruptions (i.e., ingredient sourcing challenges)</li>
              <li>Regulatory changes (i.e., food safety requirements)</li>
              <li>Rising operational costs (i.e., labor and ingredient expenses)</li>
              <li>Technology adaptation challenges (i.e., digital payment systems)</li>
              <li>Labor market pressures (i.e., competitive wage requirements)</li>
              <li>Emerging competitors (i.e., ghost kitchen concepts)</li>
            </ul>
          </div>
        </div>
        
        <h3 className="font-wawaHeading text-xl font-semibold mb-4">Strategic Implications</h3>
        
        <div className="space-y-6 mb-8">
          <div className="bg-white border border-wawa-gray-200 rounded-xl p-6 shadow-sm">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Leverage Strengths for Opportunities</h4>
            <p>
              We will leverage our strong brand recognition and quality reputation to establish successful airport 
              licensing partnerships (i.e., premium positioning in major hubs). Our financial strength will support 
              digital transformation initiatives (i.e., mobile app enhancement), while our experienced management 
              team will guide strategic creator partnerships (i.e., influencer program development).
            </p>
          </div>
          
          <div className="bg-white border border-wawa-gray-200 rounded-xl p-6 shadow-sm">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Address Weaknesses through Opportunities</h4>
            <p>
              Our limited national presence will be addressed through airport licensing and digital engagement strategies 
              (i.e., targeting high-traffic transit hubs). We'll overcome regional brand perception constraints through 
              strategic social media partnerships (i.e., collaborations with national influencers) and targeted digital 
              marketing in expansion markets (i.e., location-specific content).
            </p>
          </div>
          
          <div className="bg-white border border-wawa-gray-200 rounded-xl p-6 shadow-sm">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Mitigate Threats with Strengths</h4>
            <p>
              Our strong financial position will help us weather economic volatility (i.e., maintaining competitive pricing), 
              while our quality standards will differentiate us from competitors (i.e., fresh food focus). Our experienced 
              management team will navigate regulatory changes (i.e., compliance programs) and adapt to shifting consumer 
              preferences (i.e., menu innovation).
            </p>
          </div>
          
          <div className="bg-white border border-wawa-gray-200 rounded-xl p-6 shadow-sm">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Defensive Strategies for Vulnerabilities</h4>
            <p>
              We'll invest in supply chain resilience to address both weaknesses and threats in this area (i.e., backup 
              supplier network). Digital transformation initiatives will help us catch up to competitors' technological 
              advantages (i.e., contactless payment systems), while diversification of revenue streams will reduce market 
              saturation risks (i.e., delivery partnerships).
            </p>
          </div>
        </div>

        {/* Implementation Examples Section */}
        <section className="implementation-examples mt-8 bg-wawa-gray-50 rounded-xl p-6">
          <h3 className="font-wawaHeading text-xl font-semibold text-wawa-red-600 mb-4">
            Implementation Examples
          </h3>
          
          <div className="space-y-6">
            {/* Strength Leverage Example */}
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">
                Example: Airport Hub Quality Assurance Program
              </h4>
              <p className="text-wawa-gray-700">
                Implementation of a specialized quality assurance program for airport locations, leveraging our 
                strong brand standards. The program includes custom training modules for airport staff, 
                streamlined food preparation processes for high-traffic periods, and real-time quality 
                monitoring systems. Digital displays showcase food preparation and quality metrics to 
                maintain transparency with customers.
              </p>
              <div className="mt-4 text-sm text-wawa-gray-600">
                <strong>Expected Results:</strong> 98% quality compliance rate, 30% reduction in 
                preparation times, and 25% increase in customer satisfaction scores at airport locations.
              </div>
            </div>

            {/* Digital Transformation Example */}
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">
                Example: National Digital Presence Expansion
              </h4>
              <p className="text-wawa-gray-700">
                Launch of a comprehensive digital transformation initiative targeting new markets. The program 
                includes a redesigned mobile app with location-specific features, partnerships with national 
                food influencers, and a user-generated content campaign. Implementation includes AI-powered 
                personalization, cross-platform social media integration, and location-based marketing automation.
              </p>
              <div className="mt-4 text-sm text-wawa-gray-600">
                <strong>Expected Results:</strong> 200% increase in app downloads in new markets, 
                150% growth in social media engagement, and 40% improvement in digital order conversion rates.
              </div>
            </div>

            {/* Supply Chain Resilience Example */}
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">
                Example: Supply Chain Modernization
              </h4>
              <p className="text-wawa-gray-700">
                Development of a next-generation supply chain management system incorporating predictive 
                analytics and supplier diversification. The system includes real-time inventory tracking, 
                automated reordering based on demand forecasting, and a network of backup suppliers for 
                critical ingredients. Implementation features blockchain-based traceability and smart 
                contracts for supplier management.
              </p>
              <div className="mt-4 text-sm text-wawa-gray-600">
                <strong>Expected Results:</strong> 40% reduction in supply chain disruptions, 
                25% improvement in inventory accuracy, and 20% decrease in food waste.
              </div>
            </div>
          </div>
        </section>
      </div>
    </SectionPage>
  );
};

export default SwotAnalysis; 