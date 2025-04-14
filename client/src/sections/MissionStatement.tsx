import React from 'react';
import { wawaTheme } from '../styles/wawa-theme';

const MissionStatement = () => {
  return (
    <section className={`${wawaTheme.tertiary} ${wawaTheme.section}`}>
      <div className={wawaTheme.container}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-display-md font-wawa-heading font-bold text-wawa-red-600 mb-8">
            Mission Statement
          </h2>
          
          <p className="text-heading-md font-wawa-heading text-wawa-black-700 mb-8">
            Wawa's commitment to quality, innovation, and exceptional customer experience sets us apart in the convenience store industry.
          </p>
          
          <div className="bg-wawa-yellow-50 border border-wawa-yellow-200 p-8 rounded-lg">
            <p className="text-body-lg italic text-wawa-black-800">
              "We aim to deliver exceptional value through social media engagement, corporate events, and strategic licensing to enhance our brand visibility and create meaningful connections with our customers across the nation."
            </p>
          </div>
          
          <div className="mt-12 flex justify-center">
            <button className={wawaTheme.buttonPrimary}>
              Learn About Our Values
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement; 