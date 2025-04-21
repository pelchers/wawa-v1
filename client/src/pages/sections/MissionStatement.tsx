import { FC } from 'react';
import SectionPage from '../../components/sections/SectionPage';

const MissionStatement: FC = () => {
  return (
    <SectionPage 
      title="Mission Statement"
      prevSection={{
        title: "Executive Summary",
        path: "/executive-summary"
      }}
      nextSection={{
        title: "Marketing Objectives",
        path: "/marketing-objectives"
      }}
    >
      <div className="prose prose-lg max-w-none">
        <blockquote className="text-xl font-wawaHeading text-wawa-gray-800 italic mb-6 border-l-4 border-wawa-red-600 pl-4">
          "To provide high-quality, customer-focused service with products and experiences that reflect Wawa's commitment to community and innovation."
        </blockquote>
        
        <h3 className="font-wawaHeading text-xl font-semibold mb-4">Our Core Values</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-wawa-yellow-50 p-6 rounded-xl">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Quality</h4>
            <p>We are committed to providing the highest quality products and services to our customers. From our fresh food to our customer service, quality is at the heart of everything we do.</p>
          </div>
          
          <div className="bg-wawa-yellow-50 p-6 rounded-xl">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Community</h4>
            <p>We believe in being a good neighbor and contributing positively to the communities we serve. Our stores are designed to be gathering places that foster connection and belonging.</p>
          </div>
          
          <div className="bg-wawa-yellow-50 p-6 rounded-xl">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Innovation</h4>
            <p>We continuously seek new ways to improve our offerings and customer experience. Innovation drives our growth and helps us stay ahead in a competitive market.</p>
          </div>
          
          <div className="bg-wawa-yellow-50 p-6 rounded-xl">
            <h4 className="font-wawaHeading text-lg font-semibold text-wawa-red-600 mb-2">Customer Focus</h4>
            <p>Our customers are at the center of every decision we make. We strive to understand their needs and exceed their expectations at every touchpoint.</p>
          </div>
        </div>
        
        <h3 className="font-wawaHeading text-xl font-semibold mt-8 mb-4">Unique Selling Proposition</h3>
        <p>
          Our unique selling proposition (USP) is centered around Wawa's commitment to quality, innovation, and customer experience. 
          We aim to deliver exceptional value through social media engagement, corporate events, and strategic licensing to enhance our brand visibility.
        </p>
        
        <h3 className="font-wawaHeading text-xl font-semibold mt-6 mb-4">Long-term Vision</h3>
        <p>
          By 2030, we aim to be recognized as the premier convenience retailer in the United States, known for our exceptional customer experience, 
          innovative product offerings, and strong community connections. We will expand our footprint while maintaining the quality and values 
          that have made Wawa a beloved brand.
        </p>
      </div>
    </SectionPage>
  );
};

export default MissionStatement; 