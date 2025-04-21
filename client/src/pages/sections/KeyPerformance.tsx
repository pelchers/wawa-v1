import { FC } from 'react';
import SectionPage from '../../components/sections/SectionPage';

const KeyPerformance: FC = () => {
  return (
    <SectionPage 
      title="Key Performance Areas"
      prevSection={{
        title: "Marketing Objectives",
        path: "/marketing-objectives"
      }}
      nextSection={{
        title: "SWOT Analysis",
        path: "/swot-analysis"
      }}
    >
      <div className="prose prose-lg max-w-none">
        <h3 className="font-wawaHeading text-xl font-semibold mb-6">Performance Metrics Overview</h3>
        <p className="mb-8">
          To track our progress and ensure we're meeting our marketing objectives, we've identified key performance 
          indicators across three critical areas: Customer Growth, Market Share, and Digital Engagement.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-wawa-gray-200">
            <h3 className="font-wawaHeading text-xl font-bold text-wawa-red-600 mb-4">Customer Growth</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-wawa-gray-700">Current</span>
                <span className="font-bold text-wawa-red-600">2.5M</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-wawa-gray-700">Target</span>
                <span className="font-bold text-wawa-green-600">3.2M</span>
              </div>
              <div className="h-2 bg-wawa-gray-100 rounded-full">
                <div className="h-2 bg-wawa-red-500 rounded-full" style={{ width: '78%' }}></div>
              </div>
              <p className="text-sm text-wawa-gray-600">
                We aim to increase our active customer base by 700,000 through new market penetration and increased 
                retention of existing customers.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-wawa-gray-200">
            <h3 className="font-wawaHeading text-xl font-bold text-wawa-red-600 mb-4">Market Share</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-wawa-gray-700">Current</span>
                <span className="font-bold text-wawa-red-600">15%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-wawa-gray-700">Target</span>
                <span className="font-bold text-wawa-green-600">25%</span>
              </div>
              <div className="h-2 bg-wawa-gray-100 rounded-full">
                <div className="h-2 bg-wawa-red-500 rounded-full" style={{ width: '60%' }}></div>
              </div>
              <p className="text-sm text-wawa-gray-600">
                We plan to increase our market share in the convenience store sector through strategic expansion 
                and enhanced product offerings.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-wawa-gray-200">
            <h3 className="font-wawaHeading text-xl font-bold text-wawa-red-600 mb-4">Digital Engagement</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-wawa-gray-700">Current</span>
                <span className="font-bold text-wawa-red-600">500K</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-wawa-gray-700">Target</span>
                <span className="font-bold text-wawa-green-600">1.2M</span>
              </div>
              <div className="h-2 bg-wawa-gray-100 rounded-full">
                <div className="h-2 bg-wawa-red-500 rounded-full" style={{ width: '42%' }}></div>
              </div>
              <p className="text-sm text-wawa-gray-600">
                We're working to significantly increase our digital engagement through enhanced social media presence 
                and mobile app improvements.
              </p>
            </div>
          </div>
        </div>
        
        <h3 className="font-wawaHeading text-xl font-semibold mb-4">Additional Performance Indicators</h3>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-wawa-gray-50 p-6 rounded-xl">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Customer Satisfaction</h4>
            <p className="mb-2"><strong>Current:</strong> 4.2/5</p>
            <p className="mb-2"><strong>Target:</strong> 4.5/5</p>
            <p>Measured through customer surveys, app ratings, and social media sentiment analysis.</p>
          </div>
          
          <div className="bg-wawa-gray-50 p-6 rounded-xl">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Brand Awareness</h4>
            <p className="mb-2"><strong>Current:</strong> 65% in core markets, 22% in expansion markets</p>
            <p className="mb-2"><strong>Target:</strong> 75% in core markets, 40% in expansion markets</p>
            <p>Measured through brand recognition surveys and social media reach metrics.</p>
          </div>
          
          <div className="bg-wawa-gray-50 p-6 rounded-xl">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Revenue Growth</h4>
            <p className="mb-2"><strong>Current:</strong> 8% YoY</p>
            <p className="mb-2"><strong>Target:</strong> 15% YoY</p>
            <p>Measured through financial reporting and sales analytics across all channels.</p>
          </div>
          
          <div className="bg-wawa-gray-50 p-6 rounded-xl">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Mobile App Usage</h4>
            <p className="mb-2"><strong>Current:</strong> 35% of transactions</p>
            <p className="mb-2"><strong>Target:</strong> 50% of transactions</p>
            <p>Measured through app analytics and transaction data.</p>
          </div>
        </div>
        
        <h3 className="font-wawaHeading text-xl font-semibold mb-4">Measurement & Reporting</h3>
        <p>
          We will implement a comprehensive performance dashboard that tracks all KPIs in real-time, with weekly reports 
          for tactical adjustments and monthly deep-dive analyses for strategic decision-making. This data-driven approach 
          will allow us to quickly identify what's working and what needs adjustment, ensuring we stay on track to meet our objectives.
        </p>
      </div>
    </SectionPage>
  );
};

export default KeyPerformance; 