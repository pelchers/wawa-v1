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
          This marketing plan represents a comprehensive approach to expanding Wawa's brand presence and 
          market reach while maintaining our commitment to quality, community, and customer experience. 
          By leveraging digital channels, strategic partnerships, and our unique brand strengths, we are 
          well-positioned to achieve our marketing objectives and drive sustainable growth.
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
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Strategic Growth</h4>
              <p className="text-sm text-wawa-gray-700">
                Our three-pillar approach of digital expansion, strategic partnerships, and customer loyalty 
                provides a balanced strategy for growth that leverages our strengths while addressing market challenges.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-wawa-red-600 text-white rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Measurable Outcomes</h4>
              <p className="text-sm text-wawa-gray-700">
                Clear, measurable objectives and KPIs will allow us to track progress, demonstrate ROI, 
                and make data-driven adjustments throughout the implementation of our marketing plan.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-wawa-red-600 text-white rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Adaptable Approach</h4>
              <p className="text-sm text-wawa-gray-700">
                Our phased implementation and contingency planning ensure we can adapt to changing market 
                conditions, competitive responses, and emerging opportunities throughout the year.
              </p>
            </div>
          </div>
        </div>
        
        {/* Next Steps */}
        <h3 className="font-wawaHeading text-xl font-semibold mb-4">Next Steps</h3>
        
        <div className="bg-white border border-wawa-gray-200 rounded-xl p-6 shadow-sm mb-12">
          <ol className="space-y-4">
            <li className="flex">
              <span className="bg-wawa-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">1</span>
              <div>
                <h4 className="font-wawaHeading text-lg font-semibold text-wawa-gray-800">Finalize Team Structure</h4>
                <p className="text-sm text-wawa-gray-600">
                  Complete the staffing and organization of the marketing, operations, and technology teams 
                  responsible for implementing the marketing plan.
                </p>
              </div>
            </li>
            
            <li className="flex">
              <span className="bg-wawa-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">2</span>
              <div>
                <h4 className="font-wawaHeading text-lg font-semibold text-wawa-gray-800">Secure Budget Approval</h4>
                <p className="text-sm text-wawa-gray-600">
                  Present the marketing plan and budget to executive leadership for final approval and 
                  resource allocation.
                </p>
              </div>
            </li>
            
            <li className="flex">
              <span className="bg-wawa-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">3</span>
              <div>
                <h4 className="font-wawaHeading text-lg font-semibold text-wawa-gray-800">Develop Detailed Action Plans</h4>
                <p className="text-sm text-wawa-gray-600">
                  Create detailed action plans for each initiative, including specific tasks, timelines, 
                  responsibilities, and success metrics.
                </p>
              </div>
            </li>
            
            <li className="flex">
              <span className="bg-wawa-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">4</span>
              <div>
                <h4 className="font-wawaHeading text-lg font-semibold text-wawa-gray-800">Establish Partnerships</h4>
                <p className="text-sm text-wawa-gray-600">
                  Begin outreach and negotiations with potential partners for the airport licensing program, 
                  influencer collaborations, and other strategic alliances.
                </p>
              </div>
            </li>
            
            <li className="flex">
              <span className="bg-wawa-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">5</span>
              <div>
                <h4 className="font-wawaHeading text-lg font-semibold text-wawa-gray-800">Launch Initial Campaigns</h4>
                <p className="text-sm text-wawa-gray-600">
                  Develop and launch the first wave of digital marketing campaigns to begin building 
                  momentum and generating data for optimization.
                </p>
              </div>
            </li>
          </ol>
        </div>
        
        {/* Vision Statement */}
        <div className="bg-wawa-red-600 text-white rounded-xl p-8 mb-8">
          <h3 className="font-wawaHeading text-2xl font-bold mb-4 text-center">Our Vision for Success</h3>
          <p className="text-lg italic text-center mb-6">
            "By implementing this marketing plan, we will transform Wawa from a beloved regional brand to a 
            nationally recognized leader in convenience retail, known for our quality products, exceptional 
            customer experience, and strong community connections."
          </p>
          <p className="text-center">
            With a clear strategy, dedicated team, and commitment to our core values, we are confident in our 
            ability to achieve our marketing objectives and drive sustainable growth for Wawa.
          </p>
        </div>
      </div>
    </SectionPage>
  );
};

export default Conclusion; 