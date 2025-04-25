import { FC } from 'react';
import SectionPage from '../../components/sections/SectionPage';

const Execution: FC = () => {
  return (
    <SectionPage 
      title="Execution"
      prevSection={{
        title: "Challenges & Solutions",
        path: "/challenges-solutions"
      }}
      nextSection={{
        title: "Budget",
        path: "/budget"
      }}
    >
      <div className="prose prose-lg max-w-none">
        <h3 className="font-wawaHeading text-xl font-semibold mb-6">Implementation Plan</h3>
        <p className="mb-8">
          Our execution strategy follows a phased approach to ensure systematic implementation (i.e., quarterly milestones, 
          cross-functional team coordination), allowing for testing, learning, and optimization at each stage 
          (i.e., A/B testing of digital campaigns, location performance analysis). This approach maximizes resource 
          efficiency and enables us to build on successes while quickly addressing any challenges that arise.
        </p>
        
        {/* Process Steps */}
        <div className="bg-wawa-red-50 rounded-xl p-8 mb-12">
          <h3 className="font-wawaHeading text-2xl font-bold text-wawa-red-600 mb-6 text-center">Process</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-wawa-red-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-4 mt-2 text-center">Planning</h4>
              <p className="text-sm text-wawa-gray-700 mb-4">
                Strategic alignment and detailed action planning for all marketing initiatives.
              </p>
              <ul className="list-disc list-inside text-xs text-wawa-gray-600">
                <li>Finalize campaign details</li>
                <li>Establish partnerships</li>
                <li>Set up measurement systems</li>
                <li>Allocate resources</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-wawa-red-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-4 mt-2 text-center">Launch</h4>
              <p className="text-sm text-wawa-gray-700 mb-4">
                Coordinated rollout of initiatives across channels and markets.
              </p>
              <ul className="list-disc list-inside text-xs text-wawa-gray-600">
                <li>Digital campaign activation</li>
                <li>Partnership announcements</li>
                <li>Internal communication</li>
                <li>Initial data collection</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-wawa-red-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-4 mt-2 text-center">Optimize</h4>
              <p className="text-sm text-wawa-gray-700 mb-4">
                Continuous monitoring and refinement based on performance data.
              </p>
              <ul className="list-disc list-inside text-xs text-wawa-gray-600">
                <li>Performance analysis</li>
                <li>A/B testing</li>
                <li>Budget reallocation</li>
                <li>Tactical adjustments</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-wawa-red-600 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-4 mt-2 text-center">Analyze</h4>
              <p className="text-sm text-wawa-gray-700 mb-4">
                Comprehensive evaluation of results and strategic implications.
              </p>
              <ul className="list-disc list-inside text-xs text-wawa-gray-600">
                <li>ROI assessment</li>
                <li>Success metrics review</li>
                <li>Lessons documentation</li>
                <li>Strategy refinement</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Team Structure */}
        <h3 className="font-wawaHeading text-xl font-semibold mb-4">Team Structure</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white border border-wawa-gray-200 rounded-xl p-6 shadow-sm">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-4 text-center">Marketing Team</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="bg-wawa-red-100 text-wawa-red-600 p-1 rounded-full mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <span className="text-sm">Marketing Director</span>
              </li>
              <li className="flex items-center">
                <span className="bg-wawa-red-100 text-wawa-red-600 p-1 rounded-full mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <span className="text-sm">Brand Manager</span>
              </li>
              <li className="flex items-center">
                <span className="bg-wawa-red-100 text-wawa-red-600 p-1 rounded-full mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <span className="text-sm">Content Strategist</span>
              </li>
              <li className="flex items-center">
                <span className="bg-wawa-red-100 text-wawa-red-600 p-1 rounded-full mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <span className="text-sm">Social Media Manager</span>
              </li>
              <li className="flex items-center">
                <span className="bg-wawa-red-100 text-wawa-red-600 p-1 rounded-full mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <span className="text-sm">Creative Designer</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white border border-wawa-gray-200 rounded-xl p-6 shadow-sm">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-4 text-center">Operations Team</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="bg-wawa-yellow-100 text-wawa-yellow-600 p-1 rounded-full mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <span className="text-sm">Operations Director</span>
              </li>
              <li className="flex items-center">
                <span className="bg-wawa-yellow-100 text-wawa-yellow-600 p-1 rounded-full mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <span className="text-sm">Project Manager</span>
              </li>
              <li className="flex items-center">
                <span className="bg-wawa-yellow-100 text-wawa-yellow-600 p-1 rounded-full mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <span className="text-sm">Partnership Manager</span>
              </li>
              <li className="flex items-center">
                <span className="bg-wawa-yellow-100 text-wawa-yellow-600 p-1 rounded-full mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <span className="text-sm">Logistics Coordinator</span>
              </li>
              <li className="flex items-center">
                <span className="bg-wawa-yellow-100 text-wawa-yellow-600 p-1 rounded-full mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <span className="text-sm">Quality Assurance</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white border border-wawa-gray-200 rounded-xl p-6 shadow-sm">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-4 text-center">Technology Team</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <span className="text-sm">Digital Director</span>
              </li>
              <li className="flex items-center">
                <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <span className="text-sm">App Developer</span>
              </li>
              <li className="flex items-center">
                <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <span className="text-sm">Data Analyst</span>
              </li>
              <li className="flex items-center">
                <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <span className="text-sm">UX Designer</span>
              </li>
              <li className="flex items-center">
                <span className="bg-blue-100 text-blue-600 p-1 rounded-full mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <span className="text-sm">Systems Integrator</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Resources */}
        <h3 className="font-wawaHeading text-xl font-semibold mb-4">Resources</h3>
        
        <div className="bg-wawa-gray-50 rounded-xl p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-4">Technology</h4>
              <ul className="list-disc list-inside text-sm space-y-2">
                <li>Mobile app development tools</li>
                <li>Analytics and reporting platforms</li>
                <li>Content management systems</li>
                <li>Customer relationship management</li>
                <li>Digital asset management</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-4">Partnerships</h4>
              <ul className="list-disc list-inside text-sm space-y-2">
                <li>Airport management companies</li>
                <li>Influencer networks</li>
                <li>Media and advertising agencies</li>
                <li>Local community organizations</li>
                <li>Strategic brand alliances</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-4">Brand Assets</h4>
              <ul className="list-disc list-inside text-sm space-y-2">
                <li>Brand guidelines and templates</li>
                <li>Photography and video library</li>
                <li>Marketing collateral</li>
                <li>Product information resources</li>
                <li>Brand storytelling materials</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Timeline */}
        <h3 className="font-wawaHeading text-xl font-semibold mb-4">Implementation Timeline</h3>
        
        <div className="bg-white border border-wawa-gray-200 rounded-xl p-6 shadow-sm mb-8">
          <div className="space-y-8">
            <div>
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-4">Q1: Foundation Building</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-wawa-gray-50 p-4 rounded-lg">
                  <h5 className="font-wawaHeading text-base font-semibold mb-2">Key Activities</h5>
                  <ul className="list-disc list-inside text-sm">
                    <li>Finalize strategic partnerships</li>
                    <li>Develop digital campaign assets</li>
                    <li>Establish measurement frameworks</li>
                    <li>Complete team onboarding and training</li>
                  </ul>
                </div>
                <div className="bg-wawa-gray-50 p-4 rounded-lg">
                  <h5 className="font-wawaHeading text-base font-semibold mb-2">Milestones</h5>
                  <ul className="list-disc list-inside text-sm">
                    <li>Partnership agreements signed</li>
                    <li>Campaign creative approved</li>
                    <li>Analytics dashboard launched</li>
                    <li>Team roles and responsibilities defined</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-4">Q2: Initial Launch</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-wawa-gray-50 p-4 rounded-lg">
                  <h5 className="font-wawaHeading text-base font-semibold mb-2">Key Activities</h5>
                  <ul className="list-disc list-inside text-sm">
                    <li>Launch digital marketing campaigns</li>
                    <li>Begin influencer partnerships</li>
                    <li>Implement first airport licensing locations</li>
                    <li>Roll out mobile app enhancements</li>
                  </ul>
                </div>
                <div className="bg-wawa-gray-50 p-4 rounded-lg">
                  <h5 className="font-wawaHeading text-base font-semibold mb-2">Milestones</h5>
                  <ul className="list-disc list-inside text-sm">
                    <li>First campaign performance metrics</li>
                    <li>Initial influencer content published</li>
                    <li>First airport location opened</li>
                    <li>App update released</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-4">Q3: Optimization & Expansion</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-wawa-gray-50 p-4 rounded-lg">
                  <h5 className="font-wawaHeading text-base font-semibold mb-2">Key Activities</h5>
                  <ul className="list-disc list-inside text-sm">
                    <li>Refine campaigns based on Q2 data</li>
                    <li>Expand airport licensing program</li>
                    <li>Launch community engagement initiatives</li>
                    <li>Implement menu innovations</li>
                  </ul>
                </div>
                <div className="bg-wawa-gray-50 p-4 rounded-lg">
                  <h5 className="font-wawaHeading text-base font-semibold mb-2">Milestones</h5>
                  <ul className="list-disc list-inside text-sm">
                    <li>Campaign optimization complete</li>
                    <li>Additional airport locations secured</li>
                    <li>Community events calendar established</li>
                    <li>New menu items launched</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-4">Q4: Analysis & Planning</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-wawa-gray-50 p-4 rounded-lg">
                  <h5 className="font-wawaHeading text-base font-semibold mb-2">Key Activities</h5>
                  <ul className="list-disc list-inside text-sm">
                    <li>Comprehensive performance analysis</li>
                    <li>Develop Year 2 strategy</li>
                    <li>Conduct market research for expansion</li>
                    <li>Prepare budget allocation for next year</li>
                  </ul>
                </div>
                <div className="bg-wawa-gray-50 p-4 rounded-lg">
                  <h5 className="font-wawaHeading text-base font-semibold mb-2">Milestones</h5>
                  <ul className="list-disc list-inside text-sm">
                    <li>Annual performance report</li>
                    <li>Year 2 strategy document</li>
                    <li>Market research findings</li>
                    <li>Next year budget approved</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Success Metrics */}
        <h3 className="font-wawaHeading text-xl font-semibold mb-4">Execution Success Metrics</h3>
        
        <div className="bg-wawa-red-50 rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-4">Implementation Metrics</h4>
              <ul className="list-disc list-inside text-sm space-y-2">
                <li>Percentage of initiatives launched on schedule</li>
                <li>Resource utilization efficiency</li>
                <li>Team collaboration effectiveness</li>
                <li>Quality assurance scores</li>
                <li>Stakeholder satisfaction ratings</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-4">Performance Metrics</h4>
              <ul className="list-disc list-inside text-sm space-y-2">
                <li>Campaign engagement rates</li>
                <li>Partnership performance indicators</li>
                <li>Digital platform adoption metrics</li>
                <li>Customer feedback scores</li>
                <li>Return on marketing investment</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Implementation Examples Section */}
        <section className="implementation-examples mt-8 bg-wawa-gray-50 rounded-xl p-6">
          <h3 className="font-wawaHeading text-xl font-semibold text-wawa-red-600 mb-4">
            Implementation Examples
          </h3>
          
          <div className="space-y-6">
            {/* Project Management Example */}
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">
                Example: Cross-Functional Project Management System
              </h4>
              <p className="text-wawa-gray-700">
                Implementation of an integrated project management framework:
                Team Structure (i.e., marketing, operations, and technology pods),
                Communication Protocols (i.e., daily standups, weekly cross-team syncs),
                Resource Allocation (i.e., dynamic team assignment based on project needs),
                Progress Tracking (i.e., real-time dashboard with key metrics).
                System includes automated reporting and escalation protocols.
              </p>
              <div className="mt-4 text-sm text-wawa-gray-600">
                <strong>Expected Results:</strong> 40% improvement in project completion rates,
                30% reduction in resource conflicts, 25% faster decision-making process.
              </div>
            </div>

            {/* Timeline Management Example */}
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">
                Example: Phased Implementation Timeline
              </h4>
              <p className="text-wawa-gray-700">
                Development of a comprehensive timeline management system:
                Phase Gates (i.e., clear criteria for moving between phases),
                Risk Management (i.e., early warning indicators and mitigation plans),
                Resource Scheduling (i.e., just-in-time resource allocation),
                Performance Monitoring (i.e., milestone tracking and adjustment protocols).
                System includes contingency buffers and acceleration options.
              </p>
              <div className="mt-4 text-sm text-wawa-gray-600">
                <strong>Expected Results:</strong> 35% reduction in timeline delays,
                45% improvement in resource utilization, 30% better risk prediction accuracy.
              </div>
            </div>

            {/* Quality Assurance Example */}
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">
                Example: Implementation Quality Control
              </h4>
              <p className="text-wawa-gray-700">
                Creation of a multi-layer quality assurance system:
                Execution Standards (i.e., detailed checklists for each phase),
                Review Protocols (i.e., peer review process for deliverables),
                Performance Metrics (i.e., quality scoring system),
                Feedback Loops (i.e., continuous improvement mechanisms).
                System includes automated quality monitoring and reporting.
              </p>
              <div className="mt-4 text-sm text-wawa-gray-600">
                <strong>Expected Results:</strong> 50% reduction in implementation errors,
                40% improvement in first-time-right rate, 35% faster issue resolution.
              </div>
            </div>
          </div>
        </section>
      </div>
    </SectionPage>
  );
};

export default Execution; 