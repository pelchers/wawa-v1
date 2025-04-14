import React from 'react';
import { wawaTheme } from '../styles/wawa-theme';

const ExecutiveSummary = () => {
  return (
    <section className={`${wawaTheme.primary} ${wawaTheme.section}`}>
      <div className={wawaTheme.container}>
        <h1 className="text-display-xl font-wawa-display font-bold mb-6">
          Soar with Wawa
        </h1>
        <p className="text-body-lg mb-8 max-w-3xl">
          A strategic marketing plan to expand Wawa's brand presence both physically and digitally through social media partnerships, corporate events, and airport licensing opportunities.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {/* About Our Company */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <h3 className="text-heading-sm font-wawa-heading font-bold mb-3">About Our Company</h3>
            <p className="text-body-md">
              Wawa is a leading convenience store brand with a strong regional presence and an expanding footprint across the U.S.
            </p>
          </div>
          
          {/* Our Mission */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <h3 className="text-heading-sm font-wawa-heading font-bold mb-3">Our Mission</h3>
            <p className="text-body-md">
              To provide high-quality, customer-focused service with products and experiences that reflect Wawa's commitment to community and innovation.
            </p>
          </div>
          
          {/* Our Vision */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <h3 className="text-heading-sm font-wawa-heading font-bold mb-3">Our Vision</h3>
            <p className="text-body-md">
              To become the go-to brand for consumers seeking convenience, quality, and community, expanding Wawa's influence and brand culture across the country.
            </p>
          </div>
          
          {/* Objective */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <h3 className="text-heading-sm font-wawa-heading font-bold mb-3">Objective</h3>
            <p className="text-body-md">
              Increase brand awareness, social media engagement, and physical presence in key locations through a three-pronged marketing approach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveSummary; 