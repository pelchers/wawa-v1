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
          opportunities and threats. This assessment forms the foundation of our marketing strategy, helping us 
          leverage our advantages while addressing challenges.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-50 rounded-xl p-6">
            <h3 className="font-wawaHeading text-xl font-bold text-wawa-red-600 mb-4">Strengths</h3>
            <ul className="list-disc list-inside space-y-2 text-wawa-gray-700">
              <li>Strong brand recognition in existing markets</li>
              <li>High-quality product offerings and service standards</li>
              <li>Established customer loyalty programs</li>
              <li>Efficient supply chain management</li>
              <li>Strong financial position</li>
              <li>Experienced management team</li>
              <li>Proven track record in contract negotiations</li>
              <li>Distinctive store design and customer experience</li>
              <li>Proprietary food and beverage offerings</li>
            </ul>
          </div>
          
          <div className="bg-red-50 rounded-xl p-6">
            <h3 className="font-wawaHeading text-xl font-bold text-wawa-red-600 mb-4">Weaknesses</h3>
            <ul className="list-disc list-inside space-y-2 text-wawa-gray-700">
              <li>Limited presence outside core regions</li>
              <li>Regional brand perception constraints</li>
              <li>Market saturation in existing territories</li>
              <li>Dependency on traditional marketing channels</li>
              <li>Limited digital engagement metrics</li>
              <li>Resource constraints for rapid expansion</li>
              <li>Vulnerability to supply chain disruptions</li>
              <li>Increasing competition in core markets</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="font-wawaHeading text-xl font-bold text-wawa-red-600 mb-4">Opportunities</h3>
            <ul className="list-disc list-inside space-y-2 text-wawa-gray-700">
              <li>Expansion into airport locations nationwide</li>
              <li>Growing social media influence potential</li>
              <li>Strategic creator partnerships</li>
              <li>New market penetration opportunities</li>
              <li>Digital transformation initiatives</li>
              <li>Emerging consumer trends alignment</li>
              <li>Innovation in product offerings</li>
              <li>Sustainability initiatives to attract eco-conscious consumers</li>
              <li>Mobile ordering and delivery expansion</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 rounded-xl p-6">
            <h3 className="font-wawaHeading text-xl font-bold text-wawa-red-600 mb-4">Threats</h3>
            <ul className="list-disc list-inside space-y-2 text-wawa-gray-700">
              <li>Intense market competition</li>
              <li>Economic volatility impact</li>
              <li>Changing consumer preferences</li>
              <li>Supply chain disruptions</li>
              <li>Regulatory changes</li>
              <li>Rising operational costs</li>
              <li>Technology adaptation challenges</li>
              <li>Labor market pressures and wage inflation</li>
              <li>Emerging competitors with innovative business models</li>
            </ul>
          </div>
        </div>
        
        <h3 className="font-wawaHeading text-xl font-semibold mb-4">Strategic Implications</h3>
        
        <div className="space-y-6">
          <div className="bg-white border border-wawa-gray-200 rounded-xl p-6 shadow-sm">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Leverage Strengths for Opportunities</h4>
            <p>
              We will leverage our strong brand recognition and quality reputation to establish successful airport 
              licensing partnerships. Our financial strength will support digital transformation initiatives, while 
              our experienced management team will guide strategic creator partnerships.
            </p>
          </div>
          
          <div className="bg-white border border-wawa-gray-200 rounded-xl p-6 shadow-sm">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Address Weaknesses through Opportunities</h4>
            <p>
              Our limited national presence will be addressed through airport licensing and digital engagement strategies. 
              We'll overcome regional brand perception constraints through strategic social media partnerships and 
              targeted digital marketing in expansion markets.
            </p>
          </div>
          
          <div className="bg-white border border-wawa-gray-200 rounded-xl p-6 shadow-sm">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Mitigate Threats with Strengths</h4>
            <p>
              Our strong financial position will help us weather economic volatility, while our quality standards will 
              differentiate us from competitors. Our experienced management team will navigate regulatory changes and 
              adapt to shifting consumer preferences.
            </p>
          </div>
          
          <div className="bg-white border border-wawa-gray-200 rounded-xl p-6 shadow-sm">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Defensive Strategies for Vulnerabilities</h4>
            <p>
              We'll invest in supply chain resilience to address both weaknesses and threats in this area. Digital 
              transformation initiatives will help us catch up to competitors' technological advantages, while 
              diversification of revenue streams will reduce market saturation risks.
            </p>
          </div>
        </div>
      </div>
    </SectionPage>
  );
};

export default SwotAnalysis; 