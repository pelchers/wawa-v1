import React from 'react';
import { wawaTheme } from '../styles/wawa-theme';

const Conclusion = () => {
  return (
    <section className={`${wawaTheme.dark} ${wawaTheme.section}`} id="conclusion">
      <div className={wawaTheme.container}>
        <h2 className="text-display-md font-wawa-heading font-bold text-wawa-yellow-400 mb-8 text-center">
          Conclusion
        </h2>
        
        <div className="max-w-4xl mx-auto bg-wawa-black-700 p-8 rounded-lg">
          <div className="space-y-6 text-white">
            <p className="text-body-lg">
              The "Soar with Wawa" marketing plan presents a comprehensive three-pronged approach to expand Wawa's brand presence both physically and digitally. By leveraging social media partnerships, corporate events, and strategic airport licensing, we can achieve significant growth in brand awareness and market penetration.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 my-10">
              <div className="bg-wawa-black-600 p-5 rounded-lg">
                <div className="text-wawa-yellow-400 text-4xl font-bold mb-2">01</div>
                <h3 className="text-heading-sm font-wawa-heading font-bold text-white mb-2">Social Media Expansion</h3>
                <p className="text-body-sm text-white/80">
                  Partnering with creators to amplify our brand message and reach new audiences across digital platforms.
                </p>
              </div>
              
              <div className="bg-wawa-black-600 p-5 rounded-lg">
                <div className="text-wawa-yellow-400 text-4xl font-bold mb-2">02</div>
                <h3 className="text-heading-sm font-wawa-heading font-bold text-white mb-2">Corporate Events</h3>
                <p className="text-body-sm text-white/80">
                  Hosting exclusive events with notable artists to generate content and showcase Wawa's corporate culture.
                </p>
              </div>
              
              <div className="bg-wawa-black-600 p-5 rounded-lg">
                <div className="text-wawa-yellow-400 text-4xl font-bold mb-2">03</div>
                <h3 className="text-heading-sm font-wawa-heading font-bold text-white mb-2">Airport Expansion</h3>
                <p className="text-body-sm text-white/80">
                  Leveraging our contract negotiation strengths to expand physical presence in airports nationwide.
                </p>
              </div>
            </div>
            
            <p className="text-body-lg">
              With a strategic budget allocation of $7.5 million and a phased implementation plan over 12 months, we project a strong ROI of 2.9x on our marketing investment. This approach not only builds brand awareness but also creates new revenue streams and tests new markets with minimal upfront costs.
            </p>
            
            <div className="mt-10 text-center">
              <h3 className="text-heading-md font-wawa-heading font-bold text-wawa-yellow-400 mb-6">
                Call to Action
              </h3>
              <p className="text-body-lg mb-8">
                It's time to elevate the Wawa experience nationwide. Let's implement this three-pronged strategy to expand our brand presence, engage new audiences, and establish Wawa as a national convenience store leader.
              </p>
              <button className={`${wawaTheme.buttonSecondary} text-lg px-8 py-4`}>
                Launch Campaign
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conclusion; 