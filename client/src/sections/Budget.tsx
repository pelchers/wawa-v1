import React from 'react';
import { wawaTheme } from '../styles/wawa-theme';

const Budget = () => {
  return (
    <section className={`${wawaTheme.secondary} ${wawaTheme.section}`}>
      <div className={wawaTheme.container}>
        <h2 className="text-display-md font-wawa-heading font-bold text-wawa-red-600 mb-8 text-center">
          Budget
        </h2>
        
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-body-lg text-wawa-black-700 text-center">
            Our strategic budget allocation ensures maximum impact across all three prongs of our marketing approach, with careful consideration of ROI for each initiative.
          </p>
        </div>
        
        {/* Budget Breakdown */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="bg-wawa-red-600 text-white p-4">
            <h3 className="text-heading-md font-wawa-heading font-bold">
              Campaign Cost Breakdown
            </h3>
          </div>
          
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-wawa-black-200">
                    <th className="py-3 px-4 text-wawa-black-800 font-wawa-heading">Initiative</th>
                    <th className="py-3 px-4 text-wawa-black-800 font-wawa-heading">Allocation</th>
                    <th className="py-3 px-4 text-wawa-black-800 font-wawa-heading">Percentage</th>
                    <th className="py-3 px-4 text-wawa-black-800 font-wawa-heading">Expected ROI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-wawa-black-100">
                    <td className="py-3 px-4">
                      <div className="font-medium text-wawa-black-800">Social Media Partnerships</div>
                      <div className="text-sm text-wawa-black-600">Creator contracts, product samples, content production</div>
                    </td>
                    <td className="py-3 px-4 font-medium">$2,500,000</td>
                    <td className="py-3 px-4">
                      <div className="w-full bg-wawa-black-100 rounded-full h-2.5">
                        <div className="bg-wawa-red-500 h-2.5 rounded-full" style={{ width: '33%' }}></div>
                      </div>
                      <div className="text-sm mt-1">33%</div>
                    </td>
                    <td className="py-3 px-4 text-wawa-green-600 font-medium">2.8x</td>
                  </tr>
                  
                  <tr className="border-b border-wawa-black-100">
                    <td className="py-3 px-4">
                      <div className="font-medium text-wawa-black-800">Corporate Events</div>
                      <div className="text-sm text-wawa-black-600">Artist fees, venue costs, production, staffing</div>
                    </td>
                    <td className="py-3 px-4 font-medium">$1,800,000</td>
                    <td className="py-3 px-4">
                      <div className="w-full bg-wawa-black-100 rounded-full h-2.5">
                        <div className="bg-wawa-red-500 h-2.5 rounded-full" style={{ width: '24%' }}></div>
                      </div>
                      <div className="text-sm mt-1">24%</div>
                    </td>
                    <td className="py-3 px-4 text-wawa-green-600 font-medium">2.2x</td>
                  </tr>
                  
                  <tr className="border-b border-wawa-black-100">
                    <td className="py-3 px-4">
                      <div className="font-medium text-wawa-black-800">Airport Expansion</div>
                      <div className="text-sm text-wawa-black-600">Licensing fees, build-out costs, initial inventory</div>
                    </td>
                    <td className="py-3 px-4 font-medium">$3,200,000</td>
                    <td className="py-3 px-4">
                      <div className="w-full bg-wawa-black-100 rounded-full h-2.5">
                        <div className="bg-wawa-red-500 h-2.5 rounded-full" style={{ width: '43%' }}></div>
                      </div>
                      <div className="text-sm mt-1">43%</div>
                    </td>
                    <td className="py-3 px-4 text-wawa-green-600 font-medium">3.5x</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="bg-wawa-black-50">
                    <td className="py-3 px-4 font-wawa-heading font-bold text-wawa-black-800">Total Campaign Budget</td>
                    <td className="py-3 px-4 font-wawa-heading font-bold text-wawa-black-800">$7,500,000</td>
                    <td className="py-3 px-4 font-wawa-heading font-bold text-wawa-black-800">100%</td>
                    <td className="py-3 px-4 font-wawa-heading font-bold text-wawa-green-600">2.9x</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
        
        {/* Service Costs */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-heading-sm font-wawa-heading font-bold text-wawa-red-600 mb-4">
              Service Costs
            </h3>
            
            <ul className="space-y-4">
              <li className="flex justify-between items-center pb-3 border-b border-wawa-black-100">
                <span className="text-wawa-black-700">Creator Management Platform</span>
                <span className="font-medium text-wawa-black-800">$120,000/year</span>
              </li>
              <li className="flex justify-between items-center pb-3 border-b border-wawa-black-100">
                <span className="text-wawa-black-700">Analytics & Reporting Tools</span>
                <span className="font-medium text-wawa-black-800">$85,000/year</span>
              </li>
              <li className="flex justify-between items-center pb-3 border-b border-wawa-black-100">
                <span className="text-wawa-black-700">Legal Services</span>
                <span className="font-medium text-wawa-black-800">$200,000</span>
              </li>
              <li className="flex justify-between items-center pb-3 border-b border-wawa-black-100">
                <span className="text-wawa-black-700">Creative Agency Retainer</span>
                <span className="font-medium text-wawa-black-800">$350,000</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-wawa-black-700">PR & Media Relations</span>
                <span className="font-medium text-wawa-black-800">$175,000</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-heading-sm font-wawa-heading font-bold text-wawa-red-600 mb-4">
              Positives & Negatives
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-wawa-green-600 font-medium flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Positives
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-wawa-black-700">
                  <li>Airport expansion provides immediate ROI and long-term brand presence</li>
                  <li>Creator partnerships offer scalable content with high engagement potential</li>
                  <li>Corporate events generate multiple content assets from single investment</li>
                  <li>Balanced approach mitigates risk across different marketing channels</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-wawa-red-600 font-medium flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Negatives
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-wawa-black-700">
                  <li>High upfront costs for airport licensing before revenue generation</li>
                  <li>Creator partnerships require ongoing management and relationship building</li>
                  <li>Corporate events have execution risks and potential scheduling conflicts</li>
                  <li>Market volatility may impact projected ROI figures</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Budget; 